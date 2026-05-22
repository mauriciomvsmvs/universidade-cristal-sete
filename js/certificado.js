/**
 * CERTIFICADO.JS - MODELO PREMIUM CRISTAL SETE
 * Baseado no template oficial da Universidade
 */

class GeradorCertificado {
    constructor() {
        this.usuario = verificarLogin();
        
        // Carregar logos como Base64
        this.logoUniversidade = null;
        this.logoCristalSete = null;
        this.carregarLogos();
    }

    async carregarLogos() {
        try {
            // Converter logos para Base64
            this.logoUniversidade = await this.imagemParaBase64('assets/logo-universidade.png');
            this.logoCristalSete = await this.imagemParaBase64('assets/logo-cristal-sete.png');
        } catch (error) {
            console.log('Logos não carregadas, usando placeholders');
        }
    }

    imagemParaBase64(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = 'Anonymous';
            img.onload = function() {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                resolve(canvas.toDataURL('image/png'));
            };
            img.onerror = reject;
            img.src = url;
        });
    }

    gerarCertificado(cursoId) {
        const curso = cursos.find(c => c.id === cursoId);
        if (!curso) {
            alert('Curso não encontrado!');
            return;
        }

        // Verificar progresso (se existir)
        if (typeof obterProgressoCurso === 'function') {
            const progresso = obterProgressoCurso(this.usuario.id, cursoId);
            if (progresso < 100) {
                alert('Você precisa completar 100% do curso para gerar o certificado!');
                return;
            }
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: 'a4'
        });

        const width = 297;
        const height = 210;

        // ============================================
        // FUNDO BRANCO
        // ============================================
        doc.setFillColor(255, 255, 255);
        doc.rect(0, 0, width, height, 'F');

        // ============================================
        // MARCA D'ÁGUA - Logo Universidade (QUASE INVISÍVEL)
        // ============================================
        if (this.logoUniversidade) {
            // Marca d'água bem sutil (2% de opacidade)
            doc.addImage(this.logoUniversidade, 'PNG', width/2 - 60, height/2 - 60, 120, 120, '', 'NONE', 0.02);
        }

        // ============================================
        // BORDA AZUL ELEGANTE
        // ============================================
        doc.setDrawColor(43, 95, 166); // Azul corporativo
        doc.setLineWidth(2);
        doc.rect(10, 10, width - 20, height - 20);

        // ============================================
        // LOGOS NO TOPO
        // ============================================
        
        // Logo Universidade (esquerda) - Tamanho médio
        if (this.logoUniversidade) {
            doc.addImage(this.logoUniversidade, 'PNG', 25, 22, 30, 30);
        }

        // Logo Cristal Sete (direita) - MENOR e melhor qualidade
        if (this.logoCristalSete) {
            doc.addImage(this.logoCristalSete, 'PNG', width - 75, 28, 50, 18);
        }

        // ============================================
        // TÍTULO "CERTIFICADO"
        // ============================================
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(50);
        doc.setTextColor(43, 95, 166);
        doc.text('CERTIFICADO', width / 2, 55, { align: 'center' });

        // ============================================
        // SUBTÍTULO
        // ============================================
        doc.setFontSize(14);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(43, 95, 166);
        
        // Linhas decorativas
        doc.setDrawColor(43, 95, 166);
        doc.setLineWidth(0.5);
        doc.line(width/2 - 70, 63, width/2 - 10, 63);
        doc.line(width/2 + 10, 63, width/2 + 70, 63);
        
        doc.text('DE CONCLUSÃO DE CURSO', width / 2, 66, { align: 'center' });

        // ============================================
        // "Certificamos que"
        // ============================================
        doc.setFontSize(13);
        doc.setTextColor(80, 80, 80);
        doc.setFont('helvetica', 'normal');
        doc.text('Certificamos que', width / 2, 80, { align: 'center' });

        // ============================================
        // NOME DO ALUNO (Estilo Cursivo/Script)
        // ============================================
        doc.setFont('times', 'italic');
        doc.setFontSize(32);
        doc.setTextColor(43, 95, 166);
        doc.text(this.usuario.nome, width / 2, 95, { align: 'center' });

        // ============================================
        // TEXTO: "concluiu com êxito o curso"
        // ============================================
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(13);
        doc.setTextColor(80, 80, 80);
        doc.text('concluiu com êxito o curso', width / 2, 107, { align: 'center' });

        // ============================================
        // NOME DO CURSO
        // ============================================
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(20);
        doc.setTextColor(43, 95, 166);
        doc.text(curso.titulo, width / 2, 118, { align: 'center' });

        // Categoria e carga horária
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(11);
        doc.setTextColor(100, 100, 100);
        doc.text(`${curso.categoria} | Carga horária: ${curso.duracao}`, width / 2, 126, { align: 'center' });

        // ============================================
        // TEXTO MOTIVACIONAL
        // ============================================
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.setTextColor(70, 70, 70);
        
        const textoMotivacional = [
            'Sua participação reforça o compromisso com o desenvolvimento, a inovação',
            'e a construção de um ambiente cada vez mais preparado e eficiente.'
        ];
        
        let yMotivacional = 138;
        textoMotivacional.forEach(linha => {
            doc.text(linha, width / 2, yMotivacional, { align: 'center' });
            yMotivacional += 6;
        });

        // ============================================
        // SLOGAN
        // ============================================
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.setTextColor(43, 95, 166);
        doc.text('Conhecimento que fortalece pessoas, processos e resultados.', width / 2, 155, { align: 'center' });

        // ============================================
        // DATA
        // ============================================
        const dataEmissao = new Date().toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });

        doc.setFont('helvetica', 'italic');
        doc.setFontSize(11);
        doc.setTextColor(100, 100, 100);
        doc.text(`Apucarana, ${dataEmissao}`, width / 2, 168, { align: 'center' });

        // ============================================
        // ASSINATURA ÚNICA
        // ============================================
        const assinaturaY = height - 25;
        
        // Linha de assinatura
        doc.setDrawColor(43, 95, 166);
        doc.setLineWidth(0.5);
        doc.line(width/2 - 45, assinaturaY, width/2 + 45, assinaturaY);
        
        // Nome
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.setTextColor(43, 95, 166);
        doc.text('Universidade Cristal Sete', width / 2, assinaturaY + 6, { align: 'center' });
        
        // Cargo
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text('Departamento de RH', width / 2, assinaturaY + 11, { align: 'center' });

        // ============================================
        // CÓDIGO DE VERIFICAÇÃO
        // ============================================
        const codigoVerificacao = this.gerarCodigoVerificacao(this.usuario.id, cursoId);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7);
        doc.setTextColor(150, 150, 150);
        doc.text(`Código de verificação: ${codigoVerificacao}`, width / 2, height - 7, { align: 'center' });

        // ============================================
        // SALVAR PDF
        // ============================================
        const nomeArquivo = `Certificado_${curso.titulo.replace(/\s+/g, '_')}_${this.usuario.nome.replace(/\s+/g, '_')}.pdf`;
        doc.save(nomeArquivo);

        // Registrar e mostrar sucesso
        this.registrarCertificado(cursoId, codigoVerificacao);
        this.mostrarMensagemSucesso(curso.titulo);
    }

    gerarCodigoVerificacao(usuarioId, cursoId) {
        const timestamp = Date.now();
        const hash = `UC${usuarioId}${cursoId}${timestamp}`;
        return btoa(hash).substring(0, 16).toUpperCase();
    }

    registrarCertificado(cursoId, codigo) {
        const certificados = JSON.parse(localStorage.getItem('certificados')) || [];
        certificados.push({
            usuarioId: this.usuario.id,
            cursoId: cursoId,
            dataEmissao: new Date().toISOString(),
            codigo: codigo
        });
        localStorage.setItem('certificados', JSON.stringify(certificados));
    }

    obterCertificadosUsuario() {
        const certificados = JSON.parse(localStorage.getItem('certificados')) || [];
        return certificados.filter(cert => cert.usuarioId === this.usuario.id);
    }

    temCertificado(cursoId) {
        const certificados = this.obterCertificadosUsuario();
        return certificados.some(cert => cert.cursoId === cursoId);
    }

    mostrarMensagemSucesso(nomeCurso) {
        const mensagem = document.createElement('div');
        mensagem.style.cssText = `
            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            background: white; padding: 2.5rem; border-radius: 1.5rem;
            box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3); z-index: 10000;
            text-align: center; max-width: 420px;
        `;
        
        mensagem.innerHTML = `
            <div style="width: 70px; height: 70px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); border-radius: 50%; margin: 0 auto 1.5rem; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3);">
                <svg style="width: 40px; height: 40px; color: white;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                </svg>
            </div>
            
            <h3 style="font-family: 'Montserrat', sans-serif; font-size: 1.75rem; font-weight: 700; color: #1f2937; margin-bottom: 0.5rem;">
                Certificado Gerado!
            </h3>
            
            <p style="color: #6b7280; font-size: 1rem; margin-bottom: 0.5rem;">
                Curso <strong style="color: #2B5FA6;">${nomeCurso}</strong>
            </p>
            
            <p style="color: #9ca3af; font-size: 0.875rem; margin-bottom: 1.5rem;">
                O download começará automaticamente
            </p>
            
            <button onclick="this.parentElement.remove()" style="background: #2B5FA6; color: white; padding: 0.75rem 2.5rem; border-radius: 0.75rem; border: none; font-weight: 600; cursor: pointer; font-size: 1rem; transition: all 0.3s;">
                Fechar
            </button>
        `;
        
        document.body.appendChild(mensagem);
        setTimeout(() => mensagem.remove(), 5000);
    }
}

let geradorCertificado;

document.addEventListener('DOMContentLoaded', function() {
    const usuario = verificarLogin();
    if (usuario) {
        geradorCertificado = new GeradorCertificado();
    }
});

function baixarCertificado(cursoId) {
    if (!geradorCertificado) {
        alert('Você precisa estar logado para gerar certificados!');
        return;
    }
    geradorCertificado.gerarCertificado(cursoId);
}
