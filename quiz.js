/**
 * MateFútbol - Sistema de Evaluaciones
 * Genera quizzes de multiple choice usando OpenAI
 */

const Quiz = {
    get API_KEY() { return CONFIG.OPENAI_API_KEY; },
    API_URL: 'https://api.openai.com/v1/chat/completions',
    MODEL: 'gpt-4o-mini',

    currentTopicId: null,
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    answers: [],

    async start(topicId) {
        this.currentTopicId = topicId;
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answers = [];

        const topic = topics.find(t => t.id === topicId);
        if (!topic) return;

        // Mostrar contenedor de quiz
        document.getElementById('welcomeScreen').style.display = 'none';
        document.getElementById('lessonContainer').style.display = 'none';
        document.getElementById('quizContainer').style.display = 'block';

        // Mostrar loading
        document.getElementById('quizLoading').style.display = 'block';
        document.getElementById('quizQuestions').innerHTML = '';

        try {
            this.questions = await this.generateQuestions(topic);
            this.shuffleOptions();
            document.getElementById('quizLoading').style.display = 'none';
            this.renderCurrentQuestion();
        } catch (error) {
            document.getElementById('quizLoading').style.display = 'none';
            document.getElementById('quizQuestions').innerHTML = `
                <div class="question-card">
                    <p style="color:#c62828;">⚠️ No se pudieron generar las preguntas. Probá de nuevo.</p>
                    <button class="btn btn-primary" onclick="Quiz.start('${topicId}')">🔄 Reintentar</button>
                </div>
            `;
            console.error('Error generando quiz:', error);
        }
    },

    async generateQuestions(topic) {
        const prompt = `Generá exactamente 10 preguntas de opción múltiple en español (Argentina) para un estudiante de séptimo grado (12-13 años) sobre el tema: "${topic.title}".

Contenido específico a evaluar: ${topic.description}

REGLAS:
1. Las preguntas deben ser apropiadas para séptimo grado de la Ciudad de Buenos Aires.
2. Nivel de dificultad: MEDIO-ALTO. No preguntes conceptos demasiado básicos. Incluí problemas que requieran razonamiento, cálculos de varios pasos, o aplicación de conceptos en contextos no triviales.
3. Cada pregunta debe tener exactamente 6 opciones (A, B, C, D, E, F).
4. Solo una opción es correcta. Las 5 opciones incorrectas deben ser MUY SIMILARES a la correcta: números cercanos, errores de signo comunes, simplificaciones parciales, o distractores que parezcan correctos a primera vista. El estudiante debe tener que pensar y calcular para distinguir la verdadera respuesta.
5. Incluí una explicación breve pero completa de por qué la respuesta es correcta y por qué las otras no.
6. Usá ejemplos de fútbol cuando sea posible y naturales.
7. Respondé ÚNICAMENTE con un array JSON válido. Sin markdown, sin texto adicional.

Formato exacto:
[
  {
    "question": "texto de la pregunta",
    "options": ["opción A", "opción B", "opción C", "opción D", "opción E", "opción F"],
    "correctIndex": 0,
    "explanation": "explicación de la respuesta correcta"
  }
]`;

        const response = await fetch(this.API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.API_KEY}`
            },
            body: JSON.stringify({
                model: this.MODEL,
                messages: [
                    {
                        role: 'system',
                        content: 'Sos un generador de evaluaciones de matemática para séptimo grado. Respondés ÚNICAMENTE con JSON válido, sin texto adicional, sin markdown.'
                    },
                    { role: 'user', content: prompt }
                ],
                temperature: 0.7,
                max_tokens: 3500
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error?.message || `HTTP ${response.status}`);
        }

        const data = await response.json();
        const content = data.choices[0]?.message?.content || '';

        // Extraer JSON de la respuesta
        let jsonStr = content;
        
        // A veces GPT envuelve en markdown
        const jsonMatch = content.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
            jsonStr = jsonMatch[0];
        }

        const questions = JSON.parse(jsonStr);
        
        if (!Array.isArray(questions) || questions.length === 0) {
            throw new Error('Respuesta inválida del API');
        }

        return questions;
    },

    shuffleOptions() {
        // Mezclar aleatoriamente las opciones de cada pregunta y ajustar correctIndex
        this.questions.forEach(q => {
            const pairs = q.options.map((opt, idx) => ({ option: opt, isCorrect: idx === q.correctIndex }));
            // Fisher-Yates shuffle
            for (let i = pairs.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
            }
            q.options = pairs.map(p => p.option);
            q.correctIndex = pairs.findIndex(p => p.isCorrect);
        });
    },

    renderCurrentQuestion() {
        const container = document.getElementById('quizQuestions');
        
        if (this.currentQuestionIndex >= this.questions.length) {
            this.renderResults();
            return;
        }

        const q = this.questions[this.currentQuestionIndex];
        const progress = this.currentQuestionIndex + 1;
        const total = this.questions.length;

        container.innerHTML = `
            <div class="question-card">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                    <span class="question-number">${progress}</span>
                    <span style="color:#666; font-size:0.9rem;">Pregunta ${progress} de ${total}</span>
                </div>
                <div class="question-text">${this.escapeHtml(q.question)}</div>
                <div class="options-list" id="optionsList">
                    ${q.options.map((opt, idx) => `
                        <button class="btn btn-option" data-index="${idx}" onclick="Quiz.selectOption(${idx})">
                            <strong>${String.fromCharCode(65 + idx)}.</strong> ${this.escapeHtml(opt)}
                        </button>
                    `).join('')}
                </div>
                <div class="explanation" id="explanation"></div>
                <div id="nextButtonContainer" style="margin-top:16px; display:none;">
                    <button class="btn btn-primary" onclick="Quiz.nextQuestion()">
                        ${progress === total ? 'Ver Resultados 🏆' : 'Siguiente Pregunta ➤'}
                    </button>
                </div>
            </div>
        `;
    },

    selectOption(index) {
        const q = this.questions[this.currentQuestionIndex];
        const options = document.querySelectorAll('.btn-option');
        const explanation = document.getElementById('explanation');
        const nextBtn = document.getElementById('nextButtonContainer');

        // Deshabilitar todas las opciones
        options.forEach(btn => btn.disabled = true);

        // Marcar correcta e incorrecta
        options.forEach((btn, idx) => {
            if (idx === q.correctIndex) {
                btn.classList.add('correct');
            } else if (idx === index && idx !== q.correctIndex) {
                btn.classList.add('incorrect');
            }
        });

        // Mostrar explicación
        if (explanation) {
            const isCorrect = index === q.correctIndex;
            explanation.innerHTML = `
                <strong>${isCorrect ? '✅ ¡Correcto!' : '❌ Incorrecto'}</strong><br>
                ${this.escapeHtml(q.explanation)}
            `;
            explanation.classList.add('show');
        }

        // Mostrar botón siguiente
        if (nextBtn) {
            nextBtn.style.display = 'block';
        }

        // Guardar respuesta
        this.answers.push({
            questionIndex: this.currentQuestionIndex,
            selected: index,
            correct: index === q.correctIndex
        });

        if (index === q.correctIndex) {
            this.score++;
        }
    },

    nextQuestion() {
        this.currentQuestionIndex++;
        this.renderCurrentQuestion();
    },

    renderResults() {
        const container = document.getElementById('quizQuestions');
        const total = this.questions.length;
        const percentage = Math.round((this.score / total) * 100);
        const passed = percentage >= 70;

        let emoji = '😕';
        let message = '¡Seguí practicando!';
        let color = '#c62828';

        if (percentage >= 90) {
            emoji = '🏆⚽🎉';
            message = '¡Excelente! ¡Sos un crack de la matemática!';
            color = '#2e7d32';
        } else if (passed) {
            emoji = '👍⚽';
            message = '¡Aprobado! Ya podés completar el tema.';
            color = '#2e7d32';
        } else if (percentage >= 50) {
            emoji = '💪';
            message = '¡Casi! Necesitás el 70% para aprobar. Repasá y volvé a intentar.';
            color = '#f57f17';
        }

        container.innerHTML = `
            <div class="quiz-results">
                <div class="result-emoji">${emoji}</div>
                <h3 style="color:${color};">${message}</h3>
                <div class="result-score">${this.score}/${total}</div>
                <p style="font-size:1.1rem; color:#666; margin-bottom:20px;">${percentage}% de respuestas correctas</p>
                <p style="font-size:0.95rem; color:#888; margin-bottom:20px;">Se necesita el 70% para aprobar y completar el tema.</p>
                <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
                    <button class="btn btn-primary" onclick="Quiz.start('${this.currentTopicId}')">🔄 Hacer Otra Evaluación</button>
                    <button class="btn btn-success" onclick="App.selectTopic('${this.currentTopicId}')">📖 Volver a la Teoría</button>
                </div>
            </div>
        `;

        // Si aprobó, marcar el quiz como pasado
        if (passed) {
            App.markQuizPassed(this.currentTopicId);
            App.playGoalSound();
        }
    },

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
};
