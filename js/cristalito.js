/**
 * CRISTALITO.JS - VERSÃO SIMPLES QUE FUNCIONA
 * Apenas as mudanças que o Mauricio pediu, nada mais!
 */

class Cristalito {
    constructor() {
        this.isOpen = false;
        this.notesKey = 'cristalito_notes';
        this.init();
    }
    
    init() {
        this.createElements();
        this.loadNotes();
        this.attachEvents();
        this.startCollisionDetection(); // NOVO: Detectar elementos importantes
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
                    <p style="font-size: 1.125rem; font-weight: 600; color: #1f2937; margin-bottom: 0.5rem;">
                        👋 Oi! Como posso te ajudar?
                    </p>
                    <p style="color: #6b7280; font-size: 0.875rem;">
                        Estou aqui para facilitar seus estudos na Universidade Cristal Sete!
                    </p>
                </div>
                
                <div class="cristalito-section">
                    <div class="cristalito-section-title">📝 Minhas Anotações</div>
                    <textarea id="cristalito-notes" placeholder="Anote aqui suas ideias, resumos e lembretes de estudo...&#10;&#10;Suas anotações ficam salvas automaticamente! 💾"></textarea>
                    <div class="cristalito-notes-actions">
                        <button class="cristalito-btn cristalito-btn-primary" onclick="cristalito.saveNotes()">💾 Salvar</button>
                        <button class="cristalito-btn cristalito-btn-secondary" onclick="cristalito.clearNotes()">🗑️ Limpar</button>
                    </div>
                </div>
                
                <div class="cristalito-section">
                    <div class="cristalito-section-title">❓ Perguntas Frequentes</div>
                    <div class="cristalito-faq">${this.getFAQHTML()}</div>
                </div>
                
                <div class="cristalito-section">
                    <div class="cristalito-section-title">🔍 Busca Rápida</div>
                    <div class="cristalito-search">
                        <input type="text" id="cristalito-search" placeholder="Buscar cursos, materiais..." onkeypress="if(event.key === 'Enter') cristalito.search()" />
                    </div>
                </div>
                
                <div class="cristalito-section">
                    <div class="cristalito-section-title">🚀 Atalhos Úteis</div>
                    <div class="cristalito-shortcuts">
                        <a href="cursos.html" class="cristalito-shortcut"><span class="cristalito-shortcut-icon">📚</span><span class="cristalito-shortcut-label">Meus Cursos</span></a>
                        <a href="biblioteca.html" class="cristalito-shortcut"><span class="cristalito-shortcut-icon">📖</span><span class="cristalito-shortcut-label">Biblioteca</span></a>
                        <a href="meu-perfil.html" class="cristalito-shortcut"><span class="cristalito-shortcut-icon">👤</span><span class="cristalito-shortcut-label">Meu Progresso</span></a>
                        <a href="integracao.html" class="cristalito-shortcut"><span class="cristalito-shortcut-icon">🎯</span><span class="cristalito-shortcut-label">Integração</span></a>
                    </div>
                </div>
                
                <div class="cristalito-section">
                    <div class="cristalito-contact">
                        <h3>💬 Precisa de mais ajuda?</h3>
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
        return faqs.map((faq, index) => `<div class="cristalito-faq-item" onclick="cristalito.toggleFAQ(${index})"><div class="cristalito-faq-question">${faq.question}</div><div class="cristalito-faq-answer">${faq.answer}</div></div>`).join('');
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
