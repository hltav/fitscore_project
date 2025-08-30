import { Candidate } from "./candidate.interface";

export const mockCandidates: Candidate[] = [
  {
    id: "1",
    name: "Ana Oliveira",
    email: "ana.o@email.com",
    totalScore: 95,
    classification: "Fit Altíssimo",
  },
  {
    id: "2",
    name: "Bruno Costa",
    email: "bruno.c@email.com",
    totalScore: 88,
    classification: "Fit Aprovado",
  },
  {
    id: "3",
    name: "Carla Santos",
    email: "carla.s@email.com",
    totalScore: 72,
    classification: "Ajuste Questionável",
  },
  {
    id: "4",
    name: "Daniel Pereira",
    email: "daniel.p@email.com",
    totalScore: 55,
    classification: "Fora do Perfil",
  },
  {
    id: "5",
    name: "Eva Rodrigues",
    email: "eva.r@email.com",
    totalScore: 92,
    classification: "Fit Altíssimo",
  },
  {
    id: "6",
    name: "Fábio Almeida",
    email: "fabio.a@email.com",
    totalScore: 80,
    classification: "Fit Aprovado",
  },
  {
    id: "7",
    name: "Gabriela Lima",
    email: "gabriela.l@email.com",
    totalScore: 68,
    classification: "Ajuste Questionável",
  },
];

export const mockSummary = {
  total: mockCandidates.length,
  fitAltissimo: mockCandidates.filter(
    (c) => c.classification === "Fit Altíssimo"
  ).length,
  fitAprovado: mockCandidates.filter((c) => c.classification === "Fit Aprovado")
    .length,
  ajusteQuestionavel: mockCandidates.filter(
    (c) => c.classification === "Ajuste Questionável"
  ).length,
  foraDoPerfil: mockCandidates.filter(
    (c) => c.classification === "Fora do Perfil"
  ).length,
};