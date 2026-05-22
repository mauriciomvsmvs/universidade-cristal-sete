/**
 * CRISTALITO.JS - VERSÃO SIMPLES QUE FUNCIONA
 * Apenas as mudanças que o Mauricio pediu, nada mais!
 */

class Cristalito {
    constructor() {
        this.isOpen = false;
        this.notesKey = 'cristalito_notes';
        this.mediaRecorder = null;
        this.audioChunks = [];
        this.isRecording = false;
        this.recordingStartTime = 0;
        this.timerInterval = null;
        this.init();
    }
    
    init() {
        this.createElements();
        this.loadNotes();
        this.attachEvents();
        this.startCollisionDetection(); // NOVO: Detectar elementos importantes
        this.makeDraggable(); // NOVO: Tornar arrastável
    }
    
    createElements() {
        const overlay = document.createElement('div');
        overlay.id = 'cristalito-overlay';
        document.body.appendChild(overlay);
        
        const button = document.createElement('div');
        button.id = 'cristalito-button';
        button.innerHTML = '<img src="assets/cristalito-duvida.png" alt="Cristalito" />';
        document.body.appendChild(button);
        
        const panel = document.createElement('div');
        panel.id = 'cristalito-panel';
        panel.innerHTML = this.getPanelHTML();
        document.body.appendChild(panel);
    }
    
    getPanelHTML() {
        return `
            <div class="cristalito-header">
                <div class="cristalito-header-avatar">
                    <img src="assets/cristalito-feliz.png" alt="Cristalito" />
                </div>
                <div class="cristalito-header-info">
                    <h2>Cristalito</h2>
                    <p>Seu assistente de estudos</p>
                </div>
                <button class="cristalito-close" onclick="cristalito.close()">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
            
            <div class="cristalito-content">
                <div class="cristalito-section">
                    <div class="cristalito-welcome">
                        <svg class="cristalito-icon-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                        </svg>
                        <h3>Oi! Como posso te ajudar?</h3>
                        <p>Estou aqui para facilitar seus estudos na Universidade Cristal Sete!</p>
                    </div>
                </div>
                
                <div class="cristalito-section">
                    <div class="cristalito-section-title">
                        <svg class="cristalito-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>
                        Minhas Anotações
                    </div>
                    <textarea id="cristalito-notes" placeholder="Anote aqui suas ideias, resumos e lembretes de estudo...

Suas anotações ficam salvas automaticamente!"></textarea>
                    <div class="cristalito-notes-actions">
                        <button class="cristalito-btn cristalito-btn-primary" onclick="cristalito.saveNotes()">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path>
                            </svg>
                            Salvar
                        </button>
                        <button id="btn-audio-notes" class="cristalito-btn cristalito-btn-secondary" onclick="cristalito.toggleAudioRecording()">
                            <svg id="icon-audio-rec" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                            </svg>
                            <span id="text-audio-rec">Gravar Áudio</span>
                        </button>
                        <button class="cristalito-btn cristalito-btn-secondary" onclick="cristalito.clearNotes()">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                            </svg>
                            Limpar
                        </button>
                    </div>
                    <div id="audio-status" style="display: none; margin-top: 0.75rem; padding: 0.75rem; background: #fee; border-radius: 0.5rem; font-size: 0.875rem; text-align: center; color: #dc2626;">
                        <span id="audio-timer">00:00</span> - Gravando...
                    </div>
                </div>
                
                <div class="cristalito-section">
                    <div class="cristalito-section-title">
                        <svg class="cristalito-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                        </svg>
                        Pergunte ao Cristalito
                        <span style="font-size: 0.75rem; font-weight: normal; opacity: 0.7; margin-left: 0.5rem;">(Em breve)</span>
                    </div>
                    <div style="background: url('assets/CRISTALITO_PROFESSOR.png') no-repeat center center; background-size: cover; border: 2px solid #e5e7eb; border-radius: 1rem; padding: 1.5rem; min-height: 400px; display: flex; flex-direction: column; justify-content: flex-end; position: relative;">
                        <div style="background: rgba(255, 255, 255, 0.98); border-radius: 0.75rem; padding: 1rem; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                            <textarea id="pergunta-ia" placeholder="Digite sua dúvida aqui... O Cristalito vai te ajudar em breve!" disabled style="width: 100%; min-height: 70px; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 0.875rem; background: white; cursor: not-allowed; resize: none;"></textarea>
                            <button class="cristalito-btn cristalito-btn-primary" disabled style="margin-top: 0.5rem; cursor: not-allowed; opacity: 0.6; width: 100%;">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width: 18px; height: 18px;">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                                Perguntar
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="cristalito-section">
                    <div class="cristalito-section-title">
                        <svg class="cristalito-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        Perguntas Frequentes
                    </div>
                    <div class="cristalito-faq">${this.getFAQHTML()}</div>
                </div>
                
                <div class="cristalito-section">
                    <div class="cristalito-section-title">
                        <svg class="cristalito-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                        Busca Rápida
                    </div>
                    <div class="cristalito-search">
                        <svg class="cristalito-search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                        <input type="text" id="cristalito-search" placeholder="Buscar cursos, materiais..." onkeypress="if(event.key === 'Enter') cristalito.search()" />
                    </div>
                </div>
                
                <div class="cristalito-section">
                    <div class="cristalito-section-title">
                        <svg class="cristalito-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        Atalhos Úteis
                    </div>
                    <div class="cristalito-shortcuts">
                        <a href="cursos.html" class="cristalito-shortcut">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                            </svg>
                            <span>Meus Cursos</span>
                        </a>
                        <a href="biblioteca.html" class="cristalito-shortcut">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                            </svg>
                            <span>Biblioteca</span>
                        </a>
                        <a href="meu-perfil.html" class="cristalito-shortcut">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                            <span>Meu Progresso</span>
                        </a>
                        <a href="integracao.html" class="cristalito-shortcut">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <span>Integração</span>
                        </a>
                    </div>
                </div>
                
                <div class="cristalito-section">
                    <div class="cristalito-contact">
                        <svg class="cristalito-icon-contact" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <h3>Precisa de mais ajuda?</h3>
                        <a href="mailto:rh@cristalsete.com.br">Falar com RH</a>
                    </div>
                </div>
            </div>
        `;
    }
    
    getFAQHTML() {
        const faqs = [
            { question: "Como funciona a Universidade Cristal Sete?", answer: "A Universidade oferece cursos online, biblioteca digital e certificados. Basta fazer login, escolher um curso e começar a aprender!" },
            { question: "Onde vejo meus certificados?", answer: "Acesse 'Meu Perfil' no menu principal. Lá você encontra todos os certificados dos cursos que você concluiu com sucesso!" },
            { question: "Como faço um curso?", answer: "Vá em 'Cursos', escolha o curso desejado, clique em 'Começar' e assista às aulas. Não esqueça de fazer os quizzes para testar seu conhecimento!" },
            { question: "Preciso completar os cursos em ordem?", answer: "Não! Você pode fazer os cursos na ordem que preferir, exceto os cursos de Integração que são obrigatórios para novos colaboradores." },
            { question: "Minhas anotações ficam salvas?", answer: "Sim! Suas anotações aqui no Cristalito ficam salvas automaticamente no seu navegador. Basta clicar em 'Salvar'!" },
            { question: "Como tirar dúvidas sobre o conteúdo?", answer: "Entre em contato com o RH através do email rh@cristalsete.com.br ou use o botão 'Falar com RH' aqui embaixo!" }
        ];
        return faqs.map((faq, index) => `
            <div class="cristalito-faq-item" onclick="cristalito.toggleFAQ(${index})">
                <div class="cristalito-faq-question">
                    <svg class="cristalito-faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span>${faq.question}</span>
                </div>
                <div class="cristalito-faq-answer">${faq.answer}</div>
            </div>
        `).join('');
    }
    
    attachEvents() {
        document.getElementById('cristalito-button').addEventListener('click', () => this.open());
        document.getElementById('cristalito-overlay').addEventListener('click', () => this.close());
        const notesTextarea = document.getElementById('cristalito-notes');
        if (notesTextarea) notesTextarea.addEventListener('input', () => this.autoSaveNotes());
    }
    
    open() {
        this.isOpen = true;
        document.getElementById('cristalito-panel').classList.add('open');
        document.getElementById('cristalito-overlay').classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    
    close() {
        this.isOpen = false;
        document.getElementById('cristalito-panel').classList.remove('open');
        document.getElementById('cristalito-overlay').classList.remove('show');
        document.body.style.overflow = '';
    }
    
    toggleFAQ(index) {
        document.querySelectorAll('.cristalito-faq-item')[index].classList.toggle('active');
    }
    
    loadNotes() {
        const notes = localStorage.getItem(this.notesKey);
        if (notes) setTimeout(() => { const t = document.getElementById('cristalito-notes'); if(t) t.value = notes; }, 100);
    }
    
    autoSaveNotes() {
        const t = document.getElementById('cristalito-notes');
        if(t) localStorage.setItem(this.notesKey, t.value);
    }
    
    saveNotes() {
        this.autoSaveNotes();
        this.showToast('💾 Anotações salvas com sucesso!');
    }
    
    clearNotes() {
        if (confirm('Tem certeza que deseja limpar todas as anotações?')) {
            const t = document.getElementById('cristalito-notes');
            if(t) { t.value = ''; localStorage.removeItem(this.notesKey); this.showToast('🗑️ Anotações limpas!'); }
        }
    }
    
    async toggleAudioRecording() {
        if (this.isRecording) {
            this.stopRecording();
        } else {
            await this.startRecording();
        }
    }
    
    async startRecording() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            this.mediaRecorder = new MediaRecorder(stream);
            this.audioChunks = [];
            
            this.mediaRecorder.ondataavailable = (event) => {
                this.audioChunks.push(event.data);
            };
            
            this.mediaRecorder.onstop = () => {
                const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
                this.downloadAudio(audioBlob);
                stream.getTracks().forEach(track => track.stop());
            };
            
            this.mediaRecorder.start();
            this.isRecording = true;
            this.recordingStartTime = Date.now();
            
            document.getElementById('btn-audio-notes').style.background = '#ef4444';
            document.getElementById('text-audio-rec').textContent = 'Parar Gravação';
            document.getElementById('audio-status').style.display = 'block';
            
            this.timerInterval = setInterval(() => this.updateTimer(), 1000);
            
            this.showToast('🎙️ Gravação iniciada!');
        } catch (error) {
            console.error('Erro ao acessar microfone:', error);
            this.showToast('❌ Não foi possível acessar o microfone!');
        }
    }
    
    stopRecording() {
        if (this.mediaRecorder && this.isRecording) {
            this.mediaRecorder.stop();
            this.isRecording = false;
            
            clearInterval(this.timerInterval);
            
            document.getElementById('btn-audio-notes').style.background = '';
            document.getElementById('text-audio-rec').textContent = 'Gravar Áudio';
            document.getElementById('audio-status').style.display = 'none';
            
            this.showToast('✅ Áudio salvo! Download iniciado.');
        }
    }
    
    updateTimer() {
        const elapsed = Math.floor((Date.now() - this.recordingStartTime) / 1000);
        const minutes = Math.floor(elapsed / 60).toString().padStart(2, '0');
        const seconds = (elapsed % 60).toString().padStart(2, '0');
        document.getElementById('audio-timer').textContent = minutes + ':' + seconds;
    }
    
    downloadAudio(blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'anotacao-' + new Date().toISOString().slice(0,19).replace(/:/g,'-') + '.webm';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 100);
    }
    
    search() {
        const q = document.getElementById('cristalito-search').value;
        if(q.trim()) window.location.href = 'cursos.html?busca=' + encodeURIComponent(q);
    }
    
    showToast(msg) {
        const toast = document.createElement('div');
        toast.className = 'cristalito-toast';
        toast.textContent = msg;
        document.body.appendChild(toast);
        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); }, 3000);
    }
    
    // TORNAR O CRISTALITO ARRASTÁVEL
    makeDraggable() {
        const button = document.getElementById('cristalito-button');
        if (!button) return;
        
        let isDragging = false;
        let startX, startY, initialLeft, initialTop;
        
        // Adicionar cursor de movimento
        button.style.cursor = 'grab';
        
        // Mouse/Touch down - Começar arrasto
        const startDrag = (e) => {
            // Prevenir se já estiver aberto o painel
            if (this.isOpen) return;
            
            isDragging = true;
            button.style.cursor = 'grabbing';
            button.style.animation = 'none'; // Parar flutuação
            
            // Limpar bottom/right para não conflitar
            button.style.bottom = 'auto';
            button.style.right = 'auto';
            
            // IMPORTANTE: Capturar posições DEPOIS de limpar bottom/right
            const rect = button.getBoundingClientRect();
            initialLeft = rect.left;
            initialTop = rect.top;
            
            // Garantir que left/top estão setados
            button.style.left = initialLeft + 'px';
            button.style.top = initialTop + 'px';
            
            if (e.type === 'mousedown') {
                startX = e.clientX;
                startY = e.clientY;
            } else if (e.type === 'touchstart') {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
            }
            
            e.preventDefault();
        };
        
        // Mouse/Touch move - Arrastar
        const drag = (e) => {
            if (!isDragging) return;
            
            let currentX, currentY;
            
            if (e.type === 'mousemove') {
                currentX = e.clientX;
                currentY = e.clientY;
            } else if (e.type === 'touchmove') {
                currentX = e.touches[0].clientX;
                currentY = e.touches[0].clientY;
            }
            
            // Delta = posição atual do mouse - posição inicial do mouse
            const deltaX = currentX - startX;
            const deltaY = currentY - startY;
            
            // Nova posição = posição inicial do botão + quanto o mouse moveu
            const newLeft = initialLeft + deltaX;
            const newTop = initialTop + deltaY;
            
            // Limites da tela (não deixar sair)
            const maxLeft = window.innerWidth - button.offsetWidth;
            const maxTop = window.innerHeight - button.offsetHeight;
            
            const boundedLeft = Math.max(0, Math.min(newLeft, maxLeft));
            const boundedTop = Math.max(0, Math.min(newTop, maxTop));
            
            button.style.left = boundedLeft + 'px';
            button.style.top = boundedTop + 'px';
            button.style.bottom = 'auto';
            button.style.right = 'auto';
            
            e.preventDefault();
        };
        
        // Mouse/Touch up - Soltar
        const stopDrag = () => {
            if (!isDragging) return;
            
            isDragging = false;
            button.style.cursor = 'grab';
            button.style.animation = 'cristalito-float 3s ease-in-out infinite';
            
            // Salvar posição no localStorage
            const rect = button.getBoundingClientRect();
            localStorage.setItem('cristalito-position', JSON.stringify({
                left: rect.left,
                top: rect.top
            }));
        };
        
        // Events para mouse
        button.addEventListener('mousedown', startDrag);
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDrag);
        
        // Events para touch (mobile)
        button.addEventListener('touchstart', startDrag, { passive: false });
        document.addEventListener('touchmove', drag, { passive: false });
        document.addEventListener('touchend', stopDrag);
        
        // Restaurar posição salva
        this.restorePosition();
        
        // Prevenir que o clique para abrir aconteça durante arrasto
        button.addEventListener('click', (e) => {
            if (isDragging) {
                e.stopPropagation();
                e.preventDefault();
            }
        });
    }
    
    // RESTAURAR POSIÇÃO SALVA
    restorePosition() {
        const button = document.getElementById('cristalito-button');
        const savedPos = localStorage.getItem('cristalito-position');
        
        if (savedPos) {
            try {
                const pos = JSON.parse(savedPos);
                button.style.left = pos.left + 'px';
                button.style.top = pos.top + 'px';
                button.style.bottom = 'auto';
                button.style.right = 'auto';
            } catch (e) {
                console.log('Erro ao restaurar posição do Cristalito');
            }
        }
    }
    
    // DETECTAR ELEMENTOS IMPORTANTES E AJUSTAR TRANSPARÊNCIA
    startCollisionDetection() {
        const button = document.getElementById('cristalito-button');
        if (!button) return;
        
        const checkCollision = () => {
            // Não fazer nada se o painel estiver aberto
            if (this.isOpen) {
                button.classList.remove('over-important');
                return;
            }
            
            const buttonRect = button.getBoundingClientRect();
            
            // Seletores de elementos importantes (botões, links, controles)
            const importantSelectors = [
                'button:not(#cristalito-button):not(.cristalito-close)',
                'a[href]',
                '.btn',
                '.btn-primary',
                '.btn-secondary',
                '[onclick]',
                'input',
                'select',
                'textarea',
                '.nav-link',
                '.course-card',
                '.player-controls'
            ];
            
            let isOverImportant = false;
            
            // Verificar cada tipo de elemento
            importantSelectors.forEach(selector => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(el => {
                    const elRect = el.getBoundingClientRect();
                    
                    // Verificar se há sobreposição
                    const overlap = !(
                        buttonRect.right < elRect.left ||
                        buttonRect.left > elRect.right ||
                        buttonRect.bottom < elRect.top ||
                        buttonRect.top > elRect.bottom
                    );
                    
                    if (overlap && isElementVisible(el)) {
                        isOverImportant = true;
                    }
                });
            });
            
            // Aplicar ou remover classe
            if (isOverImportant) {
                button.classList.add('over-important');
            } else {
                button.classList.remove('over-important');
            }
        };
        
        // Verificar se elemento está visível
        function isElementVisible(el) {
            const style = window.getComputedStyle(el);
            return style.display !== 'none' && 
                   style.visibility !== 'hidden' && 
                   style.opacity !== '0';
        }
        
        // Verificar periodicamente
        setInterval(checkCollision, 500);
        
        // Verificar ao scroll
        window.addEventListener('scroll', checkCollision);
        
        // Verificar ao resize
        window.addEventListener('resize', checkCollision);
        
        // Primeira verificação
        setTimeout(checkCollision, 1000);
    }
}

// INICIALIZAR - SÓ NÃO CARREGAR SE FOR index.html
let cristalito;
document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    const pagina = path.split('/').pop() || '';
    
    // NÃO carregar APENAS se for especificamente index.html OU raiz vazia
    const ehIndex = pagina === 'index.html' || 
                    (pagina === '' && (path === '/' || path.endsWith('/universidade-cristal-sete') || path.endsWith('/universidade-cristal-sete/')));
    
    if (!ehIndex) {
        cristalito = new Cristalito();
        console.log('✅ Cristalito carregado em:', pagina || 'página');
    } else {
        console.log('🏠 Index detectado - Cristalito não carregado');
    }
});
