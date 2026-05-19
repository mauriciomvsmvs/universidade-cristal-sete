/**
 * CRISTALITO.JS
 * Assistente Virtual da Universidade Cristal Sete
 * 
 * Funcionalidades:
 * - Bloco de anotações (salva no navegador)
 * - FAQ interativo
 * - Busca rápida
 * - Atalhos úteis
 * - Contato com RH
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
        this.checkForUpdates();
    }
    
    createElements() {
        // Criar overlay
        const overlay = document.createElement('div');
        overlay.id = 'cristalito-overlay';
        document.body.appendChild(overlay);
        
        // Criar botão flutuante
        const button = document.createElement('div');
        button.id = 'cristalito-button';
        button.innerHTML = `
            <img src="assets/cristalito-duvida.png" alt="Cristalito" />
        `;
        document.body.appendChild(button);
        
        // Criar painel lateral
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
                <!-- SAUDAÇÃO -->
                <div class="cristalito-section">
                    <p style="font-size: 1.125rem; font-weight: 600; color: #1f2937; margin-bottom: 0.5rem;">
                        👋 Oi! Como posso te ajudar?
                    </p>
                    <p style="color: #6b7280; font-size: 0.875rem;">
                        Estou aqui para facilitar seus estudos na Universidade Cristal Sete!
                    </p>
                </div>
                
                <!-- ANOTAÇÕES -->
                <div class="cristalito-section">
                    <div class="cristalito-section-title">
                        📝 Minhas Anotações
                    </div>
                    <textarea 
                        id="cristalito-notes" 
                        placeholder="Anote aqui suas ideias, resumos e lembretes de estudo...&#10;&#10;Suas anotações ficam salvas automaticamente! 💾"
                    ></textarea>
                    <div class="cristalito-notes-actions">
                        <button class="cristalito-btn cristalito-btn-primary" onclick="cristalito.saveNotes()">
                            💾 Salvar
                        </button>
                        <button class="cristalito-btn cristalito-btn-secondary" onclick="cristalito.clearNotes()">
                            🗑️ Limpar
                        </button>
                    </div>
                </div>
                
                <!-- FAQ -->
                <div class="cristalito-section">
                    <div class="cristalito-section-title">
                        ❓ Perguntas Frequentes
                    </div>
                    <div class="cristalito-faq">
                        ${this.getFAQHTML()}
                    </div>
                </div>
                
                <!-- BUSCA RÁPIDA -->
                <div class="cristalito-section">
                    <div class="cristalito-section-title">
                        🔍 Busca Rápida
                    </div>
                    <div class="cristalito-search">
                        <input 
                            type="text" 
                            id="cristalito-search" 
                            placeholder="Buscar cursos, materiais..."
                            onkeypress="if(event.key === 'Enter') cristalito.search()"
                        />
                    </div>
                </div>
                
                <!-- ATALHOS -->
                <div class="cristalito-section">
                    <div class="cristalito-section-title">
                        🚀 Atalhos Úteis
                    </div>
                    <div class="cristalito-shortcuts">
                        <a href="cursos.html" class="cristalito-shortcut">
                            <span class="cristalito-shortcut-icon">📚</span>
                            <span class="cristalito-shortcut-label">Meus Cursos</span>
                        </a>
                        <a href="biblioteca.html" class="cristalito-shortcut">
                            <span class="cristalito-shortcut-icon">📖</span>
                            <span class="cristalito-shortcut-label">Biblioteca</span>
                        </a>
                        <a href="meu-perfil.html" class="cristalito-shortcut">
                            <span class="cristalito-shortcut-icon">👤</span>
                            <span class="cristalito-shortcut-label">Meu Progresso</span>
                        </a>
                        <a href="integracao.html" class="cristalito-shortcut">
                            <span class="cristalito-shortcut-icon">🎯</span>
                            <span class="cristalito-shortcut-label">Integração</span>
                        </a>
                    </div>
                </div>
                
                <!-- CONTATO -->
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
            {
                question: "Como funciona a Universidade Cristal Sete?",
                answer: "A Universidade oferece cursos online, biblioteca digital e certificados. Basta fazer login, escolher um curso e começar a aprender!"
            },
            {
                question: "Onde vejo meus certificados?",
                answer: "Acesse 'Meu Perfil' no menu principal. Lá você encontra todos os certificados dos cursos que você concluiu com sucesso!"
            },
            {
                question: "Como faço um curso?",
                answer: "Vá em 'Cursos', escolha o curso desejado, clique em 'Começar' e assista às aulas. Não esqueça de fazer os quizzes para testar seu conhecimento!"
            },
            {
                question: "Preciso completar os cursos em ordem?",
                answer: "Não! Você pode fazer os cursos na ordem que preferir, exceto os cursos de Integração que são obrigatórios para novos colaboradores."
            },
            {
                question: "Minhas anotações ficam salvas?",
                answer: "Sim! Suas anotações aqui no Cristalito ficam salvas automaticamente no seu navegador. Basta clicar em 'Salvar'!"
            },
            {
                question: "Como tirar dúvidas sobre o conteúdo?",
                answer: "Entre em contato com o RH através do email rh@cristalsete.com.br ou use o botão 'Falar com RH' aqui embaixo!"
            }
        ];
        
        return faqs.map((faq, index) => `
            <div class="cristalito-faq-item" onclick="cristalito.toggleFAQ(${index})">
                <div class="cristalito-faq-question">${faq.question}</div>
                <div class="cristalito-faq-answer">${faq.answer}</div>
            </div>
        `).join('');
    }
    
    attachEvents() {
        // Botão flutuante
        document.getElementById('cristalito-button').addEventListener('click', () => {
            this.open();
        });
        
        // Overlay
        document.getElementById('cristalito-overlay').addEventListener('click', () => {
            this.close();
        });
        
        // Auto-save nas anotações
        const notesTextarea = document.getElementById('cristalito-notes');
        if (notesTextarea) {
            notesTextarea.addEventListener('input', () => {
                this.autoSaveNotes();
            });
        }
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
        const items = document.querySelectorAll('.cristalito-faq-item');
        items[index].classList.toggle('active');
    }
    
    loadNotes() {
        const notes = localStorage.getItem(this.notesKey);
        if (notes) {
            setTimeout(() => {
                const textarea = document.getElementById('cristalito-notes');
                if (textarea) {
                    textarea.value = notes;
                }
            }, 100);
        }
    }
    
    autoSaveNotes() {
        const textarea = document.getElementById('cristalito-notes');
        if (textarea) {
            localStorage.setItem(this.notesKey, textarea.value);
        }
    }
    
    saveNotes() {
        const textarea = document.getElementById('cristalito-notes');
        if (textarea) {
            localStorage.setItem(this.notesKey, textarea.value);
            this.showToast('💾 Anotações salvas com sucesso!');
        }
    }
    
    clearNotes() {
        if (confirm('Tem certeza que deseja limpar todas as anotações?')) {
            const textarea = document.getElementById('cristalito-notes');
            if (textarea) {
                textarea.value = '';
                localStorage.removeItem(this.notesKey);
                this.showToast('🗑️ Anotações limpas!');
            }
        }
    }
    
    search() {
        const query = document.getElementById('cristalito-search').value;
        if (query.trim()) {
            window.location.href = `cursos.html?busca=${encodeURIComponent(query)}`;
        }
    }
    
    showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'cristalito-toast';
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
    
    checkForUpdates() {
        // Placeholder para futuras notificações
        // Pode ser usado para avisar sobre novos cursos, certificados, etc.
    }
}

// Inicializar Cristalito quando a página carregar
let cristalito;
document.addEventListener('DOMContentLoaded', function() {
    // SEMPRE INICIALIZAR, exceto se for especificamente a página index.html
    const path = window.location.pathname.toLowerCase();
    
    // Lista de páginas onde o Cristalito NÃO deve aparecer
    const paginasSemCristalito = ['index.html', '/'];
    
    // Verifica se a URL atual corresponde a alguma página da lista
    const naoMostrar = paginasSemCristalito.some(pagina => {
        return path === pagina || path.endsWith(pagina);
    });
    
    if (!naoMostrar) {
        cristalito = new Cristalito();
        console.log('🤖 Cristalito carregado e pronto para ajudar!');
    } else {
        console.log('🏠 Página inicial - Cristalito não carregado');
    }
});
