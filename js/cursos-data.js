/* ============================================
   UNIVERSIDADE CRISTAL SETE - DADOS DOS CURSOS
   
   📝 INSTRUÇÕES PARA ADICIONAR NOVOS CURSOS:
   
   1. Copie um curso de exemplo abaixo
   2. Altere o ID para o próximo número sequencial
   3. Preencha todas as informações do curso
   4. Adicione módulos e aulas conforme necessário
   5. Salve o arquivo
   
   ============================================ */

const cursos = [
    // ============================================
    // CURSO INSTITUCIONAL (OBRIGATÓRIO)
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
    // CURSOS TÉCNICOS
    // ============================================
    {
        id: 2,
        titulo: "Técnicas de Instalação de Box de Vidro",
        descricao: "Aprenda as melhores práticas para instalação de box de vidro temperado, desde a medição até o acabamento final.",
        categoria: "Técnico",
        nivel: "Intermediário",
        duracao: "3h 30min",
        instrutor: "João Silva",
        thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop",
        objetivos: [
            "Realizar medições precisas para instalação de box",
            "Conhecer os tipos de vidro e suas aplicações",
            "Dominar técnicas de fixação e vedação",
            "Identificar e solucionar problemas comuns",
            "Aplicar normas de segurança na instalação"
        ],
        prerequisitos: [
            "Conhecimento básico em vidros temperados",
            "Familiaridade com ferramentas manuais",
            "Noções de segurança do trabalho"
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Introdução e Planejamento",
                aulas: [
                    {
                        tipo: "video",
                        titulo: "Bem-vindo ao Curso",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        duracao: "8min"
                    },
                    {
                        tipo: "video",
                        titulo: "Tipos de Box e Aplicações",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        duracao: "15min"
                    },
                    {
                        tipo: "slide",
                        titulo: "Ferramentas Necessárias",
                        url: "https://docs.google.com/presentation/d/1234567890/edit",
                        slides: 12
                    },
                    {
                        tipo: "quiz",
                        titulo: "Quiz Módulo 1",
                        perguntas: [
                            {
                                pergunta: "Qual a espessura mínima recomendada para box de banheiro?",
                                opcoes: ["6mm", "8mm", "10mm", "12mm"],
                                correta: 1
                            },
                            {
                                pergunta: "Qual ferramenta é essencial para medição precisa?",
                                opcoes: ["Trena comum", "Trena a laser", "Régua", "Metro de madeira"],
                                correta: 1
                            }
                        ]
                    }
                ]
            },
            {
                numero: 2,
                titulo: "Medição e Preparação",
                aulas: [
                    {
                        tipo: "video",
                        titulo: "Técnicas de Medição",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        duracao: "20min"
                    },
                    {
                        tipo: "video",
                        titulo: "Preparação da Superfície",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        duracao: "12min"
                    },
                    {
                        tipo: "slide",
                        titulo: "Checklist de Verificação",
                        url: "https://docs.google.com/presentation/d/1234567890/edit",
                        slides: 8
                    }
                ]
            },
            {
                numero: 3,
                titulo: "Instalação e Acabamento",
                aulas: [
                    {
                        tipo: "video",
                        titulo: "Processo de Instalação Passo a Passo",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        duracao: "35min"
                    },
                    {
                        tipo: "video",
                        titulo: "Vedação e Acabamento",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        duracao: "18min"
                    },
                    {
                        tipo: "quiz",
                        titulo: "Avaliação Final",
                        perguntas: [
                            {
                                pergunta: "Qual o tempo de cura recomendado para o silicone?",
                                opcoes: ["12 horas", "24 horas", "48 horas", "72 horas"],
                                correta: 1
                            },
                            {
                                pergunta: "Qual a distância ideal entre fixações?",
                                opcoes: ["20cm", "30cm", "40cm", "50cm"],
                                correta: 2
                            },
                            {
                                pergunta: "Quando usar perfil U em vez de perfil L?",
                                opcoes: [
                                    "Em paredes de gesso",
                                    "Em box de canto",
                                    "Em box frontal",
                                    "Em qualquer situação"
                                ],
                                correta: 1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    
    {
        id: 3,
        titulo: "Excelência no Atendimento ao Cliente",
        descricao: "Desenvolva habilidades essenciais para proporcionar um atendimento excepcional e fidelizar clientes.",
        categoria: "Vendas",
        nivel: "Iniciante",
        duracao: "2h 15min",
        instrutor: "Maria Santos",
        thumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=500&fit=crop",
        objetivos: [
            "Compreender as necessidades do cliente",
            "Comunicar-se de forma clara e empática",
            "Resolver conflitos e objeções",
            "Criar experiências memoráveis",
            "Aplicar técnicas de follow-up"
        ],
        prerequisitos: [
            "Nenhum pré-requisito necessário"
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Fundamentos do Atendimento",
                aulas: [
                    {
                        tipo: "video",
                        titulo: "A Importância do Atendimento",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        duracao: "10min"
                    },
                    {
                        tipo: "video",
                        titulo: "Perfil do Atendente de Sucesso",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        duracao: "12min"
                    },
                    {
                        tipo: "slide",
                        titulo: "Os 7 Pilares do Atendimento",
                        url: "https://docs.google.com/presentation/d/1234567890/edit",
                        slides: 15
                    }
                ]
            },
            {
                numero: 2,
                titulo: "Comunicação Eficaz",
                aulas: [
                    {
                        tipo: "video",
                        titulo: "Técnicas de Escuta Ativa",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        duracao: "15min"
                    },
                    {
                        tipo: "video",
                        titulo: "Linguagem Corporal e Tom de Voz",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        duracao: "18min"
                    },
                    {
                        tipo: "quiz",
                        titulo: "Quiz - Comunicação",
                        perguntas: [
                            {
                                pergunta: "Qual percentual da comunicação é não-verbal?",
                                opcoes: ["30%", "50%", "70%", "90%"],
                                correta: 2
                            }
                        ]
                    }
                ]
            },
            {
                numero: 3,
                titulo: "Gestão de Conflitos",
                aulas: [
                    {
                        tipo: "video",
                        titulo: "Identificando Clientes Insatisfeitos",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        duracao: "14min"
                    },
                    {
                        tipo: "video",
                        titulo: "Técnicas de Resolução de Problemas",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        duracao: "20min"
                    },
                    {
                        tipo: "quiz",
                        titulo: "Avaliação Final",
                        perguntas: [
                            {
                                pergunta: "Qual a primeira ação ao lidar com um cliente irritado?",
                                opcoes: [
                                    "Defender a empresa",
                                    "Ouvir atentamente",
                                    "Oferecer desconto",
                                    "Transferir para gerência"
                                ],
                                correta: 1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    
    {
        id: 3,
        titulo: "Segurança no Trabalho com Vidros",
        descricao: "Conheça as normas de segurança e boas práticas para trabalhar com vidros temperados e laminados.",
        categoria: "Segurança",
        nivel: "Iniciante",
        duracao: "1h 45min",
        instrutor: "Carlos Mendes",
        thumbnail: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=500&fit=crop",
        objetivos: [
            "Identificar riscos na manipulação de vidros",
            "Utilizar EPIs corretamente",
            "Aplicar procedimentos de segurança",
            "Prevenir acidentes no ambiente de trabalho",
            "Conhecer primeiros socorros básicos"
        ],
        prerequisitos: [
            "Nenhum pré-requisito necessário"
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Introdução à Segurança",
                aulas: [
                    {
                        tipo: "video",
                        titulo: "Importância da Segurança",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        duracao: "8min"
                    },
                    {
                        tipo: "video",
                        titulo: "Principais Riscos",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        duracao: "12min"
                    },
                    {
                        tipo: "slide",
                        titulo: "Normas Regulamentadoras",
                        url: "https://docs.google.com/presentation/d/1234567890/edit",
                        slides: 10
                    }
                ]
            },
            {
                numero: 2,
                titulo: "EPIs e Equipamentos",
                aulas: [
                    {
                        tipo: "video",
                        titulo: "Equipamentos de Proteção Individual",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        duracao: "15min"
                    },
                    {
                        tipo: "video",
                        titulo: "Manuseio Seguro de Vidros",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        duracao: "18min"
                    },
                    {
                        tipo: "quiz",
                        titulo: "Teste de Conhecimento",
                        perguntas: [
                            {
                                pergunta: "Qual EPI é obrigatório ao manusear vidros?",
                                opcoes: [
                                    "Apenas luvas",
                                    "Apenas óculos",
                                    "Luvas e óculos de proteção",
                                    "Nenhum é obrigatório"
                                ],
                                correta: 2
                            }
                        ]
                    }
                ]
            },
            {
                numero: 3,
                titulo: "Prevenção de Acidentes",
                aulas: [
                    {
                        tipo: "video",
                        titulo: "Procedimentos de Segurança",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        duracao: "16min"
                    },
                    {
                        tipo: "video",
                        titulo: "Primeiros Socorros",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        duracao: "14min"
                    },
                    {
                        tipo: "quiz",
                        titulo: "Avaliação Final",
                        perguntas: [
                            {
                                pergunta: "Em caso de corte, qual a primeira ação?",
                                opcoes: [
                                    "Aplicar torniquete",
                                    "Lavar com água corrente",
                                    "Pressionar o ferimento",
                                    "Aplicar álcool"
                                ],
                                correta: 2
                            }
                        ]
                    }
                ]
            }
        ]
    },
    
    {
        id: 4,
        titulo: "Liderança e Gestão de Equipes",
        descricao: "Desenvolva habilidades de liderança para inspirar, motivar e conduzir equipes ao sucesso.",
        categoria: "Liderança",
        nivel: "Avançado",
        duracao: "4h",
        instrutor: "Ana Paula Costa",
        thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
        objetivos: [
            "Compreender diferentes estilos de liderança",
            "Desenvolver inteligência emocional",
            "Gerenciar conflitos e feedbacks",
            "Motivar e engajar equipes",
            "Tomar decisões estratégicas"
        ],
        prerequisitos: [
            "Experiência prévia em coordenação de equipes",
            "Conhecimento básico de gestão"
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Fundamentos da Liderança",
                aulas: [
                    {
                        tipo: "video",
                        titulo: "O que é Liderança",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        duracao: "15min"
                    },
                    {
                        tipo: "video",
                        titulo: "Estilos de Liderança",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        duracao: "22min"
                    },
                    {
                        tipo: "slide",
                        titulo: "Líder vs Chefe",
                        url: "https://docs.google.com/presentation/d/1234567890/edit",
                        slides: 18
                    }
                ]
            },
            {
                numero: 2,
                titulo: "Inteligência Emocional",
                aulas: [
                    {
                        tipo: "video",
                        titulo: "Autoconhecimento e Autocontrole",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        duracao: "25min"
                    },
                    {
                        tipo: "video",
                        titulo: "Empatia e Relacionamentos",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        duracao: "20min"
                    },
                    {
                        tipo: "quiz",
                        titulo: "Quiz - IE",
                        perguntas: [
                            {
                                pergunta: "Qual o primeiro pilar da inteligência emocional?",
                                opcoes: ["Empatia", "Autoconhecimento", "Motivação", "Habilidades sociais"],
                                correta: 1
                            }
                        ]
                    }
                ]
            },
            {
                numero: 3,
                titulo: "Gestão de Pessoas",
                aulas: [
                    {
                        tipo: "video",
                        titulo: "Feedback Construtivo",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        duracao: "18min"
                    },
                    {
                        tipo: "video",
                        titulo: "Delegação Eficaz",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        duracao: "16min"
                    },
                    {
                        tipo: "video",
                        titulo: "Motivação de Equipes",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        duracao: "22min"
                    },
                    {
                        tipo: "quiz",
                        titulo: "Avaliação Final",
                        perguntas: [
                            {
                                pergunta: "Qual a técnica de feedback mais eficaz?",
                                opcoes: [
                                    "Sanduíche (positivo-negativo-positivo)",
                                    "Apenas críticas",
                                    "Apenas elogios",
                                    "Feedback público"
                                ],
                                correta: 0
                            }
                        ]
                    }
                ]
            }
        ]
    },
    
    {
        id: 4,
        titulo: "Controle de Qualidade em Vidros",
        descricao: "Aprenda a garantir a qualidade dos produtos de vidro desde o recebimento até a entrega final.",
        categoria: "Qualidade",
        nivel: "Intermediário",
        duracao: "2h 45min",
        instrutor: "Roberto Alves",
        thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
        objetivos: [
            "Identificar defeitos em vidros temperados",
            "Aplicar normas técnicas de qualidade",
            "Realizar inspeções visuais e dimensionais",
            "Documentar não conformidades",
            "Implementar ações corretivas"
        ],
        prerequisitos: [
            "Conhecimento básico sobre vidros",
            "Noções de metrologia"
        ],
        modulos: [
            {
                numero: 1,
                titulo: "Normas e Padrões",
                aulas: [
                    {
                        tipo: "video",
                        titulo: "Introdução ao Controle de Qualidade",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        duracao: "10min"
                    },
                    {
                        tipo: "video",
                        titulo: "Normas ABNT para Vidros",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        duracao: "18min"
                    },
                    {
                        tipo: "slide",
                        titulo: "Critérios de Aceitação",
                        url: "https://docs.google.com/presentation/d/1234567890/edit",
                        slides: 14
                    }
                ]
            },
            {
                numero: 2,
                titulo: "Inspeção e Testes",
                aulas: [
                    {
                        tipo: "video",
                        titulo: "Inspeção Visual",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        duracao: "16min"
                    },
                    {
                        tipo: "video",
                        titulo: "Verificação Dimensional",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        duracao: "14min"
                    },
                    {
                        tipo: "video",
                        titulo: "Testes de Qualidade",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        duracao: "20min"
                    },
                    {
                        tipo: "quiz",
                        titulo: "Quiz Módulo 2",
                        perguntas: [
                            {
                                pergunta: "Qual a tolerância dimensional para vidros temperados?",
                                opcoes: ["±1mm", "±2mm", "±3mm", "±5mm"],
                                correta: 1
                            }
                        ]
                    }
                ]
            },
            {
                numero: 3,
                titulo: "Gestão da Qualidade",
                aulas: [
                    {
                        tipo: "video",
                        titulo: "Registro de Não Conformidades",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        duracao: "12min"
                    },
                    {
                        tipo: "video",
                        titulo: "Plano de Ação Corretiva",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        duracao: "15min"
                    },
                    {
                        tipo: "slide",
                        titulo: "Melhoria Contínua",
                        url: "https://docs.google.com/presentation/d/1234567890/edit",
                        slides: 10
                    },
                    {
                        tipo: "quiz",
                        titulo: "Avaliação Final",
                        perguntas: [
                            {
                                pergunta: "O que é 5W2H?",
                                opcoes: [
                                    "Ferramenta de planejamento",
                                    "Tipo de vidro",
                                    "Norma técnica",
                                    "Equipamento de medição"
                                ],
                                correta: 0
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

// FUNÇÃO AUXILIAR: Obter curso por ID
function getCursoById(id) {
    return cursos.find(curso => curso.id === id);
}

// FUNÇÃO AUXILIAR: Filtrar cursos por categoria
function getCursosByCategoria(categoria) {
    return cursos.filter(curso => curso.categoria === categoria);
}

// FUNÇÃO AUXILIAR: Filtrar cursos por nível
function getCursosByNivel(nivel) {
    return cursos.filter(curso => curso.nivel === nivel);
}

// FUNÇÃO AUXILIAR: Buscar cursos
function searchCursos(query) {
    const lowerQuery = query.toLowerCase();
    return cursos.filter(curso => 
        curso.titulo.toLowerCase().includes(lowerQuery) ||
        curso.descricao.toLowerCase().includes(lowerQuery) ||
        curso.categoria.toLowerCase().includes(lowerQuery) ||
        curso.instrutor.toLowerCase().includes(lowerQuery)
    );
}

// FUNÇÃO AUXILIAR: Obter estatísticas
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
