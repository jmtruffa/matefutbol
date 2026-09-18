/**
 * MateFútbol - App Principal
 * Maneja navegación, progreso y renderizado de lecciones
 */

const App = {
    currentTopicId: null,
    completedTopics: [],
    passedQuizzes: [],

    init() {
        this.loadProgress();
        this.renderTopicList();
        this.updateProgress();
        this.bindEvents();
    },

    loadProgress() {
        try {
            const saved = localStorage.getItem('matefutbol_progress');
            if (saved) {
                const data = JSON.parse(saved);
                if (Array.isArray(data)) {
                    // Formato viejo (solo completedTopics)
                    this.completedTopics = data;
                    this.passedQuizzes = [];
                } else {
                    this.completedTopics = data.completedTopics || [];
                    this.passedQuizzes = data.passedQuizzes || [];
                }
            }
        } catch (e) {
            console.warn('No se pudo cargar el progreso:', e);
            this.completedTopics = [];
            this.passedQuizzes = [];
        }
    },

    saveProgress() {
        try {
            const data = {
                completedTopics: this.completedTopics,
                passedQuizzes: this.passedQuizzes
            };
            localStorage.setItem('matefutbol_progress', JSON.stringify(data));
        } catch (e) {
            console.warn('No se pudo guardar el progreso:', e);
        }
    },

    markQuizPassed(topicId) {
        if (!this.passedQuizzes.includes(topicId)) {
            this.passedQuizzes.push(topicId);
            this.saveProgress();
        }
    },

    renderTopicList() {
        const list = document.getElementById('topicList');
        if (!list) return;

        list.innerHTML = topics.map(topic => {
            const isCompleted = this.completedTopics.includes(topic.id);
            const isActive = this.currentTopicId === topic.id;
            const quizPassed = this.passedQuizzes.includes(topic.id);
            let statusIcon = '';
            if (isCompleted) {
                statusIcon = ' ✓';
            } else if (quizPassed) {
                statusIcon = ' 📝✓';
            }
            return `
                <li class="${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" 
                    data-topic="${topic.id}" 
                    onclick="App.selectTopic('${topic.id}')">
                    <span class="topic-icon">${topic.icon}</span>
                    <span>${topic.title}${statusIcon}</span>
                </li>
            `;
        }).join('');
    },

    selectTopic(topicId) {
        this.currentTopicId = topicId;
        this.renderTopicList();

        const topic = topics.find(t => t.id === topicId);
        if (!topic) return;

        // Ocultar welcome y quiz, mostrar lesson
        document.getElementById('welcomeScreen').style.display = 'none';
        document.getElementById('quizContainer').style.display = 'none';
        document.getElementById('lessonContainer').style.display = 'block';

        // Renderizar contenido
        document.getElementById('lessonTitle').textContent = `${topic.icon} ${topic.title}`;
        document.getElementById('lessonContent').innerHTML = topic.content;

        // Scroll al inicio
        document.getElementById('contentArea').scrollTop = 0;
    },

    showWelcome() {
        this.currentTopicId = null;
        this.renderTopicList();
        document.getElementById('welcomeScreen').style.display = 'block';
        document.getElementById('lessonContainer').style.display = 'none';
        document.getElementById('quizContainer').style.display = 'none';
    },

    completeTopic() {
        if (!this.currentTopicId) return;

        if (this.completedTopics.includes(this.currentTopicId)) {
            alert('¡Este tema ya está completado!');
            return;
        }

        if (!this.passedQuizzes.includes(this.currentTopicId)) {
            alert('⚠️ Primero tenés que aprobar la evaluación de este tema.\n\nNecesitás el 70% de respuestas correctas en 10 preguntas para poder marcar el gol.\n\n¡Dale a "Hacer Evaluación" y demostrá lo que sabés!');
            return;
        }

        this.completedTopics.push(this.currentTopicId);
        this.saveProgress();
        this.updateProgress();
        this.renderTopicList();
        this.showGoalCelebration();
    },

    updateProgress() {
        const total = topics.length;
        const completed = this.completedTopics.length;
        const percentage = total > 0 ? (completed / total) * 100 : 0;

        const goalsEl = document.getElementById('goals');
        const fillEl = document.getElementById('progressFill');

        if (goalsEl) goalsEl.textContent = `${completed}/${total}`;
        if (fillEl) fillEl.style.width = `${percentage}%`;
    },

    showGoalCelebration() {
        const celebration = document.getElementById('goalCelebration');
        if (!celebration) return;

        celebration.style.display = 'flex';
        this.playGoalSound();

        setTimeout(() => {
            celebration.style.display = 'none';
        }, 2500);
    },

    playGoalSound() {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;

            const ctx = new AudioContext();
            const now = ctx.currentTime;

            // Sonido de "gol" simple con osciladores
            const osc1 = ctx.createOscillator();
            const gain1 = ctx.createGain();
            osc1.connect(gain1);
            gain1.connect(ctx.destination);

            osc1.type = 'sine';
            osc1.frequency.setValueAtTime(440, now);
            osc1.frequency.exponentialRampToValueAtTime(880, now + 0.1);
            osc1.frequency.exponentialRampToValueAtTime(440, now + 0.3);

            gain1.gain.setValueAtTime(0.3, now);
            gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.5);

            osc1.start(now);
            osc1.stop(now + 0.5);

            // Segundo tono
            const osc2 = ctx.createOscillator();
            const gain2 = ctx.createGain();
            osc2.connect(gain2);
            gain2.connect(ctx.destination);

            osc2.type = 'square';
            osc2.frequency.setValueAtTime(523, now + 0.15);
            osc2.frequency.exponentialRampToValueAtTime(1047, now + 0.35);

            gain2.gain.setValueAtTime(0.15, now + 0.15);
            gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.6);

            osc2.start(now + 0.15);
            osc2.stop(now + 0.6);
        } catch (e) {
            // Silencioso si no hay soporte de audio
        }
    },

    resetProgress() {
        if (!confirm('¿Seguro que querés borrar TODO el progreso?\n\nSe van a eliminar:\n• Goles marcados\n• Evaluaciones aprobadas\n• Conversaciones con el entrenador\n\nEsta acción no se puede deshacer.')) {
            return;
        }

        // Limpiar localStorage
        localStorage.removeItem('matefutbol_progress');
        localStorage.removeItem('matefutbol_chat');

        // Resetear estado en memoria
        this.completedTopics = [];
        this.passedQuizzes = [];
        this.currentTopicId = null;

        // Limpiar chat
        Chat.messages = [];
        Chat.renderMessages();

        // Actualizar UI
        this.renderTopicList();
        this.updateProgress();
        this.showWelcome();

        alert('✅ Progreso reseteado. ¡Empezá de nuevo cuando quieras!');
    },

    bindEvents() {
        // Botón de evaluación
        const btnQuiz = document.getElementById('btnQuiz');
        if (btnQuiz) {
            btnQuiz.addEventListener('click', () => {
                if (!this.currentTopicId) return;
                Quiz.start(this.currentTopicId);
            });
        }

        // Botón de completar tema
        const btnComplete = document.getElementById('btnComplete');
        if (btnComplete) {
            btnComplete.addEventListener('click', () => {
                this.completeTopic();
            });
        }

        // Botón cerrar quiz
        const btnCloseQuiz = document.getElementById('btnCloseQuiz');
        if (btnCloseQuiz) {
            btnCloseQuiz.addEventListener('click', () => {
                this.selectTopic(this.currentTopicId);
            });
        }

        // Botón resetear progreso
        const btnReset = document.getElementById('btnReset');
        if (btnReset) {
            btnReset.addEventListener('click', () => {
                this.resetProgress();
            });
        }
    }
};

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
