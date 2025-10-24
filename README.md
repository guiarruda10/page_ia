# IA na Prática - Landing Page

Landing page para a empresa IA na Prática, especializada em soluções de Inteligência Artificial.

## Sobre o Projeto

Esta é uma landing page moderna e responsiva desenvolvida para apresentar os serviços e soluções da IA na Prática, empresa especializada em IA Generativa com mais de 20 anos de experiência.

## Tecnologias Utilizadas

Este projeto foi desenvolvido com:

- **Vite** - Build tool moderna e rápida
- **TypeScript** - Tipagem estática para JavaScript
- **React** - Biblioteca para interfaces de usuário
- **shadcn/ui** - Componentes de UI modernos
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones SVG
- **Embla Carousel** - Carrossel responsivo

## Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <URL_DO_REPOSITORIO>

# Navegue para o diretório do projeto
cd ia-na-pratica

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter

## Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes de UI (shadcn/ui)
│   ├── Hero.tsx        # Seção hero
│   ├── Services.tsx    # Seção de serviços
│   ├── Clients.tsx     # Seção de clientes
│   ├── Portfolio.tsx   # Seção de portfólio
│   ├── Contact.tsx     # Seção de contato
│   └── ...
├── pages/              # Páginas da aplicação
├── assets/             # Imagens e recursos
└── lib/                # Utilitários
```

## Deploy

Para fazer o deploy da aplicação:

1. Execute `npm run build` para gerar os arquivos de produção
2. Faça o upload dos arquivos da pasta `dist/` para seu servidor
3. Configure seu servidor para servir os arquivos estáticos

## Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request
