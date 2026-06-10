/* ============================================
   UNIVERSIDADE CRISTAL SETE - DADOS DOS CURSOS
   ✅ ATUALIZADO - 4 CURSOS
   ============================================ */

const cursos = [
    // ============================================
    // CURSO 1: BEM-VINDO À CRISTAL SETE (INTEGRAÇÃO)
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
                        url: "https://docs.google.com/presentation/d/1ZK1OAnADEVn78QyunxfoQ2fxBkVpgSTg/edit?slide=id.p1#slide=id.p1",
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
                                    "Sandro Eduardo Henriques",
                                    "Marcus Aurelius de Andrade Pezotti",
                                    "Milton Bastos Henriques",
                                    "Rosângela A. Henriques Pezotti"
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
    // CURSO 2: FRANQUIAS BLINDEX (INTEGRAÇÃO)
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
                        url: "https://docs.google.com/presentation/d/1ntqT94rHvTjJDNcc3qt59z7RL9JeuG3B/edit?slide=id.p1#slide=id.p1",
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
    },
    
    // ============================================
    // CURSO 3: PRODUÇÃO DO VIDRO FLOAT (TÉCNICO)
    // ============================================
    {
        id: 3,
        titulo: "Produção do Vidro Float",
        descricao: "Conheça todo o processo de fabricação do vidro float, desde a matéria-prima até o produto final.",
        categoria: "Técnico",
        nivel: "Iniciante",
        duracao: "1h",
        instrutor: "Equipe Cristal Sete",
        thumbnail: "assets/cursos/curso-vidro-float.jpg",
        obrigatorio: false,
        objetivos: [
            "Compreender o processo completo de fabricação do vidro float",
            "Identificar as principais etapas da produção: fusão, flutuação, recozimento e corte",
            "Reconhecer a composição e matérias-primas utilizadas",
            "Entender as características e propriedades do vidro float",
            "Conhecer os equipamentos e tecnologias utilizados na fabricação"
        ],
        prerequisitos: [
            "Nenhum pré-requisito necessário"
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Fabricação do Vidro Float",
                aulas: [
                    {
                        tipo: "slide",
                        titulo: "Produção do Vidro Float",
                        url: "https://docs.google.com/presentation/d/1PHwyyOl5m6r2NpThg3GokSmPVpvsyyaw/edit?slide=id.p1#slide=id.p1",
                        slides: 20,
                        descricao: "Apresentação completa sobre o processo de fabricação do vidro float."
                    },
                    {
                        tipo: "video",
                        titulo: "Processo de Produção do Vidro Float",
                        url: "https://www.youtube.com/watch?v=FBGDuYQccRY",
                        duracao: "15min",
                        descricao: "Vídeo demonstrando todas as etapas da fabricação industrial do vidro float."
                    },
                    {
                        tipo: "quiz",
                        titulo: "Quiz - Produção do Vidro Float",
                        perguntas: [
                            {
                                pergunta: "Qual é a principal matéria-prima utilizada na fabricação do vidro?",
                                opcoes: [
                                    "Calcário",
                                    "Areia (sílica)",
                                    "Barrilha (carbonato de sódio)",
                                    "Feldspato"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Em qual temperatura aproximada ocorre a fusão das matérias-primas para formar o vidro?",
                                opcoes: [
                                    "500°C",
                                    "1000°C",
                                    "1550°C",
                                    "2000°C"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "No processo float, sobre qual material o vidro fundido flutua para obter a planicidade?",
                                opcoes: [
                                    "Água",
                                    "Estanho fundido",
                                    "Areia",
                                    "Óleo industrial"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Qual é a função do processo de recozimento (annealing) na produção do vidro?",
                                opcoes: [
                                    "Aumentar a temperatura do vidro",
                                    "Colorir o vidro",
                                    "Aliviar tensões internas e evitar quebras",
                                    "Cortar o vidro"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Qual é a principal característica do vidro float em relação à sua superfície?",
                                opcoes: [
                                    "Superfície ondulada",
                                    "Superfície perfeitamente plana e paralela",
                                    "Superfície rugosa",
                                    "Superfície com textura"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "O que significa o termo 'float' no processo de fabricação do vidro?",
                                opcoes: [
                                    "Flutuação do vidro sobre estanho líquido",
                                    "Resfriamento rápido",
                                    "Polimento do vidro",
                                    "Corte automático"
                                ],
                                correta: 0
                            },
                            {
                                pergunta: "Qual componente é adicionado à mistura para facilitar a fusão e reduzir a temperatura necessária?",
                                opcoes: [
                                    "Areia",
                                    "Barrilha (carbonato de sódio)",
                                    "Alumina",
                                    "Calcário"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Após o recozimento, qual é a próxima etapa do processo de produção do vidro float?",
                                opcoes: [
                                    "Fusão",
                                    "Têmpera",
                                    "Inspeção e corte",
                                    "Embalagem"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Por que o vidro float é considerado superior ao vidro comum antigo?",
                                opcoes: [
                                    "É mais barato",
                                    "Tem maior planicidade e qualidade óptica",
                                    "É mais colorido",
                                    "É mais fácil de quebrar"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "O vidro float pode ser transformado em outros tipos de vidro, como:",
                                opcoes: [
                                    "Apenas vidro colorido",
                                    "Vidro temperado, laminado, insulado, entre outros",
                                    "Apenas vidro espelhado",
                                    "Nenhuma das anteriores"
                                ],
                                correta: 1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    
    // ============================================
    // CURSO 4: COMO É FEITO O VIDRO TEMPERADO (TÉCNICO)
    // ============================================
    {
        id: 4,
        titulo: "Como é feito o Vidro Temperado?",
        descricao: "Aprenda o processo completo de têmpera do vidro, desde o corte até o resfriamento. Entenda as etapas de aquecimento, têmpera e controle de qualidade que garantem a resistência e segurança do produto final.",
        categoria: "Técnico",
        nivel: "Iniciante",
        duracao: "45min",
        instrutor: "Equipe Cristal Sete",
        thumbnail: "assets/cursos/curso-vidro-temperado.jpeg",
        obrigatorio: false,
        objetivos: [
            "Compreender o que é vidro temperado e suas aplicações",
            "Identificar as etapas do processo de têmpera: corte, lapidação, furação, lavagem, aquecimento e resfriamento",
            "Reconhecer os padrões de qualidade e normas técnicas",
            "Entender as características de resistência e segurança",
            "Conhecer os equipamentos utilizados na têmpera"
        ],
        prerequisitos: [
            "Nenhum pré-requisito necessário"
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Processo de Têmpera",
                aulas: [
                    {
                        tipo: "video",
                        titulo: "Introdução ao Vidro Temperado",
                        url: "https://www.youtube.com/watch?v=PLACEHOLDER",
                        duracao: "10min",
                        descricao: "O que é vidro temperado, suas características e principais aplicações."
                    },
                    {
                        tipo: "slide",
                        titulo: "Etapas do Processo de Têmpera",
                        url: "https://docs.google.com/presentation/d/PLACEHOLDER/edit",
                        slides: 15,
                        descricao: "Passo a passo completo do processo de têmpera do vidro."
                    },
                    {
                        tipo: "video",
                        titulo: "Processo de Fabricação na Prática",
                        url: "https://www.youtube.com/watch?v=PLACEHOLDER",
                        duracao: "20min",
                        descricao: "Acompanhe o processo de têmpera acontecendo na linha de produção."
                    },
                    {
                        tipo: "quiz",
                        titulo: "Quiz - Vidro Temperado",
                        perguntas: [
                            {
                                pergunta: "O que é o processo de têmpera do vidro?",
                                opcoes: [
                                    "Aquecimento e resfriamento rápido controlado",
                                    "Aplicação de película protetora",
                                    "Colagem de camadas de vidro",
                                    "Polimento da superfície"
                                ],
                                correta: 0
                            },
                            {
                                pergunta: "Qual é a principal característica do vidro temperado?",
                                opcoes: [
                                    "É mais barato que o vidro comum",
                                    "É até 5 vezes mais resistente que o vidro comum",
                                    "Pode ser cortado após a têmpera",
                                    "É mais pesado que o vidro comum"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Em qual temperatura aproximada o vidro é aquecido durante a têmpera?",
                                opcoes: [
                                    "200°C",
                                    "400°C",
                                    "650°C",
                                    "1000°C"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Por que o vidro não pode ser cortado, furado ou lapidado APÓS a têmpera?",
                                opcoes: [
                                    "Porque fica muito duro",
                                    "Porque quebraria completamente devido às tensões internas",
                                    "Porque perde a transparência",
                                    "Porque fica muito macio"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Como o vidro temperado se quebra?",
                                opcoes: [
                                    "Em lascas grandes e pontiagudas",
                                    "Não quebra nunca",
                                    "Em pequenos fragmentos sem pontas cortantes",
                                    "Apenas racha mas não quebra"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Qual etapa vem ANTES do aquecimento no forno?",
                                opcoes: [
                                    "Resfriamento",
                                    "Lavagem",
                                    "Embalagem",
                                    "Instalação"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Qual é o objetivo do resfriamento rápido (choque térmico) na têmpera?",
                                opcoes: [
                                    "Deixar o vidro frio para embalar",
                                    "Criar tensões que aumentam a resistência",
                                    "Limpar o vidro",
                                    "Reduzir o peso do vidro"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Onde o vidro temperado é mais utilizado?",
                                opcoes: [
                                    "Apenas em janelas residenciais",
                                    "Box de banheiro, portas, fachadas e aplicações de segurança",
                                    "Somente em carros",
                                    "Apenas em espelhos"
                                ],
                                correta: 1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    
    // ============================================
    // CURSO 5: CARACTERÍSTICAS DO PROCESSO DE TÊMPERA (TÉCNICO)
    // ============================================
    {
        id: 5,
        titulo: "Características do Processo de Têmpera",
        descricao: "Conheça as características inerentes ao processo de têmpera do vidro. Aprenda sobre anisotropia, empenamento, defeitos tolerados pela norma NBR 14698 e os limites aceitáveis de qualidade.",
        categoria: "Técnico",
        nivel: "Intermediário",
        duracao: "30min",
        instrutor: "Equipe Cristal Sete",
        thumbnail: "assets/cursos/curso-caracteristicas-tempera.jpg",
        obrigatorio: false,
        objetivos: [
            "Compreender os defeitos inerentes ao processo de têmpera",
            "Identificar anisotropia e empenamento no vidro temperado",
            "Conhecer os limites da norma NBR 14698",
            "Diferenciar defeitos aceitáveis de defeitos críticos",
            "Entender as limitações após o processo de têmpera"
        ],
        prerequisitos: [
            "Recomendado: Curso 'Como é feito o Vidro Temperado?'"
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Características Inerentes",
                aulas: [
                    {
                        tipo: "slide",
                        titulo: "Características do Vidro Temperado",
                        url: "https://docs.google.com/presentation/d/1fZ9L7uQqJwJECqhtP7cgaIXLXU0lSQkX/edit?slide=id.p1#slide=id.p1",
                        slides: 13,
                        descricao: "Defeitos inerentes, anisotropia, empenamento e normas técnicas."
                    },
                    {
                        tipo: "quiz",
                        titulo: "Quiz - Características do Processo de Têmpera",
                        perguntas: [
                            {
                                pergunta: "Os chamados 'defeitos inerentes' do vidro temperado são:",
                                opcoes: [
                                    "Falhas de fabricação que exigem substituição imediata",
                                    "Problemas causados exclusivamente pela instalação",
                                    "Características naturais do processo de têmpera",
                                    "Indícios de baixa qualidade do material"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "A anisotropia no vidro temperado ocorre devido a:",
                                opcoes: [
                                    "Variações de temperatura ambiente",
                                    "Tensões internas geradas no processo de têmpera",
                                    "Defeitos na matéria-prima",
                                    "Falta de controle no resfriamento"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Em relação ao empenamento do vidro temperado, é correto afirmar que:",
                                opcoes: [
                                    "O vidro temperado permanece perfeitamente plano após o processo",
                                    "Qualquer deformação é considerada defeito",
                                    "Ondulações podem ocorrer, mas são aceitas dentro da norma",
                                    "O empenamento ocorre apenas em vidros laminados"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Segundo a NBR 14698, defeitos pontuais com tamanho inferior a 0,2 mm:",
                                opcoes: [
                                    "Devem ser considerados defeitos graves",
                                    "São tolerados apenas na borda",
                                    "Não são considerados defeitos",
                                    "Devem ser analisados apenas na área central"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Sobre defeitos lineares (riscos e arranhões), é correto afirmar que:",
                                opcoes: [
                                    "Qualquer risco é considerado defeito",
                                    "Riscos menores que 30 mm não são considerados",
                                    "São proibidos apenas na borda",
                                    "Não possuem limite definido"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Em relação aos defeitos de borda, é correto afirmar que:",
                                opcoes: [
                                    "São irrelevantes para a segurança do vidro",
                                    "Podem causar quebra espontânea do vidro",
                                    "São aceitos em qualquer condição",
                                    "Não precisam de tratamento antes da têmpera"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "As marcas de pinça no vidro temperado:",
                                opcoes: [
                                    "Indicam erro de fabricação",
                                    "São causadas por impacto externo",
                                    "São características do processo de têmpera vertical",
                                    "Devem ser eliminadas após instalação"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Após o processo de têmpera, o vidro:",
                                opcoes: [
                                    "Pode ser ajustado com ferramentas específicas",
                                    "Pode sofrer pequenas alterações dimensionais",
                                    "Pode ser retrabalhado nas bordas",
                                    "Não pode ser cortado ou furado"
                                ],
                                correta: 3
                            }
                        ]
                    }
                ]
            }
        ]
    },
    
    // ============================================
    // CURSO 6: O QUE É VIDRO LAMINADO (TÉCNICO)
    // ============================================
    {
        id: 6,
        titulo: "O que é Vidro Laminado?",
        descricao: "Conheça o vidro laminado, sua composição com películas PVB e EVA, o processo de fabricação e as principais aplicações em segurança. Entenda como funciona a proteção após a quebra e os benefícios deste tipo de vidro.",
        categoria: "Técnico",
        nivel: "Iniciante",
        duracao: "40min",
        instrutor: "Equipe Cristal Sete",
        thumbnail: "assets/cursos/curso-vidro-laminado.jpg",
        obrigatorio: false,
        objetivos: [
            "Compreender o que é vidro laminado e sua estrutura",
            "Conhecer as películas PVB e EVA e suas diferenças",
            "Entender o processo de laminação e uso da autoclave",
            "Reconhecer as aplicações e benefícios do vidro laminado",
            "Identificar quando usar vidro laminado em projetos"
        ],
        prerequisitos: [
            "Nenhum pré-requisito necessário"
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Conceitos e Aplicações",
                aulas: [
                    {
                        tipo: "slide",
                        titulo: "O que é Vidro Laminado?",
                        url: "https://docs.google.com/presentation/d/1BeDC2sVzALv-G3CxEhzuHSM0eZk7gPKy/edit?slide=id.p1#slide=id.p1",
                        slides: 15,
                        descricao: "Composição, películas PVB e EVA, processo de fabricação e aplicações."
                    },
                    {
                        tipo: "video",
                        titulo: "Vidro Laminado na Prática",
                        url: "https://www.youtube.com/watch?v=KIMw7X3ekYY",
                        duracao: "15min",
                        descricao: "Veja como funciona o vidro laminado e seus benefícios em aplicações reais."
                    },
                    {
                        tipo: "quiz",
                        titulo: "Quiz - Vidro Laminado",
                        perguntas: [
                            {
                                pergunta: "O que caracteriza o vidro laminado?",
                                opcoes: [
                                    "Uma única chapa de vidro temperado",
                                    "Duas ou mais chapas unidas por uma película resistente",
                                    "Um vidro com pintura especial",
                                    "Um vidro produzido apenas com resina"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Qual é a principal função da película no vidro laminado?",
                                opcoes: [
                                    "Aumentar o brilho do vidro",
                                    "Impedir totalmente a quebra",
                                    "Manter os fragmentos unidos após a quebra",
                                    "Reduzir o peso da estrutura"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Qual material é utilizado nas chapas que a Cristal Sete adquire já laminadas da Cebrace?",
                                opcoes: [
                                    "EVA",
                                    "PVC",
                                    "Acrílico",
                                    "PVB"
                                ],
                                correta: 3
                            },
                            {
                                pergunta: "No processo de laminação com PVB, qual equipamento é utilizado para fusão total da película?",
                                opcoes: [
                                    "Forno comum",
                                    "Estufa elétrica",
                                    "Autoclave",
                                    "Câmara fria"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Qual benefício é citado tanto no PVB quanto no EVA?",
                                opcoes: [
                                    "Proteção UV de até 99%",
                                    "Eliminação da quebra do vidro",
                                    "Dispensa inspeção de qualidade",
                                    "Redução total do peso do vidro"
                                ],
                                correta: 0
                            },
                            {
                                pergunta: "Qual é uma característica do EVA utilizado pela Cristal Sete?",
                                opcoes: [
                                    "Necessita obrigatoriamente de autoclave",
                                    "Permite laminação local sem autoclave",
                                    "Não pode ser utilizado em vidros de segurança",
                                    "Só pode ser aplicado em vidros finos"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Segundo o treinamento, o vidro laminado:",
                                opcoes: [
                                    "Nunca quebra",
                                    "É mais frágil que o vidro comum",
                                    "Controla o comportamento do vidro após a quebra",
                                    "Não pode ser utilizado em guarda-corpos"
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
    // CURSO 7: O QUE É VIDRO INSULADO (TÉCNICO)
    // ============================================
    {
        id: 7,
        titulo: "O que é Vidro Insulado?",
        descricao: "Descubra o vidro insulado, sistema com duas ou mais lâminas separadas por câmara de gás. Aprenda sobre isolamento térmico e acústico, espaçadores warm edge, selantes e suas aplicações em projetos que exigem conforto.",
        categoria: "Técnico",
        nivel: "Intermediário",
        duracao: "45min",
        instrutor: "Equipe Cristal Sete",
        thumbnail: "assets/cursos/curso-vidro-insulado.jpg",
        obrigatorio: false,
        objetivos: [
            "Compreender o conceito e estrutura do vidro insulado",
            "Conhecer o sistema de espaçadores Quanex warm edge",
            "Entender os selantes butyl e polissulfeto",
            "Reconhecer os benefícios térmicos e acústicos",
            "Identificar aplicações ideais para vidro insulado"
        ],
        prerequisitos: [
            "Recomendado: Curso 'Produção do Vidro Float'"
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Sistema Insulado",
                aulas: [
                    {
                        tipo: "slide",
                        titulo: "O que é Vidro Insulado?",
                        url: "https://docs.google.com/presentation/d/1s-xOeV7WRbJba2msUZoVXBb5n8AVzCgj/edit?slide=id.p1#slide=id.p1",
                        slides: 18,
                        descricao: "Estrutura, espaçadores, selantes, isolamento térmico e acústico."
                    },
                    {
                        tipo: "video",
                        titulo: "Vidro Insulado na Prática",
                        url: "https://www.youtube.com/watch?v=A8V1ZZHdnWE",
                        duracao: "12min",
                        descricao: "Veja o processo de fabricação e os benefícios do vidro insulado."
                    },
                    {
                        tipo: "quiz",
                        titulo: "Quiz - Vidro Insulado",
                        perguntas: [
                            {
                                pergunta: "O que é o vidro insulado?",
                                opcoes: [
                                    "Um vidro laminado com película colorida",
                                    "Um sistema com duas ou mais lâminas separadas e seladas hermeticamente",
                                    "Um vidro simples tratado termicamente",
                                    "Um vidro comum com proteção UV"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Qual é a principal função da câmara de gás no vidro insulado?",
                                opcoes: [
                                    "Decorar o vidro",
                                    "Aumentar o peso do conjunto",
                                    "Melhorar o isolamento térmico e acústico",
                                    "Facilitar a quebra do vidro"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Qual espaçador é utilizado pela Cristal Sete nos vidros insulados?",
                                opcoes: [
                                    "Alumex",
                                    "SuperGlass",
                                    "Quanex",
                                    "Thermobox"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Qual é um dos diferenciais do sistema Quanex?",
                                opcoes: [
                                    "Conduz mais calor para o ambiente",
                                    "Reduz ponte térmica em até 80%",
                                    "Elimina a necessidade de selagem",
                                    "Dispensa dessecante integrado"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Qual selante é utilizado como barreira primária contra umidade?",
                                opcoes: [
                                    "Silicone",
                                    "EVA",
                                    "Polissulfeto",
                                    "Butyl"
                                ],
                                correta: 3
                            },
                            {
                                pergunta: "Segundo o treinamento, a Cristal Sete realiza injeção de gás argônio nos vidros insulados?",
                                opcoes: [
                                    "Sim, em todos os modelos",
                                    "Apenas em fachadas",
                                    "Não realiza atualmente",
                                    "Apenas em hospitais"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Qual benefício térmico o vidro insulado pode proporcionar?",
                                opcoes: [
                                    "Aumento do consumo de energia",
                                    "Redução de até 70% na transmissão de calor",
                                    "Eliminação total da temperatura externa",
                                    "Aquecimento automático do ambiente"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Em relação ao isolamento acústico, o vidro insulado pode reduzir ruídos em média de:",
                                opcoes: [
                                    "5 a 10 dB",
                                    "10 a 20 dB",
                                    "30 a 40 dB",
                                    "50 a 60 dB"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Qual é uma das vantagens do espaçador warm edge?",
                                opcoes: [
                                    "Aumentar a condensação",
                                    "Reduzir embaçamento interno",
                                    "Diminuir a durabilidade do vidro",
                                    "Facilitar infiltrações"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Qual dessas aplicações é ideal para vidro insulado?",
                                opcoes: [
                                    "Apenas móveis decorativos",
                                    "Ambientes que exigem conforto térmico e acústico",
                                    "Somente pequenas vitrines",
                                    "Apenas coberturas industriais simples"
                                ],
                                correta: 1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    
    // ============================================
    // CURSO 8: VIDROS ESPECIAIS (TÉCNICO)
    // ============================================
    {
        id: 8,
        titulo: "Vidros Especiais",
        descricao: "Explore vidros com propriedades técnicas diferenciadas: vidro polarizado (SPD), plumbífero para proteção radiológica, borossilicato resistente a choque térmico e vidro blindado. Conheça aplicações e normas técnicas.",
        categoria: "Técnico",
        nivel: "Avançado",
        duracao: "1h",
        instrutor: "Equipe Cristal Sete",
        thumbnail: "assets/cursos/curso-vidros-especiais.jpg",
        obrigatorio: false,
        objetivos: [
            "Conhecer os principais tipos de vidros especiais",
            "Compreender o funcionamento do vidro polarizado (SPD)",
            "Identificar aplicações de vidro plumbífero e borossilicato",
            "Entender os níveis de blindagem e norma NBR 15000",
            "Reconhecer quando especificar cada tipo de vidro especial"
        ],
        prerequisitos: [
            "Recomendado: Cursos 'Vidro Temperado' e 'Vidro Laminado'"
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Tipos e Aplicações",
                aulas: [
                    {
                        tipo: "slide",
                        titulo: "Vidros Especiais",
                        url: "https://docs.google.com/presentation/d/1006wfLfm7twz5bv63xiGWeQmWee4AEoz/edit?slide=id.p1#slide=id.p1",
                        slides: 20,
                        descricao: "Vidro polarizado, plumbífero, borossilicato, blindado e suas aplicações."
                    },
                    {
                        tipo: "video",
                        titulo: "Vidro Polarizado em Ação",
                        url: "https://www.youtube.com/watch?v=Xy-PUtETExo",
                        duracao: "8min",
                        descricao: "Veja como funciona o vidro polarizado (SPD) alternando entre transparente e opaco."
                    },
                    {
                        tipo: "video",
                        titulo: "Vidro Blindado e Proteção Balística",
                        url: "https://www.youtube.com/watch?v=qVzVH68knuQ",
                        duracao: "12min",
                        descricao: "Entenda os níveis de blindagem e testes de resistência balística."
                    },
                    {
                        tipo: "quiz",
                        titulo: "Quiz - Vidros Especiais",
                        perguntas: [
                            {
                                pergunta: "Qual é a principal característica dos vidros especiais?",
                                opcoes: [
                                    "São utilizados apenas em decoração",
                                    "Possuem propriedades técnicas diferenciadas para aplicações específicas",
                                    "São mais baratos que vidros comuns",
                                    "Não possuem tecnologia diferenciada"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Como funciona o vidro polarizado (SPD)?",
                                opcoes: [
                                    "Fica sempre transparente",
                                    "Utiliza gás argônio para escurecimento",
                                    "Altera a transparência através de corrente elétrica",
                                    "Usa película adesiva removível"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Quando o vidro polarizado está sem energia elétrica, ele fica:",
                                opcoes: [
                                    "Totalmente transparente",
                                    "Azul refletivo",
                                    "Opaco/translúcido",
                                    "Espelhado"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Qual é a principal função do vidro plumbífero?",
                                opcoes: [
                                    "Reduzir temperatura interna",
                                    "Bloquear ruídos externos",
                                    "Proteger contra radiação ionizante",
                                    "Aumentar a luminosidade"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Em quais ambientes o vidro plumbífero é obrigatório?",
                                opcoes: [
                                    "Escritórios comuns",
                                    "Salas de raio-X e radioterapia",
                                    "Residências térreas",
                                    "Fachadas comerciais simples"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "O que diferencia o vidro borossilicato do vidro comum?",
                                opcoes: [
                                    "Sua capacidade de mudar de cor",
                                    "Sua alta resistência térmica e química",
                                    "Seu peso extremamente leve",
                                    "Sua composição com chumbo"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Qual é uma das grandes vantagens do vidro borossilicato?",
                                opcoes: [
                                    "Não quebra em nenhuma situação",
                                    "Suporta mudanças bruscas de temperatura",
                                    "Não necessita limpeza",
                                    "Dispensa tratamento industrial"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "O vidro blindado segue qual norma brasileira?",
                                opcoes: [
                                    "NBR 7199",
                                    "NBR 14698",
                                    "NBR 15000",
                                    "NBR 10821"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Qual é o nível de vidro blindado mais comum no Brasil?",
                                opcoes: [
                                    "Nível I",
                                    "Nível II",
                                    "Nível III-A",
                                    "Nível IV"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Qual órgão exige certificação obrigatória para comercialização de vidro blindado?",
                                opcoes: [
                                    "CREA",
                                    "Corpo de Bombeiros",
                                    "Exército Brasileiro",
                                    "Prefeitura Municipal"
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
    // CURSO 9: VIDROS RESISTENTES AO FOGO (TÉCNICO)
    // ============================================
    {
        id: 9,
        titulo: "Vidros Resistentes ao Fogo",
        descricao: "Conheça os vidros corta-fogo e suas classificações E, EI e EW. Aprenda sobre compartimentação, norma NBR 14925, gel intumescente e o sistema completo de proteção passiva contra incêndio.",
        categoria: "Técnico",
        nivel: "Avançado",
        duracao: "50min",
        instrutor: "Equipe Cristal Sete",
        thumbnail: "assets/cursos/curso-vidros-fogo.jpg",
        obrigatorio: false,
        objetivos: [
            "Compreender a função dos vidros resistentes ao fogo",
            "Conhecer as classificações E, EI e EW",
            "Entender o sistema completo: vidro, esquadria, vedações e fixações",
            "Identificar a norma NBR 14925 e tempos de resistência",
            "Reconhecer aplicações de vidros corta-fogo"
        ],
        prerequisitos: [
            "Recomendado: Curso 'Vidro Laminado'"
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Proteção Passiva Contra Incêndio",
                aulas: [
                    {
                        tipo: "slide",
                        titulo: "Vidros Resistentes ao Fogo",
                        url: "https://docs.google.com/presentation/d/12pLnis8-FIoL2OHgxJO55G-2PZYHeo4r/edit?slide=id.p1#slide=id.p1",
                        slides: 16,
                        descricao: "Classificações, normas, gel intumescente e sistemas completos."
                    },
                    {
                        tipo: "video",
                        titulo: "Teste de Resistência ao Fogo",
                        url: "https://www.youtube.com/watch?v=YV-VU_FV6qM",
                        duracao: "10min",
                        descricao: "Veja testes reais de vidros corta-fogo em ação."
                    },
                    {
                        tipo: "quiz",
                        titulo: "Quiz - Vidros Resistentes ao Fogo",
                        perguntas: [
                            {
                                pergunta: "A principal função dos vidros resistentes ao fogo é:",
                                opcoes: [
                                    "Reduzir custos de construção",
                                    "Aumentar a transparência dos ambientes",
                                    "Compartimentar o fogo e permitir evacuação segura",
                                    "Melhorar o isolamento acústico"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "A norma principal que regula vidros corta-fogo no Brasil é:",
                                opcoes: [
                                    "NBR 7199",
                                    "NBR 10821",
                                    "NBR 14925",
                                    "NBR 14698"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "O sistema completo de um elemento resistente ao fogo é composto por:",
                                opcoes: [
                                    "Apenas o vidro",
                                    "Vidro e esquadria",
                                    "Vidro, esquadria e fixações",
                                    "Vidro, esquadria, vedações e fixações"
                                ],
                                correta: 3
                            },
                            {
                                pergunta: "A classificação E (para-chamas) garante:",
                                opcoes: [
                                    "Bloqueio total de calor",
                                    "Apenas isolamento térmico",
                                    "Bloqueio de chamas e fumaça, mas permite passagem de calor",
                                    "Redução parcial de radiação"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "A classificação EI se diferencia da classificação E porque:",
                                opcoes: [
                                    "Permite passagem de calor",
                                    "Não bloqueia fumaça",
                                    "Também isola a passagem de calor",
                                    "É usada apenas em fachadas"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "A classificação EW tem como principal característica:",
                                opcoes: [
                                    "Bloquear totalmente o calor",
                                    "Reduzir a radiação térmica",
                                    "Permitir passagem de fumaça",
                                    "Ser aplicada apenas em portas"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "O tempo de resistência ao fogo é medido em:",
                                opcoes: [
                                    "Graus Celsius",
                                    "Milímetros",
                                    "Minutos",
                                    "Quilowatts"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "O gel intumescente, quando exposto ao calor, tem como função:",
                                opcoes: [
                                    "Resfriar o vidro",
                                    "Tornar o vidro mais transparente",
                                    "Expandir e formar uma barreira isolante",
                                    "Reduzir o peso do vidro"
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
    // CURSO 10: BOX BLINDEX (PRODUTOS)
    // ============================================
    {
        id: 10,
        titulo: "Box Blindex",
        descricao: "Conheça a linha completa de boxes Blindex: vidros de segurança temperados, película exclusiva, kits Chromus, Flex e Dual Door. Aprenda sobre norma NBR 14207, instalação e diferenciais técnicos.",
        categoria: "Produtos",
        nivel: "Intermediário",
        duracao: "1h 10min",
        instrutor: "Equipe Cristal Sete",
        thumbnail: "assets/cursos/curso-box-blindex.jpg",
        obrigatorio: false,
        objetivos: [
            "Conhecer a linha completa de boxes Blindex",
            "Compreender os diferenciais da película de segurança",
            "Identificar os kits Chromus, Flex e Dual Door",
            "Entender a norma NBR 14207 para boxes de banheiro",
            "Reconhecer os componentes técnicos e instalação"
        ],
        prerequisitos: [
            "Recomendado: Curso 'Como é feito o Vidro Temperado?'"
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Linha Box Blindex",
                aulas: [
                    {
                        tipo: "slide",
                        titulo: "Box Blindex - Linha Completa",
                        url: "https://docs.google.com/presentation/d/1B4tygy9qxpxm_vhSnN4Zx__FNdq4Vkbx/edit?slide=id.p1#slide=id.p1",
                        slides: 25,
                        descricao: "Vidros, película de segurança, kits e normas técnicas."
                    },
                    {
                        tipo: "video",
                        titulo: "Kit Chromus Blindex",
                        url: "https://www.youtube.com/watch?v=FAf2T3CkhMk",
                        duracao: "5min",
                        descricao: "Conheça o kit premium com roldanas aparentes e design sofisticado."
                    },
                    {
                        tipo: "video",
                        titulo: "Kit Flex Blindex",
                        url: "https://www.youtube.com/watch?v=bmYalUICYvg",
                        duracao: "4min",
                        descricao: "Sistema versátil e funcional para diversos projetos."
                    },
                    {
                        tipo: "video",
                        titulo: "Kit Dual Door Blindex",
                        url: "https://www.youtube.com/watch?v=hB6hkNAj8JI",
                        duracao: "6min",
                        descricao: "Solução com porta dupla para maior amplitude de abertura."
                    },
                    {
                        tipo: "quiz",
                        titulo: "Quiz - Box Blindex",
                        perguntas: [
                            {
                                pergunta: "Por que o vidro temperado é considerado um vidro de segurança?",
                                opcoes: [
                                    "Porque nunca quebra",
                                    "Porque possui película de fábrica",
                                    "Porque é mais resistente e fragmenta em pedaços menos cortantes",
                                    "Porque é mais leve que o vidro comum"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Segundo o treinamento, o vidro temperado pode ser até:",
                                opcoes: [
                                    "2x mais resistente que o vidro comum",
                                    "3x mais resistente que o vidro comum",
                                    "5x mais resistente que o vidro comum",
                                    "10x mais resistente que o vidro comum"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Qual norma brasileira regulamenta boxes de banheiro com vidro de segurança?",
                                opcoes: [
                                    "ABNT NBR 7199",
                                    "ABNT NBR 10821",
                                    "ABNT NBR 14698",
                                    "ABNT NBR 14207"
                                ],
                                correta: 3
                            },
                            {
                                pergunta: "Onde a película de segurança Blindex® deve ser instalada?",
                                opcoes: [
                                    "No lado interno do box",
                                    "Entre os vidros",
                                    "No lado externo do box",
                                    "Em qualquer lado do vidro"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "A película de segurança Blindex® pode ser aplicada em:",
                                opcoes: [
                                    "Qualquer tipo de vidro texturizado",
                                    "Apenas vidros float lisos",
                                    "Apenas espelhos",
                                    "Somente vidros laminados"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Qual vidro da linha Blindex® possui baixíssimo teor de ferro e máxima transparência?",
                                opcoes: [
                                    "Bronze",
                                    "Verde",
                                    "Extra Clear",
                                    "Cinza"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Qual é um dos diferenciais do Kit Chromus Blindex®?",
                                opcoes: [
                                    "Ausência de travas de segurança",
                                    "Roldanas aparentes com design premium",
                                    "Utilização exclusiva em janelas",
                                    "Não possui regulagem de altura"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Qual é a vantagem do trilho em 'V invertido' do Kit Blindex®?",
                                opcoes: [
                                    "Acumular mais sujeira",
                                    "Reduzir a estabilidade da porta",
                                    "Aumentar segurança e evitar acúmulo de sujeira",
                                    "Diminuir a vida útil das roldanas"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "As roldanas blindadas do Kit Blindex® possuem:",
                                opcoes: [
                                    "Apenas um componente",
                                    "Dois componentes simples",
                                    "Três componentes para maior segurança e resistência",
                                    "Sistema sem rolamento"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Quem deve realizar a instalação do Box Original Blindex®?",
                                opcoes: [
                                    "Qualquer consumidor final",
                                    "Apenas eletricistas",
                                    "Profissional autorizado Blindex®",
                                    "Apenas arquitetos"
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
    // CURSO 11: SDR - CONCEITO E O PAPEL NA CRISTAL SETE (VENDAS)
    // ============================================
    {
        id: 11,
        titulo: "SDR: Conceito e o Papel na Cristal Sete",
        descricao: "Aprenda o papel do Sales Development Representative: prospecção, qualificação de leads, uso de CRM, estratégias outbound e inbound, ICP (Ideal Customer Profile) e técnicas de comunicação profissional.",
        categoria: "Vendas",
        nivel: "Iniciante",
        duracao: "45min",
        instrutor: "Equipe Cristal Sete",
        thumbnail: "assets/cursos/curso-sdr.jpg",
        obrigatorio: false,
        objetivos: [
            "Compreender o papel do SDR no processo comercial",
            "Conhecer técnicas de prospecção e qualificação de leads",
            "Dominar o uso do CRM para gestão de leads",
            "Identificar o perfil de cliente ideal (ICP)",
            "Aplicar boas práticas de comunicação profissional"
        ],
        prerequisitos: [
            "Nenhum pré-requisito necessário"
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Do Lead à Parceria de Sucesso",
                aulas: [
                    {
                        tipo: "slide",
                        titulo: "SDR: Conceito e o Papel na Cristal Sete",
                        url: "https://docs.google.com/presentation/d/1yuDtyhxdJkdUVgpM8hMYL9VUo4DeFBRr/edit?slide=id.p1#slide=id.p1",
                        slides: 30,
                        descricao: "Prospecção, qualificação, CRM, ICP e técnicas de comunicação."
                    },
                    {
                        tipo: "video",
                        titulo: "O que faz um SDR?",
                        url: "https://www.youtube.com/watch?v=35gAlZ8Ed8E",
                        duracao: "10min",
                        descricao: "Entenda na prática o papel do Sales Development Representative."
                    },
                    {
                        tipo: "quiz",
                        titulo: "Quiz - SDR",
                        perguntas: [
                            {
                                pergunta: "O principal papel do SDR dentro do processo comercial é:",
                                opcoes: [
                                    "Fechar vendas diretamente",
                                    "Fazer pós-venda com clientes ativos",
                                    "Prospectar e qualificar leads para o time de vendas",
                                    "Definir estratégias de marketing"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "O conceito de ICP (Ideal Customer Profile) serve para:",
                                opcoes: [
                                    "Aumentar o número de leads",
                                    "Definir o cliente ideal com maior potencial de parceria",
                                    "Reduzir o tempo de atendimento",
                                    "Criar campanhas publicitárias"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Um lead deve ser desqualificado quando:",
                                opcoes: [
                                    "Não responde rapidamente",
                                    "Está fora do perfil ideal ou apresenta risco financeiro",
                                    "Solicita orçamento",
                                    "Tem dúvidas técnicas"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Na classificação de pontos comerciais, um lead 'Latão' deve:",
                                opcoes: [
                                    "Ser priorizado",
                                    "Ser acompanhado com frequência",
                                    "Ser ativado no funil",
                                    "Ser desqualificado e não atendido"
                                ],
                                correta: 3
                            },
                            {
                                pergunta: "O uso do CRM tem como principal objetivo:",
                                opcoes: [
                                    "Substituir o contato com o cliente",
                                    "Centralizar e organizar todas as interações com leads",
                                    "Reduzir o número de vendas",
                                    "Controlar apenas o financeiro"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Uma boa prática no uso do CRM é:",
                                opcoes: [
                                    "Registrar apenas vendas fechadas",
                                    "Atualizar apenas quando solicitado",
                                    "Registrar todas as interações com o lead",
                                    "Evitar comentários detalhados"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "No modelo outbound, a empresa:",
                                opcoes: [
                                    "Aguarda o cliente entrar em contato",
                                    "Trabalha apenas com leads quentes",
                                    "Vai ativamente atrás de novos clientes",
                                    "Depende exclusivamente de marketing"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Em uma ligação profissional, o atendente deve:",
                                opcoes: [
                                    "Ser informal para criar proximidade",
                                    "Falar rapidamente para otimizar tempo",
                                    "Ter tom confiante, ouvir e conduzir a conversa",
                                    "Focar apenas em vender"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Uma comunicação adequada no WhatsApp deve:",
                                opcoes: [
                                    "Usar abreviações para agilizar",
                                    "Ser informal e direta",
                                    "Ser clara, profissional e revisada antes de enviar",
                                    "Utilizar muitos emojis"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "O microcompromisso no processo de SDR tem como função:",
                                opcoes: [
                                    "Encerrar a conversa",
                                    "Pressionar o cliente",
                                    "Criar pequenos acordos que avançam a negociação",
                                    "Reduzir o tempo de prospecção"
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
    // CURSO 12: TERMOS ESSENCIAIS DO MUNDO DOS NEGÓCIOS (VENDAS)
    // ============================================
    {
        id: 12,
        titulo: "Termos Essenciais do Mundo dos Negócios",
        descricao: "Domine o vocabulário corporativo: market share, benchmark, diferencial competitivo, funil de vendas, ticket médio, ROI, upsell, cross-sell, gargalo e escalabilidade. Linguagem essencial para negócios.",
        categoria: "Vendas",
        nivel: "Iniciante",
        duracao: "30min",
        instrutor: "Equipe Cristal Sete",
        thumbnail: "assets/cursos/curso-termos-negocios.jpg",
        obrigatorio: false,
        objetivos: [
            "Compreender termos fundamentais do mundo corporativo",
            "Dominar conceitos de vendas e marketing",
            "Conhecer métricas financeiras básicas",
            "Entender processos de gestão e operação",
            "Comunicar-se com propriedade no ambiente de negócios"
        ],
        prerequisitos: [
            "Nenhum pré-requisito necessário"
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Vocabulário Corporativo",
                aulas: [
                    {
                        tipo: "slide",
                        titulo: "Termos Essenciais do Mundo dos Negócios",
                        url: "https://docs.google.com/presentation/d/1KqxmQ2dv0LRDc9dp4sS5TvJeAKiRKjU9/edit?slide=id.p1#slide=id.p1",
                        slides: 25,
                        descricao: "Glossário completo de termos corporativos, vendas e gestão."
                    },
                    {
                        tipo: "quiz",
                        titulo: "Quiz - Termos de Negócios",
                        perguntas: [
                            {
                                pergunta: "O conceito de 'Market Share' representa:",
                                opcoes: [
                                    "O faturamento total da empresa",
                                    "A margem de lucro por produto",
                                    "A fatia de mercado que a empresa ocupa",
                                    "O número de clientes ativos"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Fazer benchmark significa:",
                                opcoes: [
                                    "Reduzir custos operacionais",
                                    "Copiar diretamente concorrentes",
                                    "Usar referências do mercado para melhorar processos",
                                    "Criar um novo produto"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Diferencial competitivo é:",
                                opcoes: [
                                    "O menor preço do mercado",
                                    "O que torna a empresa única e difícil de copiar",
                                    "A quantidade de produtos vendidos",
                                    "O tempo de entrega"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Um 'lead' é definido como:",
                                opcoes: [
                                    "Cliente fidelizado",
                                    "Cliente inadimplente",
                                    "Potencial cliente com interesse",
                                    "Parceiro comercial"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "O conceito de 'funil de vendas' representa:",
                                opcoes: [
                                    "A estrutura financeira da empresa",
                                    "O caminho que o cliente percorre até a compra",
                                    "O fluxo de caixa",
                                    "A margem de lucro"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "O 'ticket médio' é:",
                                opcoes: [
                                    "O valor total de vendas",
                                    "O valor médio gasto por cliente",
                                    "O custo do produto",
                                    "O lucro líquido da empresa"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "A diferença entre upsell e cross-sell é que:",
                                opcoes: [
                                    "Upsell aumenta quantidade e cross-sell reduz preço",
                                    "Upsell é venda complementar e cross-sell é venda superior",
                                    "Upsell oferece produto melhor e cross-sell oferece produto complementar",
                                    "Não existe diferença entre eles"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "O ROI (Return on Investment) indica:",
                                opcoes: [
                                    "O valor total investido",
                                    "O retorno obtido sobre um investimento",
                                    "O custo fixo da empresa",
                                    "O fluxo de caixa mensal"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Um gargalo dentro da operação significa:",
                                opcoes: [
                                    "Aumento de vendas",
                                    "Redução de custos",
                                    "Um ponto que trava ou atrasa o processo",
                                    "Crescimento da empresa"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "O conceito de 'escalar' um negócio significa:",
                                opcoes: [
                                    "Aumentar custos para crescer",
                                    "Crescer mantendo os mesmos resultados",
                                    "Crescer sem aumentar proporcionalmente os custos",
                                    "Reduzir o tamanho da empresa"
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
    // CURSO 13: CÁLCULO DE ÁREA E COBRANÇA (TÉCNICO)
    // ============================================
    {
        id: 13,
        titulo: "Cálculo de Área e Cobrança",
        descricao: "Domine o cálculo correto de área em m², conversões, arredondamento, medida real vs cobrança, transpasse e fórmulas para diferentes formatos: retângulos, círculos, triângulos e projetos com múltiplas peças.",
        categoria: "Técnico",
        nivel: "Intermediário",
        duracao: "2h",
        instrutor: "Equipe Cristal Sete",
        thumbnail: "assets/cursos/curso-calculo-area.jpg",
        obrigatorio: true,
        objetivos: [
            "Dominar conversões de milímetros para metros",
            "Aplicar regras de arredondamento da Cristal Sete",
            "Diferenciar medida real de medida de cobrança",
            "Calcular áreas de diferentes formatos geométricos",
            "Resolver cálculos de projetos com múltiplas peças"
        ],
        prerequisitos: [
            "Matemática básica"
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Fundamentos e Cálculos Práticos",
                aulas: [
                    {
                        tipo: "slide",
                        titulo: "Cálculo de Área e Cobrança",
                        url: "https://docs.google.com/presentation/d/1BT9WGTE0c-bbz4-ipyZwCJphZie1V8Ij/edit?slide=id.p1#slide=id.p1",
                        slides: 20,
                        descricao: "Conversões, arredondamento, medidas e fórmulas completas."
                    },
                    {
                        tipo: "video",
                        titulo: "Área do quadrado",
                        url: "https://www.youtube.com/watch?v=vdQMamMsPN4",
                        duracao: "8min",
                        descricao: "Como calcular a área de figuras quadradas."
                    },
                    {
                        tipo: "video",
                        titulo: "Área de Retângulo",
                        url: "https://www.youtube.com/watch?v=aIKxhaxynJ8",
                        duracao: "6min",
                        descricao: "Fórmula e aplicação prática para retângulos."
                    },
                    {
                        tipo: "video",
                        titulo: "Área de Triângulo",
                        url: "https://www.youtube.com/watch?v=UXoBHQBT5OE",
                        duracao: "7min",
                        descricao: "Aplicação da fórmula (base × altura) ÷ 2."
                    },
                    {
                        tipo: "video",
                        titulo: "Área de Losango",
                        url: "https://www.youtube.com/watch?v=wkyLfHIYP9w",
                        duracao: "5min",
                        descricao: "Cálculo usando diagonal maior e diagonal menor."
                    },
                    {
                        tipo: "video",
                        titulo: "Área de trapézio",
                        url: "https://www.youtube.com/watch?v=8QjE6LON_Y0",
                        duracao: "6min",
                        descricao: "Fórmula com base maior, base menor e altura."
                    },
                    {
                        tipo: "video",
                        titulo: "Área de Círculo",
                        url: "https://www.youtube.com/watch?v=R-sjOtYdmHs",
                        duracao: "8min",
                        descricao: "Cálculo usando raio e fórmula π × r²."
                    },
                    {
                        tipo: "video",
                        titulo: "Como calcular perímetro",
                        url: "https://www.youtube.com/watch?v=9wJcIcqw8Q0",
                        duracao: "5min",
                        descricao: "Diferença entre perímetro e área, e como calcular corretamente."
                    },
                    {
                        tipo: "video",
                        titulo: "Qual é o tamanho de um m²",
                        url: "https://www.youtube.com/watch?v=ItA_X8fT0bY",
                        duracao: "10min",
                        descricao: "Visualização prática do metro quadrado e suas dimensões."
                    },
                    {
                        tipo: "quiz",
                        titulo: "Quiz - Cálculo de Área",
                        perguntas: [
                            {
                                pergunta: "Para calcular corretamente a área em m², as medidas devem estar em:",
                                opcoes: [
                                    "Milímetros",
                                    "Centímetros",
                                    "Metros",
                                    "Polegadas"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "A conversão correta de milímetros para metros é feita:",
                                opcoes: [
                                    "Multiplicando por 1000",
                                    "Dividindo por 100",
                                    "Dividindo por 1000",
                                    "Multiplicando por 10"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Segundo a regra da Cristal Sete, o arredondamento das medidas deve ser feito:",
                                opcoes: [
                                    "De 10 em 10 mm",
                                    "De 25 em 25 mm",
                                    "De 50 em 50 mm",
                                    "De 100 em 100 mm"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "A principal diferença entre medida real e medida de cobrança é:",
                                opcoes: [
                                    "A medida real inclui impostos",
                                    "A medida de cobrança é sempre menor",
                                    "A medida de cobrança é arredondada para cálculo do valor",
                                    "Não existe diferença entre elas"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Segundo o treinamento, a área deve ser calculada utilizando:",
                                opcoes: [
                                    "Sempre a medida real",
                                    "A média entre real e cobrança",
                                    "A medida de cobrança (arredondada)",
                                    "A menor medida possível"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "O transpasse ocorre quando:",
                                opcoes: [
                                    "O vidro é menor que o vão",
                                    "O vidro é cortado com erro",
                                    "Duas peças se sobrepõem para vedação ou funcionalidade",
                                    "O vidro não encaixa corretamente"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Em peças circulares, antes de calcular a área, deve-se:",
                                opcoes: [
                                    "Dividir o diâmetro por 2",
                                    "Multiplicar o diâmetro por 2",
                                    "Adicionar 100 mm ao diâmetro",
                                    "Subtrair 50 mm do diâmetro"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "A fórmula para cálculo da área de um triângulo é:",
                                opcoes: [
                                    "Base × altura",
                                    "(Base × altura) ÷ 2",
                                    "Base + altura ÷ 2",
                                    "Base × 2 × altura"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Em projetos com múltiplas peças de vidro, o cálculo correto é:",
                                opcoes: [
                                    "Calcular apenas a maior peça",
                                    "Fazer média das áreas",
                                    "Somar todas as áreas individuais",
                                    "Multiplicar largura total pela altura"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Um erro comum que deve ser evitado no cálculo é:",
                                opcoes: [
                                    "Converter mm para m",
                                    "Arredondar antes de calcular",
                                    "Utilizar medidas em metros",
                                    "Calcular área sem arredondar as medidas"
                                ],
                                correta: 3
                            }
                        ]
                    }
                ]
            }
        ]
    },
    
    // ============================================
    // CURSO 14: COBRANÇAS ESPECIAIS (TÉCNICO)
    // ============================================
    {
        id: 14,
        titulo: "Cobranças Especiais",
        descricao: "Aprenda as regras de cobrança para formatos diferenciados: redondo, oval, meia lua, cuba, fora de esquadro, orgânico e escadaria. Entenda acréscimos, medidas de cobrança e quando exigir molde.",
        categoria: "Técnico",
        nivel: "Intermediário",
        duracao: "40min",
        instrutor: "Equipe Cristal Sete",
        thumbnail: "assets/cursos/curso-cobrancas-especiais.jpg",
        obrigatorio: true,
        objetivos: [
            "Identificar formatos que exigem cobrança especial",
            "Aplicar corretamente os acréscimos percentuais",
            "Calcular medidas de cobrança com acréscimos de 50mm por lado",
            "Reconhecer quando solicitar molde do cliente",
            "Compreender a justificativa técnica das cobranças especiais"
        ],
        prerequisitos: [
            "Curso 'Cálculo de Área e Cobrança'"
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Formatos Diferenciados e Acréscimos",
                aulas: [
                    {
                        tipo: "slide",
                        titulo: "Cobranças Especiais",
                        url: "https://docs.google.com/presentation/d/1eeJnxAIW37FDNamnmP8_whslNt-XACBm/edit?slide=id.p1#slide=id.p1",
                        slides: 18,
                        descricao: "Regras de cobrança para formatos especiais e complexos."
                    },
                    {
                        tipo: "quiz",
                        titulo: "Quiz - Cobranças Especiais",
                        perguntas: [
                            {
                                pergunta: "Para peças no formato redondo, a cobrança aplicada é:",
                                opcoes: [
                                    "+10% no valor",
                                    "+20% no valor",
                                    "+50% no valor",
                                    "+80% no valor"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "A área de cobrança para formatos especiais, de forma geral, considera:",
                                opcoes: [
                                    "A medida exata do cliente",
                                    "Acréscimo de 25mm por lado",
                                    "Acréscimo de 50mm por lado",
                                    "Acréscimo de 100mm total"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Uma peça oval com medida 800x1200mm será considerada para cobrança como:",
                                opcoes: [
                                    "800x1200mm",
                                    "850x1250mm",
                                    "900x1300mm",
                                    "1000x1400mm"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "O formato 'meia lua com recorte' possui qual tipo de cobrança?",
                                opcoes: [
                                    "+40%",
                                    "+50%",
                                    "+80%",
                                    "+100%"
                                ],
                                correta: 3
                            },
                            {
                                pergunta: "Em peças no formato 'cuba' (com furo), a cobrança aplicada é:",
                                opcoes: [
                                    "+20%",
                                    "+40%",
                                    "+80%",
                                    "+100%"
                                ],
                                correta: 3
                            },
                            {
                                pergunta: "Para formatos 'fora de esquadro' (formas irregulares), a cobrança padrão é:",
                                opcoes: [
                                    "+10%",
                                    "+20%",
                                    "+50%",
                                    "+100%"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "O formato orgânico possui cobrança diferenciada de:",
                                opcoes: [
                                    "+20%",
                                    "+40%",
                                    "+80%",
                                    "+100%"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Em relação ao envio de molde, é correto afirmar que:",
                                opcoes: [
                                    "Sempre é obrigatório",
                                    "Nunca deve ser enviado",
                                    "Só é necessário quando o vidro for encaixado",
                                    "É exigido apenas para peças grandes"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "O formato 'escadaria alta modelagem' possui qual característica de cobrança?",
                                opcoes: [
                                    "+50% no valor",
                                    "+80% no valor",
                                    "+100% no valor",
                                    "Sem acréscimo"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "O principal motivo para aplicar cobranças especiais em formatos diferenciados é:",
                                opcoes: [
                                    "Aumentar o valor do produto sem justificativa",
                                    "Compensar a dificuldade de corte e complexidade do formato",
                                    "Reduzir o tempo de produção",
                                    "Padronizar todos os vidros"
                                ],
                                correta: 1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    
    // ============================================
    // CURSO 15: COMO CONTORNAR OBJEÇÕES E VENDER MAIS (VENDAS)
    // ============================================
    {
        id: 15,
        titulo: "Como Contornar Objeções e Vender Mais",
        descricao: "Domine técnicas para lidar com objeções de preço, prazo, concorrência e qualidade. Aprenda a validar preocupações, reposicionar valor, mudar critérios de decisão e criar microcompromissos para fechar vendas.",
        categoria: "Vendas",
        nivel: "Intermediário",
        duracao: "50min",
        instrutor: "Equipe Cristal Sete",
        thumbnail: "assets/cursos/curso-objecoes.jpg",
        obrigatorio: false,
        objetivos: [
            "Interpretar objeções como interesse mal resolvido",
            "Aplicar a estrutura: validar → perguntar → reposicionar → propor",
            "Contornar objeções de preço demonstrando valor",
            "Lidar com comparações de concorrência",
            "Usar microcompromissos para avançar negociações"
        ],
        prerequisitos: [
            "Recomendado: Curso 'SDR: Conceito e o Papel na Cristal Sete'"
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Técnicas de Contorno de Objeções",
                aulas: [
                    {
                        tipo: "slide",
                        titulo: "Como Contornar Objeções e Vender Mais",
                        url: "https://docs.google.com/presentation/d/1S5PsqcHSzDmWJsS9qOezia570EX38cV2/edit?slide=id.p1#slide=id.p1",
                        slides: 28,
                        descricao: "Estrutura completa para lidar com objeções e fechar vendas."
                    },
                    {
                        tipo: "video",
                        titulo: "Técnicas de Contorno de Objeções",
                        url: "https://www.youtube.com/watch?v=EWvg2vnoxHQ",
                        duracao: "15min",
                        descricao: "Veja na prática como transformar objeções em oportunidades de venda."
                    },
                    {
                        tipo: "quiz",
                        titulo: "Quiz - Contorno de Objeções",
                        perguntas: [
                            {
                                pergunta: "Segundo o treinamento, uma objeção deve ser interpretada como:",
                                opcoes: [
                                    "Falta de interesse do cliente",
                                    "Resistência definitiva à compra",
                                    "Interesse mal resolvido",
                                    "Problema exclusivo de preço"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Quando o cliente diz 'está caro', o problema geralmente é:",
                                opcoes: [
                                    "O custo do produto",
                                    "A concorrência agressiva",
                                    "Falta de valor percebido",
                                    "Margem de lucro elevada"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "O primeiro passo ao responder uma objeção é:",
                                opcoes: [
                                    "Reposicionar o produto",
                                    "Validar a preocupação do cliente",
                                    "Apresentar argumentos técnicos",
                                    "Oferecer desconto"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "O objetivo de 'mudar o critério de decisão' é:",
                                opcoes: [
                                    "Reduzir o preço final",
                                    "Evitar negociação",
                                    "Tirar o foco do preço e levar para valor",
                                    "Encerrar a conversa rapidamente"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Um comprador que sempre pergunta o preço por m² é classificado como:",
                                opcoes: [
                                    "Comprador técnico",
                                    "Comprador de relacionamento",
                                    "Comprador de urgência",
                                    "Comprador de preço"
                                ],
                                correta: 3
                            },
                            {
                                pergunta: "Ao lidar com objeção de prazo, a melhor estratégia é:",
                                opcoes: [
                                    "Prometer entrega mais rápida que o concorrente",
                                    "Reduzir o prazo sem avaliar risco",
                                    "Posicionar prazo como previsibilidade e segurança",
                                    "Evitar falar sobre prazo"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Quando o cliente diz 'vidro é tudo igual', a melhor abordagem é:",
                                opcoes: [
                                    "Concordar para evitar conflito",
                                    "Oferecer desconto imediato",
                                    "Demonstrar diferenças técnicas e normativas",
                                    "Encerrar a negociação"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Ao lidar com concorrência que 'vende mais barato', o ideal é:",
                                opcoes: [
                                    "Igualar o preço imediatamente",
                                    "Criticar o concorrente",
                                    "Validar e mostrar critérios como rastreabilidade e qualidade",
                                    "Ignorar a comparação"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "A estrutura correta para responder objeções é:",
                                opcoes: [
                                    "Perguntar → responder → fechar → validar",
                                    "Validar → perguntar → reposicionar → propor",
                                    "Responder → justificar → negociar → fechar",
                                    "Perguntar → negociar → responder → fechar"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "O microcompromisso ao final da resposta serve para:",
                                opcoes: [
                                    "Encerrar a conversa",
                                    "Reduzir objeções futuras",
                                    "Definir o próximo passo e avançar a negociação",
                                    "Diminuir o tempo de atendimento"
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
    // CURSO 16: BIRÔS DE CRÉDITO E ANÁLISE DE RISCO (FINANCEIRO)
    // ============================================
    {
        id: 16,
        titulo: "Birôs de Crédito e Análise de Risco",
        descricao: "Domine a consulta e análise de crédito usando Serasa e SPC Brasil. Aprenda a interpretar score, identificar pendências bancárias, aplicar regras de aprovação e escalar decisões com segurança.",
        categoria: "Financeiro",
        nivel: "Intermediário",
        duracao: "45min",
        instrutor: "Equipe Cristal Sete",
        thumbnail: "assets/cursos/curso-biros-credito.jpg",
        obrigatorio: true,
        objetivos: [
            "Compreender a função dos birôs de crédito",
            "Interpretar corretamente o score de crédito",
            "Identificar pendências bancárias de risco",
            "Aplicar regras de aprovação e reprovação",
            "Consultar Serasa e SPC Brasil de forma eficiente"
        ],
        prerequisitos: [
            "Nenhum pré-requisito necessário"
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Análise de Crédito com Serasa e SPC",
                aulas: [
                    {
                        tipo: "slide",
                        titulo: "Birôs de Crédito e Análise de Risco",
                        url: "https://docs.google.com/presentation/d/16Or2SYsTyukfx6a8ervzZJV4fIb_2c5T/edit?slide=id.p1#slide=id.p1",
                        slides: 22,
                        descricao: "Score, pendências, regras de aprovação e boas práticas."
                    },
                    {
                        tipo: "quiz",
                        titulo: "Quiz - Birôs de Crédito",
                        perguntas: [
                            {
                                pergunta: "Os birôs de crédito têm como principal função:",
                                opcoes: [
                                    "Definir taxas de juros do mercado",
                                    "Controlar o faturamento das empresas",
                                    "Avaliar o risco de crédito de clientes",
                                    "Gerar contratos comerciais"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "O score de crédito representa:",
                                opcoes: [
                                    "O valor total de dívidas do cliente",
                                    "A probabilidade de pagamento em dia",
                                    "O faturamento mensal da empresa",
                                    "O número de consultas realizadas"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Segundo o treinamento, a análise de crédito deve considerar:",
                                opcoes: [
                                    "Apenas o score",
                                    "Apenas pendências bancárias",
                                    "O conjunto completo de informações",
                                    "Apenas histórico de consultas"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Um cliente com score abaixo de 300 em qualquer birô deve:",
                                opcoes: [
                                    "Ser aprovado com limite reduzido",
                                    "Ser analisado manualmente",
                                    "Ser aprovado apenas à vista",
                                    "Ter crédito reprovado automaticamente"
                                ],
                                correta: 3
                            },
                            {
                                pergunta: "Pendências bancárias acima de R$ 50.000 indicam:",
                                opcoes: [
                                    "Situação normal de mercado",
                                    "Risco moderado",
                                    "Impedimento para crédito",
                                    "Necessidade de desconto"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Segundo o exemplo prático do Serasa (página 6), um cliente com score 50 e alta inadimplência deve:",
                                opcoes: [
                                    "Ser aprovado com limite baixo",
                                    "Ser aprovado com garantia",
                                    "Ser analisado pelo gerente",
                                    "Ter crédito não aprovado"
                                ],
                                correta: 3
                            },
                            {
                                pergunta: "A principal diferença entre Serasa e SPC é que:",
                                opcoes: [
                                    "Apenas o SPC possui score",
                                    "O Serasa mostra mais detalhes das pendências",
                                    "O SPC não possui informações financeiras",
                                    "Ambos mostram exatamente os mesmos dados"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "O SPC Brasil se diferencia por:",
                                opcoes: [
                                    "Ter menos dados que o Serasa",
                                    "Focar apenas em bancos",
                                    "Exibir histórico de consultas e dados complementares",
                                    "Não apresentar score"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Segundo as boas práticas, o correto é:",
                                opcoes: [
                                    "Consultar apenas um birô",
                                    "Priorizar o mais rápido",
                                    "Consultar sempre ambos os birôs",
                                    "Consultar apenas em grandes vendas"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "A regra 'na dúvida, escale' significa:",
                                opcoes: [
                                    "Aprovar o crédito automaticamente",
                                    "Negar o crédito imediatamente",
                                    "Encaminhar a decisão com todas as informações coletadas",
                                    "Reduzir o limite de crédito"
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
    // CURSO 17: DADOS CADASTRAIS E DOCUMENTAÇÃO (FINANCEIRO)
    // ============================================
    {
        id: 17,
        titulo: "Dados Cadastrais e Documentação",
        descricao: "Aprenda a validar empresas através de consultas ao CNPJ, CADESP (SP), SINTEGRA (PR) e análise de contrato social. Identifique situações de risco, verifique regularidade e aplique o checklist completo de análise cadastral.",
        categoria: "Financeiro",
        nivel: "Intermediário",
        duracao: "40min",
        instrutor: "Equipe Cristal Sete",
        thumbnail: "assets/cursos/curso-dados-cadastrais.jpg",
        obrigatorio: true,
        objetivos: [
            "Realizar consultas ao CNPJ e interpretar resultados",
            "Validar inscrição estadual no CADESP e SINTEGRA",
            "Analisar contrato social e estrutura societária",
            "Identificar situações de risco: CNPJ suspenso ou baixado",
            "Aplicar checklist completo de validação cadastral"
        ],
        prerequisitos: [
            "Curso 'Birôs de Crédito e Análise de Risco'"
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Validação Cadastral Completa",
                aulas: [
                    {
                        tipo: "slide",
                        titulo: "Dados Cadastrais e Documentação",
                        url: "https://docs.google.com/presentation/d/1IbjfoZhygXJuLaN-BKVNiLOnWIk9ucMI/edit?slide=id.p1#slide=id.p1",
                        slides: 20,
                        descricao: "CNPJ, CADESP, SINTEGRA, contrato social e checklist de validação."
                    },
                    {
                        tipo: "quiz",
                        titulo: "Quiz - Dados Cadastrais",
                        perguntas: [
                            {
                                pergunta: "O principal objetivo das consultas cadastrais é:",
                                opcoes: [
                                    "Aumentar o volume de vendas",
                                    "Definir preços de negociação",
                                    "Validar a existência e regularidade da empresa",
                                    "Reduzir o tempo de atendimento"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Um CNPJ com situação 'suspensa' ou 'baixada' indica que:",
                                opcoes: [
                                    "A empresa está em crescimento",
                                    "A empresa pode operar normalmente",
                                    "A empresa apresenta alto risco e não deve ter crédito aprovado",
                                    "A empresa precisa apenas de atualização cadastral"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "O sistema CADESP é utilizado para:",
                                opcoes: [
                                    "Consulta de crédito bancário",
                                    "Validação da situação estadual em São Paulo",
                                    "Verificação de faturamento da empresa",
                                    "Consulta de score financeiro"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "O SINTEGRA tem como principal função:",
                                opcoes: [
                                    "Consultar dados federais do CNPJ",
                                    "Validar a situação da Inscrição Estadual no Paraná",
                                    "Gerar contratos sociais",
                                    "Analisar histórico de pagamento"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "O contrato social é importante porque permite:",
                                opcoes: [
                                    "Calcular o preço do produto",
                                    "Identificar sócios, capital e atividades da empresa",
                                    "Definir prazo de pagamento",
                                    "Verificar apenas o endereço"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Uma empresa com Inscrição Estadual suspensa deve ser interpretada como:",
                                opcoes: [
                                    "Empresa regular",
                                    "Situação normal para qualquer negócio",
                                    "Alerta de risco elevado",
                                    "Empresa em expansão"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Segundo o checklist, a consulta ao CNPJ deve ser feita:",
                                opcoes: [
                                    "Apenas em clientes novos",
                                    "Apenas em vendas acima de determinado valor",
                                    "Sempre, em toda análise de crédito",
                                    "Apenas quando houver dúvida"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Ao analisar o CNPJ, um ponto de atenção importante é:",
                                opcoes: [
                                    "O tamanho da empresa",
                                    "A quantidade de funcionários",
                                    "A compatibilidade da atividade econômica",
                                    "O tempo de resposta do cliente"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "O principal objetivo de consultar o contrato social em análises mais profundas é:",
                                opcoes: [
                                    "Verificar o preço praticado pela empresa",
                                    "Confirmar estrutura societária e possíveis riscos",
                                    "Avaliar concorrentes",
                                    "Definir condições comerciais"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "A 'regra de ouro' do processo de análise de crédito afirma que:",
                                opcoes: [
                                    "Toda venda deve ser aprovada",
                                    "É melhor aprovar com risco do que perder venda",
                                    "Na dúvida, deve-se escalar com todas as informações",
                                    "Apenas o score define a decisão"
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
    // CURSO 18: PROCEDIMENTOS DE ENTREGA E REPOSIÇÃO
    // ============================================
    {
        id: 18,
        titulo: "Procedimentos de Entrega e Reposição",
        descricao: "Aprenda os procedimentos corretos para entrega segura, armazenamento adequado de vidros e as regras do Programa de Reposição e Confiança da Cristal Sete. Garanta qualidade no atendimento do início ao fim.",
        categoria: "Técnico",
        nivel: "Iniciante",
        duracao: "30min",
        instrutor: "Equipe Cristal Sete",
        thumbnail: "assets/cursos/curso-procedimentos-entrega.jpg",
        obrigatorio: false,
        objetivos: [
            "Conhecer os procedimentos de segurança para entrega de vidros",
            "Entender o armazenamento correto de peças de vidro",
            "Aprender as especificações de moldes e materiais adequados",
            "Dominar as regras do Programa de Reposição e Confiança"
        ],
        prerequisitos: [
            "Nenhum pré-requisito necessário"
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Procedimentos de Entrega e Reposição",
                aulas: [
                    {
                        tipo: "slide",
                        titulo: "Procedimentos de Entrega e Reposição",
                        url: "https://docs.google.com/presentation/d/1FFiPLKvjSw5DlMm9PfDWfUwQv63prSDi/edit?slide=id.p1#slide=id.p1",
                        slides: 14,
                        descricao: "Manual completo com procedimentos de segurança, armazenamento correto, especificações de moldes e política de devoluções."
                    },
                    {
                        tipo: "quiz",
                        titulo: "Avaliação: Procedimentos de Entrega",
                        perguntas: [
                            {
                                pergunta: "Qual é o compromisso máximo da Cristal Sete em relação às entregas?",
                                opcoes: [
                                    "Velocidade de entrega",
                                    "Segurança em primeiro lugar",
                                    "Baixo custo",
                                    "Quantidade de entregas"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Qual é a quantidade MÁXIMA de peças de vidro que podem ser sobrepostas no armazenamento?",
                                opcoes: [
                                    "5 peças",
                                    "15 peças",
                                    "Menos de 10 peças",
                                    "20 peças"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Quais materiais SÃO ACEITOS para fazer moldes?",
                                opcoes: [
                                    "Papelão e compensado",
                                    "Duratex, MDF liso e compensado rígido",
                                    "Qualquer material disponível",
                                    "Apenas papelão reforçado"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Quando deve ser comunicada uma mudança de endereço de entrega?",
                                opcoes: [
                                    "Depois do faturamento",
                                    "Na hora da entrega",
                                    "No momento do pedido",
                                    "Não é necessário comunicar"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Qual é o prazo para solicitar reposição de peças com riscos, lascas e manchas?",
                                opcoes: [
                                    "7 dias úteis",
                                    "2 dias úteis",
                                    "1 semana",
                                    "30 dias"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "O que é OBRIGATÓRIO fazer para identificar defeitos em peças de vidro?",
                                opcoes: [
                                    "Tirar foto do defeito",
                                    "Marcar com caneta piloto",
                                    "Enviar e-mail descrevendo",
                                    "Ligar para o fornecedor"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Durante a descarga dos vidros, é obrigatório:",
                                opcoes: [
                                    "Ter uma equipe de 5 pessoas",
                                    "Estar presente durante toda a descarga",
                                    "Usar equipamento especial",
                                    "Filmar todo o processo"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Os cavaletes para armazenamento de vidros devem ter:",
                                opcoes: [
                                    "Superfície de madeira lisa",
                                    "Proteção emborrachada",
                                    "Base de concreto",
                                    "Altura mínima de 2 metros"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Peças com riscos e manchas serão repostas SOMENTE se:",
                                opcoes: [
                                    "Forem vidros caros",
                                    "O cliente reclamar muito",
                                    "NÃO saírem do estoque interno do cliente",
                                    "Estiverem instaladas há menos de 1 mês"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "O que NÃO pode conter nos moldes de vidro?",
                                opcoes: [
                                    "Madeira lisa",
                                    "Parafusos expostos e pregos",
                                    "MDF",
                                    "Duratex"
                                ],
                                correta: 1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    // ========================================
    // CURSO 19: COMO PROSPECTAR E VENDER MAIS COM COLD CALL
    // ========================================
    {
        id: 19,
        titulo: "Como Prospectar e Vender Mais com Cold Call",
        descricao: "Aprenda a prospectar clientes ativamente com Cold Call. Domine o método completo: preparação, gancho inicial, conexão, qualificação D.O.P. e agendamento de reuniões com scripts prontos para a realidade da Cristal Sete.",
        categoria: "Vendas",
        nivel: "Iniciante",
        duracao: "45min",
        thumbnail: "assets/cursos/curso-coldcall.jpg",
        instrutor: "Equipe Comercial Cristal Sete",
        objetivos: [
            "Entender o conceito e objetivo da Cold Call",
            "Aprender a pesquisar e preparar cada ligação",
            "Dominar o gancho inicial e criar conexão com o cliente",
            "Fazer perguntas que revelam a necessidade do cliente",
            "Qualificar oportunidades com o filtro D.O.P.",
            "Agendar reuniões usando a técnica da escassez",
            "Lidar com objeções comuns de forma profissional",
            "Executar os 5 passos da Cold Call perfeita"
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Como Prospectar e Vender Mais com Cold Call",
                aulas: [
                    {
                        tipo: "slide",
                        titulo: "Como Prospectar e Vender Mais com Cold Call",
                        url: "https://docs.google.com/presentation/d/1USTYO5Qf7b8GzcokKTmO89a6Or-EWr6i/edit?slide=id.p1#slide=id.p1",
                        slides: 20,
                        descricao: "Conteúdo completo do curso: o que é Cold Call, como preparar a ligação, gancho inicial, conexão, filtro D.O.P., agendamento e como lidar com objeções."
                    },
                    {
                        tipo: "video",
                        titulo: "Como Acertar nos 30 Primeiros Segundos de uma Chamada Fria",
                        url: "https://www.youtube.com/watch?v=ZPSv41d-bMM",
                        duracao: "15min",
                        descricao: "Aprenda na prática como dominar os primeiros 30 segundos de uma Cold Call e aumentar suas chances de agendar reuniões."
                    },
                    {
                        tipo: "quiz",
                        titulo: "Quiz - Cold Call",
                        perguntas: [
                            {
                                pergunta: "Qual é o principal objetivo de uma Cold Call?",
                                opcoes: [
                                    "Fechar a venda imediatamente durante a ligação",
                                    "Gerar consciência, identificar oportunidade e agendar uma reunião",
                                    "Enviar um catálogo de produtos por e-mail",
                                    "Descobrir o preço que o concorrente cobra"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Por que a Cold Call é considerada poderosa para crescer vendas?",
                                opcoes: [
                                    "Porque substitui completamente o marketing digital",
                                    "Porque o cliente sempre compra na hora",
                                    "Porque o total de vendas é um percentual do total de pessoas com quem você fala",
                                    "Porque é a forma mais cara de prospecção"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "O que você DEVE fazer antes de realizar uma Cold Call?",
                                opcoes: [
                                    "Ligar imediatamente sem nenhuma preparação",
                                    "Decorar um script genérico igual para todos os clientes",
                                    "Esperar o cliente ligar primeiro",
                                    "Pesquisar quem é o cliente, porte, produtos que compra e possível problema"
                                ],
                                correta: 3
                            },
                            {
                                pergunta: "Qual é a melhor estratégia ANTES de realizar a ligação de prospecção?",
                                opcoes: [
                                    "Ligar sem aviso e apresentar todos os produtos de uma vez",
                                    "Enviar um WhatsApp ou e-mail antes de ligar para criar um gancho",
                                    "Pedir indicação para outro cliente primeiro",
                                    "Aguardar o cliente entrar em contato espontaneamente"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "O que significa o filtro D.O.P. na qualificação de oportunidades?",
                                opcoes: [
                                    "Data, Objetivo e Produto",
                                    "Demanda, Oferta e Preço",
                                    "Decisor, Orçamento e Prioridade",
                                    "Diagnóstico, Operação e Proposta"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Quais são as 3 formas de criar conexão com o cliente apresentadas no curso?",
                                opcoes: [
                                    "Preço, Prazo e Produto",
                                    "Evento ou Contexto, Velocidade de fala e Experiência no nicho",
                                    "WhatsApp, E-mail e Telefone",
                                    "Desconto, Brinde e Promoção"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Qual técnica deve ser usada na hora de agendar a reunião?",
                                opcoes: [
                                    "Perguntar ao cliente quando ele tiver tempo livre",
                                    "Oferecer apenas um horário fixo sem alternativa",
                                    "Usar a técnica da escassez oferecendo duas opções específicas de horário",
                                    "Deixar o cliente decidir o formato e o horário"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Qual é a ordem correta dos 5 passos da Cold Call perfeita?",
                                opcoes: [
                                    "Gancho, Prepare-se, Conexão, Qualifique, Agende",
                                    "Conexão, Prepare-se, Gancho, Agende, Qualifique",
                                    "Agende, Prepare-se, Gancho, Conexão, Qualifique",
                                    "Prepare-se, Gancho, Conexão, Qualifique, Agende"
                                ],
                                correta: 3
                            },
                            {
                                pergunta: "Como responder à objeção: já tenho fornecedor?",
                                opcoes: [
                                    "Encerrar a ligação educadamente",
                                    "Oferecer um desconto imediato para convencer",
                                    "A maioria dos nossos clientes também tinha. Começamos como segunda opção e hoje somos a principal. Posso mostrar o motivo em 30 minutos?",
                                    "Perguntar qual é o nome do fornecedor concorrente"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "O que fazer imediatamente após o cliente confirmar o agendamento?",
                                opcoes: [
                                    "Ligar novamente para confirmar no dia seguinte",
                                    "Aguardar o cliente entrar em contato para confirmar",
                                    "Enviar apenas o catálogo de produtos por e-mail",
                                    "Enviar o convite imediatamente com data, hora e pauta da reunião"
                                ],
                                correta: 3
                            }
                        ]
                    }
                ]
            }
        ]
    },
    // ========================================
    // CURSO 20: 6 TÉCNICAS PARA VENCER O SILÊNCIO
    // ========================================
    {
        id: 20,
        titulo: "6 Técnicas para Vencer o Silêncio",
        descricao: "Aprenda a lidar com o silêncio do cliente que visualizou e não respondeu. Domine as 6 técnicas práticas para retomar contato com processo, inteligência e profissionalismo.",
        categoria: "Vendas",
        nivel: "Iniciante",
        duracao: "40min",
        thumbnail: "assets/cursos/curso-silencio-cliente.jpg",
        instrutor: "Equipe Comercial Cristal Sete",
        objetivos: [
            "Entender por que o cliente visualiza e não responde",
            "Analisar a trilha da conversa antes de agir",
            "Identificar a rotina do cliente para escolher o momento certo",
            "Criar mensagens que terminam com perguntas e estimulam resposta",
            "Usar emojis estrategicamente para se destacar",
            "Montar um fluxo de cadência com etapas definidas",
            "Encerrar o contato com elegância e profissionalismo"
        ],
        modulos: [
            {
                numero: 1,
                titulo: "6 Técnicas para Vencer o Silêncio",
                aulas: [
                    {
                        tipo: "slide",
                        titulo: "6 Técnicas para Vencer o Silêncio",
                        url: "https://docs.google.com/presentation/d/1MnzOnXOjUA5iBQiQAZ9tGI7tfNZ8aBCE/edit?slide=id.p1#slide=id.p1",
                        slides: 10,
                        descricao: "As 6 técnicas completas: análise da trilha, rotina do cliente, mensagens com perguntas, uso de emojis, fluxo de cadência e encerramento profissional."
                    },
                    {
                        tipo: "video",
                        titulo: "Cliente Visualizou e Não Respondeu? 6 Técnicas para Usar",
                        url: "https://www.youtube.com/watch?v=B337-JzY6wc",
                        duracao: "15min",
                        descricao: "Aprenda na prática como aplicar as 6 técnicas para retomar o contato com clientes que visualizaram e não responderam."
                    },
                    {
                        tipo: "quiz",
                        titulo: "Quiz - 6 Técnicas para Vencer o Silêncio",
                        perguntas: [
                            {
                                pergunta: "O que o silêncio do cliente que visualizou e não respondeu significa, segundo o treinamento?",
                                opcoes: [
                                    "Que o cliente não tem interesse e você deve desistir",
                                    "Que o preço está muito alto e deve ser reduzido",
                                    "Que silêncio não é rejeição — é falta de processo da sua parte",
                                    "Que o cliente escolheu o concorrente"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Qual é o primeiro passo recomendado pela Técnica 1 antes de agir?",
                                opcoes: [
                                    "Ligar imediatamente para o cliente",
                                    "Enviar uma proposta de desconto",
                                    "Analisar a trilha da conversa e revisar o histórico de mensagens",
                                    "Encerrar o contato e partir para outro cliente"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Segundo a Técnica 2, o que você deve fazer ANTES de enviar mensagens para evitar o silêncio?",
                                opcoes: [
                                    "Enviar o orçamento por e-mail em vez de WhatsApp",
                                    "Validar com antecedência qual é o melhor horário para conversar",
                                    "Esperar o cliente entrar em contato no horário dele",
                                    "Reduzir a frequência de mensagens enviadas"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Qual é a Regra de Ouro da Técnica 3?",
                                opcoes: [
                                    "Toda mensagem deve ter no mínimo 3 parágrafos",
                                    "Sempre envie o orçamento no início da conversa",
                                    "Toda mensagem deve terminar com uma pergunta",
                                    "Use apenas mensagens de voz para criar conexão"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Por que a mensagem SEM pergunta é considerada fraca?",
                                opcoes: [
                                    "Porque é muito longa e cansa o cliente",
                                    "Porque o cliente não sente necessidade de responder e a conversa morre",
                                    "Porque demonstra insegurança do vendedor",
                                    "Porque não menciona o preço do produto"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Como os emojis funcionam na Técnica 4?",
                                opcoes: [
                                    "Substituem as palavras e tornam a mensagem mais curta",
                                    "Demonstram informalidade e proximidade com o cliente",
                                    "Quebram o padrão visual da conversa e chamam atenção, provocando resposta quase automática",
                                    "Aumentam a credibilidade da mensagem no WhatsApp"
                                ],
                                correta: 2
                            },
                            {
                                pergunta: "Quais são os emojis mais eficazes indicados no treinamento?",
                                opcoes: [
                                    "😊 ❤️ 👏 🎉",
                                    "🙋 ⚠️ 👆 ❓",
                                    "💰 🏆 ✅ 🔥",
                                    "📱 💬 📧 📞"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "O que é o Fluxo de Cadência da Técnica 5?",
                                opcoes: [
                                    "Um roteiro de desconto progressivo para o cliente",
                                    "Uma sequência de tentativas de contato predefinidas que você segue sem improvisar",
                                    "Um modelo de proposta comercial em etapas",
                                    "Um sistema de agendamento automático de mensagens"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Qual é a ordem correta do Fluxo de Cadência apresentado no treinamento?",
                                opcoes: [
                                    "Ligação, mensagem com pergunta, reenvio com emoji, encerramento",
                                    "Mensagem com pergunta, reenvio com emoji, nova pergunta, ligação, encerramento",
                                    "Nova pergunta, emoji, ligação, mensagem com pergunta, encerramento",
                                    "Encerramento, ligação, emoji, mensagem com pergunta, nova pergunta"
                                ],
                                correta: 1
                            },
                            {
                                pergunta: "Por que a mensagem de encerramento da Técnica 6 funciona?",
                                opcoes: [
                                    "Porque oferece um desconto especial de última hora",
                                    "Porque ameaça o cliente de perder o produto",
                                    "Porque é honesta, profissional e muitos clientes respondem justamente neste momento",
                                    "Porque encerra definitivamente o relacionamento com o cliente"
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
