/**
 * MateFútbol - Chat con OpenAI
 * Panel de chat con system prompt restrictivo para matemática de 7mo grado
 */

const Chat = {
    get API_KEY() { return CONFIG.OPENAI_API_KEY; },
    API_URL: 'https://api.openai.com/v1/chat/completions',
    MODEL: 'gpt-4o-mini',
    messages: [],
    isLoading: false,

    SYSTEM_PROMPT: `Sos un profesor de matemática para estudiantes de séptimo grado (12-13 años) de la Ciudad de Buenos Aires, Argentina. 

REGLAS ESTRICTAS:
1. SOLO respondés preguntas sobre matemática de séptimo grado: números enteros, fracciones, decimales, porcentajes, proporciones, ecuaciones de primer grado, geometría (ángulos, triángulos, cuadriláteros, áreas, perímetros, volúmenes) y estadística/probabilidad.
2. Si el usuario pregunta algo NO relacionado con matemática (juegos, deportes que no sean ejemplos matemáticos, noticias, consejos personales, otras materias, etc.), respondé educadamente: "Soy tu entrenador de matemática. Preguntame lo que quieras sobre los temas de séptimo grado. ¿En qué puedo ayudarte con matemática hoy?"
3. Usá un lenguaje simple, claro y apropiado para un chico/a de 12-13 años de Argentina.
4. Cuando sea posible, usá ejemplos de fútbol para explicar.
5. Sé conciso pero completo. No des respuestas de más de 4-5 oraciones salvo que sea necesario.
6. NO resuelvas evaluaciones o exámenes directamente. Guiá al estudiante para que llegue solo/a a la respuesta.
7. NO des código de programación, no hables de política, no des consejos médicos o personales.
8. Tu nombre es "Profe" y sos fanático de fútbol.`,

    init() {
        this.loadHistory();
        this.bindEvents();
        this.renderMessages();
    },

    loadHistory() {
        try {
            const saved = localStorage.getItem('matefutbol_chat');
            if (saved) {
                this.messages = JSON.parse(saved);
            }
        } catch (e) {
            this.messages = [];
        }
    },

    saveHistory() {
        try {
            // Solo guardar últimos 50 mensajes para no llenar localStorage
            const toSave = this.messages.slice(-50);
            localStorage.setItem('matefutbol_chat', JSON.stringify(toSave));
        } catch (e) {
            console.warn('No se pudo guardar historial de chat:', e);
        }
    },

    bindEvents() {
        const input = document.getElementById('chatInput');
        const btn = document.getElementById('btnSend');

        if (btn) {
            btn.addEventListener('click', () => this.sendMessage());
        }

        if (input) {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.sendMessage();
                }
            });
        }
    },

    async sendMessage() {
        const input = document.getElementById('chatInput');
        const text = input.value.trim();

        if (!text || this.isLoading) return;

        // Agregar mensaje del usuario
        this.addMessage('user', text);
        input.value = '';

        // Mostrar indicador de carga
        this.showTypingIndicator();
        this.isLoading = true;

        try {
            const response = await this.callAPI();
            this.hideTypingIndicator();
            this.addMessage('assistant', response);
        } catch (error) {
            this.hideTypingIndicator();
            this.addMessage('error', `⚠️ Error: ${error.message || 'No pude conectarme. Probá de nuevo.'}`);
            console.error('Error en chat:', error);
        } finally {
            this.isLoading = false;
        }
    },

    async callAPI() {
        // Solo enviar mensajes validos a la API (user y assistant)
        const validMessages = this.messages
            .filter(m => m.role === 'user' || m.role === 'assistant')
            .map(m => ({ role: m.role, content: m.content }));

        const messagesForAPI = [
            { role: 'system', content: this.SYSTEM_PROMPT },
            ...validMessages
        ];

        const response = await fetch(this.API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.API_KEY}`
            },
            body: JSON.stringify({
                model: this.MODEL,
                messages: messagesForAPI,
                temperature: 0.7,
                max_tokens: 500
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error?.message || `HTTP ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0]?.message?.content || 'No tengo una respuesta en este momento.';
    },

    addMessage(role, content) {
        this.messages.push({ role, content, timestamp: Date.now() });
        this.saveHistory();
        this.renderMessages();
    },

    renderMessages() {
        const container = document.getElementById('chatMessages');
        if (!container) return;

        container.innerHTML = this.messages.map(msg => {
            if (msg.role === 'typing') {
                return `
                    <div class="chat-message">
                        <span class="msg-label">Profe está escribiendo...</span>
                        <div class="typing-indicator">
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                `;
            }

            const label = msg.role === 'assistant' ? '<span class="msg-label">Profe</span>' : '';
            const contentHtml = msg.role === 'assistant'
                ? this.renderMarkdown(msg.content)
                : this.escapeHtml(msg.content);
            return `
                <div class="chat-message ${msg.role}">
                    ${label}
                    ${contentHtml}
                </div>
            `;
        }).join('');

        // Scroll al final
        container.scrollTop = container.scrollHeight;
    },

    renderMarkdown(text) {
        try {
            if (typeof marked !== 'undefined' && marked.parse) {
                return marked.parse(text, { breaks: true });
            }
        } catch (e) {
            console.warn('marked.js no disponible, usando texto plano');
        }
        return this.escapeHtml(text).replace(/\n/g, '<br>');
    },

    showTypingIndicator() {
        this.messages.push({ role: 'typing', content: '', timestamp: Date.now() });
        this.renderMessages();
    },

    hideTypingIndicator() {
        this.messages = this.messages.filter(m => m.role !== 'typing');
        this.renderMessages();
    },

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML.replace(/\n/g, '<br>');
    }
};

// Inicializar chat
document.addEventListener('DOMContentLoaded', () => {
    Chat.init();
});
