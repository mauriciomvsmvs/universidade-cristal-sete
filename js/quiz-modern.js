/* ============================================
   QUIZ MODERNO + CERTIFICADOS
   Substitua o quiz.js pelo este arquivo
   ============================================ */

let currentQuizData = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let quizStartTime = null;

// INICIAR QUIZ
function iniciarQuiz(perguntas) {
    console.log('🎯 Iniciando quiz moderno com', perguntas.length, 'perguntas');
    
    currentQuizData = perguntas;
    currentQuestionIndex = 0;
    userAnswers = [];
    quizStartTime = Date.now();
    
    // Limpar resultado anterior
    const resultadoDiv = document.getElementById('quiz-resultado');
    if (resultadoDiv) {
        resultadoDiv.classList.add('hidden');
    }
    
    // Renderizar primeira pergunta
    renderizarPerguntaModerna();
}

// RENDERIZAR PERGUNTA MODERNA
function renderizarPerguntaModerna() {
    const container = document.getElementById('quiz-container');
    
    if (!container || !currentQuizData) {
        console.error('Container do quiz não encontrado ou dados inválidos');
        return;
    }
    
    const pergunta = currentQuizData[currentQuestionIndex];
    const totalPerguntas = currentQuizData.length;
    const progresso = Math.round(((currentQuestionIndex + 1) / totalPerguntas) * 100);
    
    container.innerHTML = `
        <div class="quiz-content-modern">
            <!-- HEADER -->
            <div class="quiz-header-modern">
                <h2>📝 Quiz - Nossa História</h2>
                <p class="quiz-subtitle">Teste seus conhecimentos sobre a Cristal Sete</p>
            </div>
            
            <!-- BARRA DE PROGRESSO -->
            <div class="quiz-progress-modern">
                <div class="progress-info">
                    <span class="progress-step">Pergunta ${currentQuestionIndex + 1} de ${totalPerguntas}</span>
                    <span class="progress-percentage">${progresso}%</span>
                </div>
                <div class="progress-track">
                    <div class="progress-fill-modern" style="width: ${progresso}%"></div>
                </div>
            </div>
            
            <!-- CARD DA PERGUNTA -->
            <div class="question-card">
                <span class="question-number">QUESTÃO ${currentQuestionIndex + 1}</span>
                <h3 class="question-text">${pergunta.pergunta}</h3>
            </div>
            
            <!-- OPÇÕES -->
            <div class="options-grid-modern">
                ${pergunta.opcoes.map((opcao, index) => `
                    <div class="option-card" data-index="${index}" onclick="selecionarOpcaoModerna(this)">
                        <div class="option-letter-circle">${String.fromCharCode(65 + index)}</div>
                        <span class="option-text-modern">${opcao}</span>
                        <div class="option-checkmark">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <!-- NAVEGAÇÃO -->
            <div class="quiz-navigation-modern">
                ${currentQuestionIndex > 0 ? `
                    <button class="btn-quiz-back" onclick="voltarPerguntaModerna()">
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                        </svg>
                        Voltar
                    </button>
                ` : '<div></div>'}
                
                <button id="btn-next-modern" class="btn-quiz-next" onclick="proximaPerguntaModerna()" disabled>
                    ${currentQuestionIndex < totalPerguntas - 1 ? 'Próxima Pergunta' : 'Finalizar Quiz'}
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                </button>
            </div>
        </div>
    `;
    
    // Se já existe resposta para esta pergunta, marcar
    if (userAnswers[currentQuestionIndex] !== undefined) {
        const respostaSalva = userAnswers[currentQuestionIndex];
        const opcaoSalva = container.querySelector(`.option-card[data-index="${respostaSalva}"]`);
        if (opcaoSalva) {
            selecionarOpcaoModerna(opcaoSalva);
        }
    }
}

// SELECIONAR OPÇÃO MODERNA
function selecionarOpcaoModerna(element) {
    const container = document.getElementById('quiz-container');
    
    // Remover seleção de todas as opções
    const todasOpcoes = container.querySelectorAll('.option-card');
    todasOpcoes.forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Marcar opção selecionada
    element.classList.add('selected');
    
    // Habilitar botão próximo
    const btnNext = document.getElementById('btn-next-modern');
    if (btnNext) {
        btnNext.disabled = false;
    }
    
    // Salvar resposta
    const index = parseInt(element.getAttribute('data-index'));
    userAnswers[currentQuestionIndex] = index;
}

// VOLTAR PERGUNTA
function voltarPerguntaModerna() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderizarPerguntaModerna();
    }
}

// PRÓXIMA PERGUNTA
function proximaPerguntaModerna() {
    // Verificar se respondeu
    if (userAnswers[currentQuestionIndex] === undefined) {
        alert('Por favor, selecione uma resposta');
        return;
    }
    
    // Se não for a última pergunta, avançar
    if (currentQuestionIndex < currentQuizData.length - 1) {
        currentQuestionIndex++;
        renderizarPerguntaModerna();
    } else {
        // Última pergunta - finalizar quiz
        finalizarQuizModerno();
    }
}

// FINALIZAR QUIZ MODERNO
function finalizarQuizModerno() {
    console.log('✅ Finalizando quiz...');
    
    // Calcular resultado
    let acertos = 0;
    const totalPerguntas = currentQuizData.length;
    
    currentQuizData.forEach((pergunta, index) => {
        if (userAnswers[index] === pergunta.correta) {
            acertos++;
        }
    });
    
    const percentualAcerto = Math.round((acertos / totalPerguntas) * 100);
    const aprovado = percentualAcerto >= 70; // 70% para aprovação
    
    const tempoTotal = Math.round((Date.now() - quizStartTime) / 1000);
    const tempoFormatado = formatarTempo(tempoTotal);
    
    // Salvar resultado
    salvarResultadoQuiz(acertos, totalPerguntas, percentualAcerto, tempoTotal);
    
    // Mostrar resultado moderno
    mostrarResultadoModerno(acertos, totalPerguntas, percentualAcerto, aprovado, tempoFormatado);
    
    // Se aprovado, gerar certificado
    if (aprovado) {
        setTimeout(() => {
            gerarCertificado();
        }, 2000);
    }
}

// MOSTRAR RESULTADO MODERNO
function mostrarResultadoModerno(acertos, total, percentual, aprovado, tempo) {
    const container = document.getElementById('quiz-container');
    
    if (!container) return;
    
    // Mensagem baseada no desempenho
    let mensagem = '';
    let emoji = '';
    
    if (percentual >= 90) {
        mensagem = 'Excelente! Você dominou completamente o conteúdo!';
        emoji = '🎉';
    } else if (percentual >= 70) {
        mensagem = 'Parabéns! Você demonstrou bom conhecimento sobre nossa história!';
        emoji = '✅';
    } else {
        mensagem = 'Continue estudando! Você pode refazer o quiz para melhorar sua nota.';
        emoji = '📚';
    }
    
    container.innerHTML = `
        <div class="quiz-content-modern">
            <div class="result-card-modern">
                <!-- ÍCONE -->
                <div class="result-icon-circle ${aprovado ? 'success' : 'failed'}">
                    ${emoji}
                </div>
                
                <!-- TÍTULO -->
                <h2 class="result-title ${aprovado ? 'success' : 'failed'}">
                    ${aprovado ? 'Parabéns!' : 'Não foi dessa vez'}
                </h2>
                
                <!-- PONTUAÇÃO -->
                <div class="result-score ${aprovado ? 'success' : 'failed'}">
                    ${percentual}%
                </div>
                
                <!-- MENSAGEM -->
                <p class="result-message">${mensagem}</p>
                
                <!-- ESTATÍSTICAS -->
                <div class="result-stats">
                    <div class="stat-item">
                        <span class="stat-value">${acertos}/${total}</span>
                        <span class="stat-label">Acertos</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">${tempo}</span>
                        <span class="stat-label">Tempo</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">${aprovado ? '✓' : '✗'}</span>
                        <span class="stat-label">Status</span>
                    </div>
                </div>
                
                <!-- AÇÕES -->
                <div class="result-actions">
                    ${aprovado ? `
                        <button class="btn-result-primary" onclick="baixarCertificado()">
                            📜 Baixar Certificado
                        </button>
                    ` : `
                        <button class="btn-result-primary" onclick="refazerQuiz()">
                            🔄 Tentar Novamente
                        </button>
                    `}
                    <button class="btn-result-secondary" onclick="verGabaritoModerno()">
                        📋 Ver Gabarito
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Confetti se aprovado
    if (aprovado) {
        lancarConfetti();
    }
}

// VER GABARITO MODERNO
function verGabaritoModerno() {
    // Implementar visualização do gabarito
    alert('Gabarito será implementado em breve!');
}

// REFAZER QUIZ
function refazerQuiz() {
    iniciarQuiz(currentQuizData);
}

// ============================================
// SISTEMA DE CERTIFICADOS
// ============================================

function gerarCertificado() {
    const urlParams = new URLSearchParams(window.location.search);
    const cursoId = parseInt(urlParams.get('cursoId'));
    
    console.log('🎓 Gerando certificado para curso ID:', cursoId);
    
    // Obter informações do curso
    const curso = getCursoById(cursoId);
    
    if (!curso) {
        console.error('❌ Curso não encontrado. ID:', cursoId);
        console.log('📚 Cursos disponíveis:', typeof cursos !== 'undefined' ? cursos.map(c => c.id) : 'cursos não definido');
        return;
    }
    
    console.log('✅ Curso encontrado:', curso.titulo);
    
    // Dados do certificado
    const certificado = {
        aluno: obterNomeAluno(),
        curso: curso.titulo,
        data: new Date().toLocaleDateString('pt-BR'),
        codigo: gerarCodigoCertificado(),
        duracao: curso.duracao,
        instrutor: curso.instrutor
    };
    
    // Salvar certificado
    salvarCertificado(cursoId, certificado);
    
    console.log('📜 Certificado gerado e salvo:', certificado);
}

function baixarCertificado() {
    const urlParams = new URLSearchParams(window.location.search);
    const cursoId = parseInt(urlParams.get('cursoId'));
    
    console.log('📥 Tentando baixar certificado do curso:', cursoId);
    
    const certificado = obterCertificado(cursoId);
    
    if (!certificado) {
        console.error('❌ Certificado não encontrado no localStorage');
        alert('Certificado não encontrado. Isso pode acontecer se você ainda não concluiu o quiz com aprovação (70%+).');
        return;
    }
    
    console.log('✅ Certificado encontrado:', certificado);
    
    // Abrir modal de certificado
    mostrarModalCertificado(certificado);
}

function mostrarModalCertificado(cert) {
    const modal = document.createElement('div');
    modal.className = 'certificado-modal';
    modal.innerHTML = `
        <div class="certificado-overlay" onclick="fecharCertificado()"></div>
        <div class="certificado-container">
            <button class="certificado-close" onclick="fecharCertificado()">✕</button>
            
            <div class="certificado-content">
                <!-- HEADER -->
                <div class="cert-header">
                    <img src="assets/logos/universidade.png" alt="Universidade Cristal Sete" class="cert-logo">
                    <h1 class="cert-title">CERTIFICADO DE CONCLUSÃO</h1>
                </div>
                
                <!-- CORPO -->
                <div class="cert-body">
                    <p class="cert-text">Certificamos que</p>
                    <h2 class="cert-name">${cert.aluno}</h2>
                    <p class="cert-text">concluiu com sucesso o curso</p>
                    <h3 class="cert-course">${cert.curso}</h3>
                    <p class="cert-details">Carga horária: ${cert.duracao} | Instrutor: ${cert.instrutor}</p>
                </div>
                
                <!-- FOOTER -->
                <div class="cert-footer">
                    <div class="cert-date">
                        <p>Apucarana, ${cert.data}</p>
                    </div>
                    <div class="cert-signature">
                        <div class="signature-line"></div>
                        <p class="signature-name">Universidade Cristal Sete</p>
                    </div>
                    <div class="cert-code">
                        <p>Código de verificação: <strong>${cert.codigo}</strong></p>
                    </div>
                </div>
                
                <!-- LOGOS RODAPÉ -->
                <div class="cert-logos">
                    <img src="assets/logos/cristal-sete.png" alt="Cristal Sete" class="cert-logo-small">
                    <img src="assets/logos/blindex.png" alt="Blindex" class="cert-logo-small">
                </div>
            </div>
            
            <!-- BOTÕES -->
            <div class="cert-actions">
                <button class="btn-cert-download" onclick="downloadCertificadoPDF()">
                    📥 Baixar PDF
                </button>
                <button class="btn-cert-share" onclick="compartilharCertificado()">
                    📤 Compartilhar
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function fecharCertificado() {
    const modal = document.querySelector('.certificado-modal');
    if (modal) {
        modal.remove();
    }
}

function downloadCertificadoPDF() {
    alert('Download do PDF será implementado em breve!');
    // Implementar geração de PDF com jsPDF ou similar
}

function compartilharCertificado() {
    if (navigator.share) {
        navigator.share({
            title: 'Certificado - Universidade Cristal Sete',
            text: 'Concluí o curso na Universidade Cristal Sete!',
            url: window.location.href
        });
    } else {
        alert('Compartilhamento não disponível neste navegador');
    }
}

// ============================================
// FUNÇÕES AUXILIARES
// ============================================

function obterNomeAluno() {
    // Por enquanto retorna nome genérico
    // Implementar sistema de login depois
    return 'Colaborador Cristal Sete';
}

function gerarCodigoCertificado() {
    return 'CS-' + Date.now().toString(36).toUpperCase();
}

function salvarCertificado(cursoId, certificado) {
    const key = `certificado_${cursoId}`;
    try {
        localStorage.setItem(key, JSON.stringify(certificado));
    } catch (e) {
        console.error('Erro ao salvar certificado:', e);
    }
}

function obterCertificado(cursoId) {
    const key = `certificado_${cursoId}`;
    try {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : null;
    } catch (e) {
        console.error('Erro ao obter certificado:', e);
        return null;
    }
}

function lancarConfetti() {
    const colors = ['#2F60AB', '#4a7fc4', '#10b981', '#f59e0b', '#ef4444'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }
}

function salvarResultadoQuiz(acertos, total, percentual, tempo) {
    const urlParams = new URLSearchParams(window.location.search);
    const cursoId = urlParams.get('cursoId');
    const moduloNum = urlParams.get('modulo');
    const aulaNum = urlParams.get('aula');
    
    const key = `quiz_result_${cursoId}_${moduloNum}_${aulaNum}`;
    
    const resultado = {
        acertos,
        total,
        percentual,
        tempo,
        aprovado: percentual >= 70,
        data: new Date().toISOString()
    };
    
    try {
        localStorage.setItem(key, JSON.stringify(resultado));
    } catch (e) {
        console.error('Erro ao salvar resultado:', e);
    }
}

function formatarTempo(segundos) {
    const minutos = Math.floor(segundos / 60);
    const segs = segundos % 60;
    
    if (minutos > 0) {
        return `${minutos}min ${segs}s`;
    } else {
        return `${segs}s`;
    }
}

console.log('✅ Quiz Moderno + Certificados carregado!');
