---

## 🎨 Personalização

### Cores

Edite o arquivo `css/global.css`:

```css
:root {
    --primary: #2B5FA6;        /* Azul principal */
    --primary-dark: #1e3a5f;   /* Azul escuro */
    --primary-light: #4a7fc1;  /* Azul claro */
}
```

### Logos

Substitua as imagens em `assets/logos/`:
- `universidade.png` - Logo da Universidade
- `cristal-sete.png` - Logo da empresa
- `blindex.png` - Logo do parceiro

### Textos

Edite os arquivos HTML diretamente:
- `index.html` - Missão, valores, metodologia
- `cursos.html` - Estatísticas do catálogo
- `meu-perfil.html` - Informações do usuário

---

## 🔧 Solução de Problemas

### Os vídeos não carregam
- ✅ Verifique se as URLs do YouTube/Vimeo estão corretas
- ✅ Use URLs públicas (não privadas)
- ✅ Formato correto: `https://youtube.com/watch?v=ID`

### Os slides não aparecem
- ✅ Verifique se o Google Slides está público
- ✅ Use o link de compartilhamento
- ✅ Ou use PDFs hospedados online

### O progresso não salva
- ✅ Verifique se o navegador permite localStorage
- ✅ Não use modo anônimo/privado
- ✅ Limpe o cache se necessário

### Erros no console
- ✅ Abra o DevTools (F12)
- ✅ Veja mensagens de erro na aba "Console"
- ✅ Verifique se todos os arquivos foram carregados

---

## 📱 Compatibilidade

### Navegadores Suportados
- ✅ Chrome/Edge (Recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Opera

### Dispositivos
- ✅ Desktop (Windows/Mac/Linux)
- ✅ Tablet (iPad/Android)
- ✅ Mobile (iOS/Android)

---

## 📊 Recursos de Dados

### LocalStorage

A plataforma usa LocalStorage do navegador para:
- Progresso dos cursos
- Resultados de quizzes
- Tempo assistido
- Notas e marcadores

### Backup Manual

Para fazer backup do progresso:
```javascript
// Cole no Console do navegador (F12)
const dados = exportarProgresso();
console.log(JSON.stringify(dados));
// Copie e salve em um arquivo .json
```

---

## 🎓 Tipos de Conteúdo Suportados

### Vídeos
- YouTube (URL completa)
- Vimeo
- Qualquer plataforma com iframe embed

### Slides
- Google Slides (compartilhamento público)
- PDFs online
- SlideShare

### Quiz
- Múltipla escolha
- Gabarito automático
- Pontuação e aprovação

---

## 🔐 Segurança

### Boas Práticas
- ⚠️ Não compartilhe URLs privadas no código
- ⚠️ Não inclua senhas ou tokens
- ⚠️ Use sempre HTTPS para recursos externos
- ✅ Mantenha backups regulares

---

## 📞 Suporte

### Problemas ou Dúvidas?

1. **Verifique este README** primeiro
2. **Teste em modo anônimo** do navegador
3. **Limpe o cache** (Ctrl+Shift+Del)
4. **Verifique o Console** (F12)

### Melhorias Futuras

- [ ] Sistema de autenticação
- [ ] Banco de dados backend
- [ ] Notificações por email
- [ ] Certificados em PDF
- [ ] Gamificação avançada
- [ ] Fórum de discussão
- [ ] Chat ao vivo

---

## 📄 Licença

© 2020-2025 Universidade Cristal Sete  
Desenvolvido para uso interno da Cristal Sete - Vidros de Segurança

---

## 🙏 Créditos

- **Empresa:** Cristal Sete - Vidros de Segurança
- **Parceiro:** Blindex
- **Framework CSS:** Tailwind CSS
- **Ícones:** Heroicons
- **Fontes:** Google Fonts (Inter)

---

**🎉 Pronto! Sua Universidade Corporativa está funcionando!**

Para adicionar seu primeiro curso, vá em `admin.html` e comece a criar conteúdo.

Bons estudos! 📚✨