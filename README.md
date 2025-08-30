FitScore Project

Sistema web de avaliação de candidatos baseado em desempenho, energia e cultura, que gera automaticamente um FitScore indicando o nível de aderência ao perfil da empresa.

🎯 Funcionalidades Principais

📋 Formulário de Avaliação Interativo

10 perguntas divididas em 3 blocos:

Desempenho: experiência, entregas, habilidades.

Energia: disponibilidade, cumprimento de prazos, trabalho sob pressão.

Cultura: valores e alinhamento com a empresa.

🔐 Autenticação

Login seguro com bcrypt (senhas criptografadas).

📊 FitScore Automático

≥ 80 pontos → Fit Altíssimo

60–79 pontos → Fit Aprovado

40–59 pontos → Ajuste Questionável

< 40 pontos → Fora do Perfil

🌐 Deploy na Vercel

Integrado com Supabase para banco de dados.

🛠️ UI Moderna

Material UI (MUI 7) com suporte a temas customizados e alertas customizados.


🏗️ Estrutura do Projeto
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── (auth)/login/page.tsx
│   ├── api/
│   │   ├── candidates/route.ts
│   │   ├── login/route.ts
│   │   └── sendCandidate/route.ts
│   ├── candidate/page.tsx
│   └── panel/page.tsx
├── libs/
│   ├── supabaseClient.ts
│   ├── hooks/
│   ├── providers/ThemeRegistry.tsx
│   ├── theme/theme.ts
│   └── ui/CustomAlert.tsx
└── modules/
    ├── auth/LoginContent.tsx
    ├── candidate/CandidateContent.tsx
    ├── candidate/components/
    ├── candidate/interface/candidate.interface.ts
    ├── candidate/utils/
    ├── home/HomeContent.tsx
    └── panel/
        ├── PanelContent.tsx
        ├── components/
        └── utils/


Nota: Cada módulo possui componentes, interfaces e utilitários separados para escalabilidade e manutenção.

🔄 Fluxo da Aplicação
flowchart TD
    A[Usuário] --> B[Login]
    B -->|Login válido| C[Formulário de Avaliação]
    C --> D[Envio das Respostas]
    D --> E[API Supabase]
    E --> F[Cálculo do FitScore]
    F --> G[Exibição no Painel]

⚙️ Instalação e Setup Local
1. Clonar o Repositório
git clone https://github.com/seu-usuario/fitscore-project.git
cd fitscore-project

2. Instalar Dependências
npm install
# ou
yarn install

3. Variáveis de Ambiente

Crie .env.local:

SUPABASE_URL=https://<sua-instancia>.supabase.co
SUPABASE_KEY=<sua-service-role-key>


⚠️ Nunca exponha a SERVICE_ROLE_KEY no frontend.

4. Executar Localmente
npm run dev


Acesse: http://localhost:3000

🌐 Deploy na Vercel

Conecte o repositório na Vercel
.

Configure as mesmas variáveis de ambiente do .env.local no painel da Vercel.

Deploy automático a cada push no branch principal.

Se ocorrer erro 401 Unauthorized, verifique se as variáveis do Supabase estão corretas e disponíveis no ambiente de produção.

🔒 Segurança

Senhas criptografadas com bcrypt.

Variáveis sensíveis armazenadas no ambiente (.env.local ou painel da Vercel).

Respostas de login inválido retornam 401 Unauthorized.

📌 Roadmap Futuro

Dashboard com gráficos e exportação de relatórios.

Múltiplos formulários customizáveis.

Autenticação com cookies HTTP-only.

Melhorias no design e experiência do usuário.

👨‍💻 Autor

Hudson Tavares
Desenvolvedor do projeto FitScore

📧 hudson@email
🌐 LinkedIn
 | GitHub