export interface Candidate {
  id: string
  name: string
  email: string
  totalScore: string
  classification: string
  created_at: string
}

export interface Summary {
  total: number
  fitAltissimo: number
  fitAprovado: number
  ajusteQuestionavel: number
  foraDoPerfil: number
}

export interface SummaryCard {
  title: string
  value: number
  color: string
}