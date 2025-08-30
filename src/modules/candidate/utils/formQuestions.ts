export const formQuestions = [
  // Bloco 1 - Desempenho
  {
    id: 'exp',
    block: 'Desempenho',
    question: '1. Experiência profissional para a função',
    options: [
      { text: 'Gosto de aprender fazendo, mesmo que ainda não tenha muita bagagem na área.', value: 1 },
      { text: 'Tenho experiência, mas prefiro aplicar apenas no que me sinto 100% seguro.', value: 3 },
      { text: 'Já atuei em contextos parecidos, sei o suficiente para começar a contribuir rápido.', value: 5 },
      { text: 'Trago vivência em situações diversas e me sinto à vontade em novos desafios.', value: 8 },
      { text: 'Além da experiência prática, gosto de compartilhar e ensinar o que já aprendi.', value: 10 },
    ],
  },
  {
    id: 'entregas',
    block: 'Desempenho',
    question: '2. Cumprimento das entregas',
    options: [
      { text: 'Prefiro entregar rápido, mesmo que depois precise corrigir ajustes.', value: 1 },
      { text: 'Gosto de revisar bastante antes de entregar, mesmo que leve mais tempo.', value: 3 },
      { text: 'Procuro equilibrar velocidade e qualidade, mas às vezes sacrifico um dos dois.', value: 5 },
      { text: 'Cumpro o que foi combinado, e aviso quando percebo que pode atrasar.', value: 8 },
      { text: 'Antecipar riscos e reorganizar tarefas é meu jeito de garantir que tudo saia no prazo.', value: 10 },
    ],
  },
  {
    id: 'habilidades',
    block: 'Desempenho',
    question: '3. Habilidades técnicas',
    options: [
      { text: 'Uso bem as ferramentas que já domino, mas tenho resistência em mudar para novas.', value: 1 },
      { text: 'Aprendo novas técnicas quando realmente preciso delas no trabalho.', value: 3 },
      { text: 'Consigo usar o essencial e buscar soluções quando surge algo fora da rotina.', value: 5 },
      { text: 'Gosto de experimentar novas abordagens para resolver os problemas.', value: 8 },
      { text: 'Além de aplicar, tenho prazer em aprofundar e elevar o nível técnico do time.', value: 10 },
    ],
  },
  {
    id: 'aprender',
    block: 'Desempenho',
    question: '4. Capacidade de aprender e se desenvolver',
    options: [
      { text: 'Aprendo melhor quando alguém me ensina passo a passo.', value: 1 },
      { text: 'Prefiro aprender sozinho, pesquisando, mesmo que demore mais.', value: 3 },
      { text: 'Preciso de prática constante para fixar o que aprendi.', value: 5 },
      { text: 'Consigo aprender rápido e aplicar logo em seguida.', value: 8 },
      { text: 'Além de aprender, gosto de compartilhar os aprendizados com os outros.', value: 10 },
    ],
  },
  // Bloco 2 - Energia
  {
    id: 'disponibilidade',
    block: 'Energia',
    question: '5. Disponibilidade para assumir responsabilidades',
    options: [
      { text: 'Prefiro assumir pequenas tarefas e garantir que saiam bem feitas.', value: 1 },
      { text: 'Gosto de assumir responsabilidades quando tenho controle total sobre elas.', value: 3 },
      { text: 'Aceito responsabilidades maiores, mas preciso de apoio no caminho.', value: 5 },
      { text: 'Me sinto motivado quando tenho autonomia para tocar projetos importantes.', value: 8 },
      { text: 'Assumir responsabilidades grandes me dá energia, mesmo que exijam mais esforço.', value: 10 },
    ],
  },
  {
    id: 'prazos',
    block: 'Energia',
    question: '6. Cumprimento de prazos',
    options: [
      { text: 'Gosto de entregar no prazo, mas às vezes sacrifico qualidade para isso.', value: 1 },
      { text: 'Prefiro manter a qualidade, mesmo que o prazo fique em risco.', value: 3 },
      { text: 'Cumpro prazos, mas só quando tenho clareza total das prioridades.', value: 5 },
      { text: 'Planejo as etapas para evitar atrasos e reorganizo quando surge imprevisto.', value: 8 },
      { text: 'Busco entregar antes do prazo para abrir espaço para ajustes e imprevistos.', value: 10 },
    ],
  },
  {
    id: 'pressao',
    block: 'Energia',
    question: '7. Reação sob pressão',
    options: [
      { text: 'Prefiro desacelerar para manter a calma, mesmo que atrase um pouco.', value: 1 },
      { text: 'Gosto de agir rápido, mesmo que corra o risco de errar mais.', value: 3 },
      { text: 'Reorganizo prioridades, mesmo que precise deixar algo de lado.', value: 5 },
      { text: 'Busco apoio do time para segurar a pressão junto comigo.', value: 8 },
      { text: 'Uso a pressão como motivação, mas posso ficar mais direto do que o normal.', value: 10 },
    ],
  },
  // Bloco 3 - Cultura LEGAL
  {
    id: 'transparencia',
    block: 'Cultura LEGAL',
    question: '8. Transparência radical acima de tudo',
    options: [
      { text: 'Prefiro compartilhar só quando acho que é realmente necessário.', value: 1 },
      { text: 'Divido informações logo, mesmo que ainda estejam incompletas.', value: 3 },
      { text: 'Gosto de discutir primeiro em privado antes de abrir para todos.', value: 5 },
      { text: 'Tento ser claro, mas escolho bem o momento de falar.', value: 8 },
      { text: 'Compartilho tudo de imediato, mesmo que possa gerar desconforto.', value: 10 },
    ],
  },
  {
    id: 'disciplina',
    block: 'Cultura LEGAL',
    question: '9. Disciplina é igual a liberdade',
    options: [
      { text: 'Preciso de regras claras para manter a disciplina no dia a dia.', value: 1 },
      { text: 'Funciono bem com supervisão, me organizo melhor com alguém acompanhando.', value: 3 },
      { text: 'Consigo manter disciplina quando tenho rotinas bem definidas.', value: 5 },
      { text: 'Organizo-me sozinho para cumprir tarefas sem precisar de cobrança.', value: 8 },
      { text: 'Quanto mais disciplina tenho, mais liberdade sinto para inovar e arriscar.', value: 10 },
    ],
  },
  {
    id: 'atitude',
    block: 'Cultura LEGAL',
    question: '10. Atitude e comportamentos LEGAL',
    options: [
      { text: 'Prefiro pensar bastante antes de agir, mesmo que demore mais.', value: 1 },
      { text: 'Tomo decisões rápido, mesmo correndo o risco de errar.', value: 3 },
      { text: 'Sigo o que o time decidir, mas tento ajudar a manter o ritmo.', value: 5 },
      { text: 'Gosto de propor soluções e assumir a frente quando vejo oportunidade.', value: 8 },
      { text: 'Trabalho com dados, mas também sigo minha intuição quando necessário.', value: 10 },
    ],
  },
];