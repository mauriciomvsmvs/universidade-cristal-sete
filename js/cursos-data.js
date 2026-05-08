/* ============================================
   UNIVERSIDADE CRISTAL SETE - DADOS DOS CURSOS
   ✅ VERSÃO LIMPA - APENAS 2 CURSOS
   ============================================ */

const cursos = [
    // ============================================
    // CURSO 1: BEM-VINDO À CRISTAL SETE
    // ============================================
    {
        id: 1,
        titulo: "Bem-vindo à Cristal Sete",
        descricao: "Conheça a história, valores e cultura da Cristal Sete. Este curso é obrigatório para todos os novos colaboradores e apresenta como tudo começou, nossos principais marcos e o crescimento da empresa ao longo dos anos.",
        categoria: "Institucional",
        nivel: "Iniciante",
        duracao: "30min",
        instrutor: "Equipe Cristal Sete",
        thumbnail: "assets/cursos/curso-bem-vindo.jpg",
        obrigatorio: true,
        objetivos: [
            "Conhecer a história e origem da Cristal Sete",
            "Entender os principais marcos e conquistas da empresa",
            "Compreender o crescimento e expansão ao longo dos anos",
            "Conectar-se com a cultura e valores organizacionais"
        ],
        prerequisitos: [
            "Nenhum pré-requisito necessário"
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Nossa História",
                aulas: [
                    {
                        tipo: "video",
                        titulo: "Como Tudo Começou",
                        url: "https://www.youtube.com/watch?v=SFSDhaNYpfM",
                        duracao: "10min",
                        descricao: "Conheça a origem da Cristal Sete, os fundadores e como tudo começou."
                    },
                    {
                        tipo: "slide",
                        titulo: "Marcos Importantes",
                        url: "https://docs.google.com/presentation/d/1RIKbRm4AFEHd8cI3sdfY_Tqwqe3YXMFl/edit?slide=id.p1#slide=id.p1",
                        slides: 10,
                        descricao: "Os principais marcos e conquistas que moldaram nossa trajetória."
                    },
                    {
                        tipo: "video",
                        titulo: "Crescimento e Expansão",
                        url: "https://www.youtube.com/watch?v=tWMhQh4blbI",
                        duracao: "10min",
                        descricao: "Como a Cristal Sete cresceu e se expandiu ao longo dos anos."
                    },
                    {
                        tipo: "slide",
                        titulo: "Apresentação Institucional",
                        url: "https://docs.google.com/presentation/d/1ubOkcaFkpGXkOrFQZxjdcd80r-dcMYVi/edit?slide=id.p1#slide=id.p1",
                        slides: 19,
                        descricao: "Conheça a Cristal Sete em detalhes: estrutura, processos e diferenciais competitivos que nos tornam referência no mercado de vidros de segurança."
                    },
                    {
                        tipo: "quiz",
                        titulo: "Quiz - Nossa História",
                        perguntas: [
                            {
                                pergunta: "Quem fundou a primeira vidraçaria de Apucarana, dando início à história da Cristal Sete?",
                                opcoes: [
                                    "Sandro Henriques",
                                    "Marcus Pezotti",
                                    "Milton Bastos Henriquis",
                                    "Rosângela Henriques"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Em que ano nasceu oficialmente a Cristal Sete?",
                                opcoes: [
                                    "1984",
                                    "1999",
                                    "2003",
                                    "2009"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Qual foi um dos grandes diferenciais da Cristal Sete logo no início de sua operação?",
                                opcoes: [
                                    "Produção de esquadrias de alumínio",
                                    "Atendimento ao consumidor final",
                                    "Primeiro forno vertical com tecnologia 100% nacional",
                                    "Importação de vidros europeus"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "O que aconteceu em 2009 na história da Cristal Sete?",
                                opcoes: [
                                    "Conquista do selo Inmetro",
                                    "Construção da nova sede",
                                    "Criação da Visatta",
                                    "Aquisição das franquias Blindex® do Paraná e interior de São Paulo"
                                ],
                                correta: 3
                            },
                            {
                                pergunta: "Qual é o foco principal de atendimento da Cristal Sete desde o início?",
                                opcoes: [
                                    "Consumidor final",
                                    "Grandes construtoras",
                                    "Vidraçarias e esquadrias",
                                    "Arquitetos e engenheiros"
                                ],
                                correta: 2
                            }
                        ]
                    }
                ]
            }
        ]
    },
    
    // ============================================
    // CURSO 2: FRANQUIAS BLINDEX
    // ============================================
    {
        id: 2,
        titulo: "Franquias Blindex",
        descricao: "Conheça o Sistema Blindex de Franquias, o maior e mais forte grupo temperador do Brasil. Entenda como funciona a rede, os padrões de qualidade e o sistema de rastreabilidade dos produtos.",
        categoria: "Institucional",
        nivel: "Iniciante",
        duracao: "30min",
        instrutor: "Equipe Cristal Sete",
        thumbnail: "assets/cursos/curso-blindex.jpg",
        obrigatorio: false,
        objetivos: [
            "Compreender o funcionamento do Sistema Blindex de Franquias",
            "Conhecer o padrão de qualidade e rastreabilidade dos produtos",
            "Entender a identificação e marcação dos vidros",
            "Reconhecer a posição da Cristal Sete dentro da rede Blindex"
        ],
        prerequisitos: [
            "Nenhum pré-requisito necessário"
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Sistema Blindex de Franquias",
                aulas: [
                    {
                        tipo: "slide",
                        titulo: "O maior e mais forte grupo temperador do Brasil",
                        url: "https://docs.google.com/presentation/d/1hZ2FhZyNCZUkC92uP4r2g0HxwSnR42he/edit?slide=id.p1#slide=id.p1",
                        slides: 8,
                        descricao: "Apresentação institucional do Sistema Blindex de Franquias e sua importância no mercado."
                    },
                    {
                        tipo: "video",
                        titulo: "Sistemas de Franquia Blindex",
                        url: "https://www.youtube.com/watch?v=arlXtLTFdbU",
                        duracao: "15min",
                        descricao: "Entenda como funciona o sistema de franquias e a padronização de qualidade."
                    },
                    {
                        tipo: "quiz",
                        titulo: "Quiz - Sistema Blindex",
                        perguntas: [
                            {
                                pergunta: "O principal objetivo da criação do Sistema de Franquias Blindex® foi:",
                                opcoes: [
                                    "Reduzir custos de produção",
                                    "Expandir a cobertura geográfica da marca",
                                    "Substituir distribuidores regionais",
                                    "Padronizar apenas o marketing"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Para fazer parte da rede Blindex®, as empresas precisam:",
                                opcoes: [
                                    "Ter o menor preço do mercado",
                                    "Trabalhar apenas com vidro comum",
                                    "Ter histórico comprovado e reputação sólida",
                                    "Estar localizadas apenas em capitais"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "A rastreabilidade dos vidros Blindex® é garantida por:",
                                opcoes: [
                                    "Nota fiscal do produto",
                                    "Código de barras na embalagem",
                                    "Marcação no vidro",
                                    "Certificado digital enviado ao cliente"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Um vidro com dois traços na borda indica:",
                                opcoes: [
                                    "Produto com defeito",
                                    "Vidro de segunda linha",
                                    "Unidade adicional do mesmo grupo franqueado",
                                    "Vidro importado"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "A marcação nos vidros Blindex® é considerada:",
                                opcoes: [
                                    "Removível em manutenção",
                                    "Temporária",
                                    "Decorativa",
                                    "Permanente e não falsificável"
                                ],
                                correta: 3
                            },
                            {
                                pergunta: "A Cristal Sete, dentro do sistema Blindex®, é identificada por:",
                                opcoes: [
                                    "Dois traços",
                                    "Um traço",
                                    "Sem identificação",
                                    "Código numérico"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "O sistema Blindex® se diferencia no mercado principalmente por:",
                                opcoes: [
                                    "Trabalhar com menor custo",
                                    "Ter poucas unidades",
                                    "Garantir padrão de qualidade uniforme entre franqueados",
                                    "Produzir apenas vidro comum"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "O conjunto de empresas da rede Blindex® é caracterizado como:",
                                opcoes: [
                                    "Pequenas operações independentes",
                                    "Negócios improvisados",
                                    "Empresas estruturadas com gestão profissional",
                                    "Revendedores informais"
                                ],
                                correta: 2
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

// FUNÇÕES AUXILIARES
function getCursoById(id) {
    return cursos.find(curso => curso.id === id);
}

function getCursosByCategoria(categoria) {
    return cursos.filter(curso => curso.categoria === categoria);
}

function getCursosByNivel(nivel) {
    return cursos.filter(curso => curso.nivel === nivel);
}

function searchCursos(query) {
    const lowerQuery = query.toLowerCase();
    return cursos.filter(curso => 
        curso.titulo.toLowerCase().includes(lowerQuery) ||
        curso.descricao.toLowerCase().includes(lowerQuery) ||
        curso.categoria.toLowerCase().includes(lowerQuery) ||
        curso.instrutor.toLowerCase().includes(lowerQuery)
    );
}

function getEstatisticas() {
    const totalCursos = cursos.length;
    const totalHoras = cursos.reduce((acc, curso) => {
        const horas = parseInt(curso.duracao.match(/\d+/)[0]);
        return acc + horas;
    }, 0);
    
    const categorias = [...new Set(cursos.map(c => c.categoria))];
    const instrutores = [...new Set(cursos.map(c => c.instrutor))];
    
    return {
        totalCursos,
        totalHoras,
        totalCategorias: categorias.length,
        totalInstrutores: instrutores.length,
        categorias,
        instrutores
    };
}

console.log('📚 Base de dados de cursos carregada:', cursos.length, 'cursos disponíveis');
console.log('📊 Estatísticas:', getEstatisticas());