export interface Candidate {
  id: string;
  name: string;
  email: string;
  totalScore: number;
  classification: "Fit Altíssimo" | "Fit Aprovado" | "Ajuste Questionável" | "Fora do Perfil";
}
