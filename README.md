# Projeto Amigo Secreto

## Descrição

O Projeto Amigo Secreto é uma aplicação web simples que permite aos usuários adicionar nomes de pessoas e sortear aleatoriamente um participante. Ideal para organizar brincadeiras de amigo secreto em festas, eventos ou encontros.

## Funcionalidades

- Adicionar nomes de participantes
- Visualizar lista de participantes adicionados
- Sortear um participante aleatoriamente
- Interface responsiva e amigável

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Google Fonts

## Estrutura do Projeto

```
amigo-secreto/
│
├── index.html       # Estrutura da página
├── style.css        # Estilos da aplicação
├── app.js           # Lógica de funcionamento
└── assets/          # Pasta de recursos
    ├── amigo-secreto.png
    └── play_circle_outline.png
```

## Como Usar

### Instalação

1. Clone o repositório ou baixe os arquivos para sua máquina local:
   ```bash
   git clone https://github.com/seu-usuario/amigo-secreto.git
   ```

2. Abra o arquivo `index.html` em qualquer navegador moderno.

### Uso

1. Digite o nome de um participante no campo de texto.
2. Clique no botão "Adicionar" ou pressione Enter para adicionar o nome à lista.
3. Repita o processo para adicionar todos os participantes desejados.
4. Clique no botão "Sortear amigo" para selecionar aleatoriamente um dos nomes adicionados.
5. O nome sorteado será exibido e a lista de participantes será ocultada.
6. Para adicionar mais nomes ou realizar um novo sorteio, basta adicionar um novo nome.

## Personalização

### Cores

O projeto utiliza variáveis CSS para facilitar a personalização. Você pode modificar as cores no arquivo `style.css`:

```css
:root {
    --color-primary: #4B69FD;    /* Cor de fundo principal */
    --color-secondary: #FFF9EB;  /* Cor de fundo secundária */
    --color-tertiary: #C4C4C4;   /* Cor dos elementos terciários */
    --color-button: #fe652b;     /* Cor do botão principal */
    --color-button-hover: #e55720; /* Cor do botão ao passar o mouse */
    --color-text: #444444;       /* Cor do texto principal */
    --color-white: #FFFFFF;      /* Cor branca */
}
```

## Funcionalidades Adicionais (Sugestões para Implementação Futura)

- Adicionar funcionalidade de sorteio completo (cada pessoa tira um amigo)
- Implementar opção de remover nomes da lista
- Adicionar persistência local (salvar nomes no localStorage)
- Implementar animação durante o sorteio
- Adicionar opção de compartilhar resultado por e-mail ou mensagem

## Compatibilidade

A aplicação é compatível com todos os navegadores modernos:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge


## Autor

Mateus Mendes - mateus.mendes@unifesspa.edu.br

---

Desenvolvido como parte de um processo seletivo para demonstrar habilidades em HTML, CSS e JavaScript.
