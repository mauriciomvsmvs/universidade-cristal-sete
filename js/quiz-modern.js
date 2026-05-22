/* ============================================
   UNIVERSIDADE CRISTAL SETE - SISTEMA DE QUIZ
   ✅ Quiz interativo e moderno
   ============================================ */

function carregarQuiz(aula, container) {
    if (!aula.perguntas || aula.perguntas.length === 0) {
        container.innerHTML = `
            <div class="w-full h-full flex items-center justify-center p-8">
                <div class="bg-white rounded-xl p-8 max-w-2xl w-full text-center">
                    <h2 class="text-2xl font-bold text-gray-900 mb-4">Quiz não disponível</h2>
                    <p class="text-gray-600">Este quiz ainda não possui perguntas cadastradas.</p>
                </div>
            </div>
        `;
        return;
    }
    
    let perguntaAtual = 0;
    let respostas = [];
    let acertos = 0;
    
    function renderizarPergunta() {
        const pergunta = aula.perguntas[perguntaAtual];
        const total = aula.perguntas.length;
        
        container.innerHTML = `
            <div class="w-full h-full flex items-center justify-center p-8 overflow-y-auto">
                <div class="bg-white rounded-xl p-8 max-w-2xl w-full">
                    <!-- HEADER DO QUIZ -->
                    <div class="flex items-center justify-between mb-6">
                        <div>
                            <h2 class="text-2xl font-bold text-gray-900">${aula.titulo}</h2>
                            <p class="text-sm text-gray-500">Pergunta ${perguntaAtual + 1} de ${total}</p>
                        </div>
                        <div class="text-right">
                            <div class="text-3xl font-bold text-primary">${perguntaAtual + 1}/${total}</div>
                        </div>
                    </div>
                    
                    <!-- BARRA DE PROGRESSO -->
                    <div class="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-8">
                        <div class="h-full bg-primary transition-all duration-300" style="width: ${((perguntaAtual + 1) / total) * 100}%"></div>
                    </div>
                    
                    <!-- PERGUNTA -->
                    <div class="mb-6">
                        <h3 class="text-xl font-semibold text-gray-900 mb-6">${pergunta.pergunta}</h3>
                        
                        <!-- OPÇÕES -->
                        <div class="space-y-3" id="opcoes-container">
                            ${pergunta.opcoes.map((opcao, idx) => `
                                <button 
                                    onclick="selecionarOpcao(${idx})" 
                                    id="opcao-${idx}"
                                    class="opcao-btn w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-primary hover:bg-primary/5 transition-all">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center mr-3 font-bold text-gray-500">
                                            ${String.fromCharCode(65 + idx)}
                                        </div>
                                        <span class="text-gray-700">${opcao}</span>
                                    </div>
                                </button>
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- BOTÃO CONFIRMAR -->
                    <div class="flex justify-end">
                        <button 
                            id="btn-confirmar" 
                            onclick="confirmarResposta()" 
                            disabled
                            class="px-6 py-3 bg-gray-300 text-gray-500 rounded-lg font-semibold cursor-not-allowed">
                            Selecione uma resposta
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    
    function renderizarResultado() {
        const porcentagem = Math.round((acertos / aula.perguntas.length) * 100);
        const aprovado = porcentagem >= 70;
        
        // 🔧 SALVAR PROGRESSO DO QUIZ SE APROVADO
        if (aprovado && typeof salvarProgressoAula === 'function') {
            const urlParams = new URLSearchParams(window.location.search);
            const cursoId = urlParams.get('curso');
            const moduloNum = parseInt(urlParams.get('modulo'));
            const aulaNum = parseInt(urlParams.get('aula'));
            
            if (cursoId && moduloNum && aulaNum) {
                salvarProgressoAula(parseInt(cursoId), moduloNum, aulaNum, true);
                console.log('✅ Quiz concluído e salvo!');
            }
        }
        
        container.innerHTML = `
            <div class="w-full h-full flex items-center justify-center p-8">
                <div class="bg-white rounded-xl p-8 max-w-2xl w-full text-center">
                    <!-- ÍCONE -->
                    <div class="mb-6">
                        ${aprovado 
                            ? '<svg class="w-24 h-24 mx-auto text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>'
                            : '<svg class="w-24 h-24 mx-auto text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>'
                        }
                    </div>
                    
                    <!-- RESULTADO -->
                    <h2 class="text-3xl font-bold text-gray-900 mb-2">
                        ${aprovado ? 'Parabéns!' : 'Continue Estudando!'}
                    </h2>
                    <p class="text-xl text-gray-600 mb-8">
                        Você acertou <span class="font-bold text-primary">${acertos}</span> de <span class="font-bold">${aula.perguntas.length}</span> perguntas
                    </p>
                    
                    <!-- PORCENTAGEM -->
                    <div class="mb-8">
                        <div class="text-5xl font-bold ${aprovado ? 'text-green-500' : 'text-yellow-500'} mb-2">
                            ${porcentagem}%
                        </div>
                        <p class="text-gray-500">
                            ${aprovado ? 'Você está pronto para avançar!' : 'Nota mínima para aprovação: 70%'}
                        </p>
                    </div>
                    
                    <!-- BOTÕES -->
                    <div class="flex gap-4 justify-center">
                        ${!aprovado 
                            ? '<button onclick="reiniciarQuiz()" class="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:scale-105 transition-transform">Tentar Novamente</button>'
                            : '<button onclick="proximaAula()" class="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:scale-105 transition-transform">Próxima Aula</button>'
                        }
                    </div>
                </div>
            </div>
        `;
    }
    
    // FUNÇÕES GLOBAIS (acessíveis pelo onclick)
    window.selecionarOpcao = function(idx) {
        // Limpar seleção anterior
        document.querySelectorAll('.opcao-btn').forEach(btn => {
            btn.classList.remove('border-primary', 'bg-primary/10');
            btn.classList.add('border-gray-200');
        });
        
        // Marcar seleção atual
        const opcaoSelecionada = document.getElementById(`opcao-${idx}`);
        opcaoSelecionada.classList.remove('border-gray-200');
        opcaoSelecionada.classList.add('border-primary', 'bg-primary/10');
        
        // Habilitar botão confirmar
        const btnConfirmar = document.getElementById('btn-confirmar');
        btnConfirmar.disabled = false;
        btnConfirmar.classList.remove('bg-gray-300', 'text-gray-500', 'cursor-not-allowed');
        btnConfirmar.classList.add('bg-primary', 'text-white', 'cursor-pointer', 'hover:scale-105', 'transition-transform');
        btnConfirmar.textContent = 'Confirmar Resposta';
        
        // Armazenar resposta
        respostas[perguntaAtual] = idx;
    };
    
    window.confirmarResposta = function() {
        const pergunta = aula.perguntas[perguntaAtual];
        const respostaUsuario = respostas[perguntaAtual];
        const respostaCorreta = pergunta.correta;
        
        // Verificar se acertou (SEM mostrar feedback visual)
        const acertou = respostaUsuario === respostaCorreta;
        if (acertou) acertos++;
        
        // Avançar direto para próxima pergunta OU resultado final
        if (perguntaAtual < aula.perguntas.length - 1) {
            perguntaAtual++;
            renderizarPergunta();
        } else {
            renderizarResultado();
        }
    };
    
    window.reiniciarQuiz = function() {
        perguntaAtual = 0;
        respostas = [];
        acertos = 0;
        renderizarPergunta();
    };
    
    // INICIAR QUIZ
    renderizarPergunta();
}

// Alias para compatibilidade com player.js
function iniciarQuiz(perguntas) {
    const container = document.getElementById('quiz-player');
    const aulaSimulada = {
        titulo: 'Quiz',
        perguntas: perguntas
    };
    carregarQuiz(aulaSimulada, container);
}
