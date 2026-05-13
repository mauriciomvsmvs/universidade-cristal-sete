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
