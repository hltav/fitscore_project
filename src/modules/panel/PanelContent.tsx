/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState, useEffect, useCallback } from "react";
import {
  Typography,
  Paper,
  Box,
  CssBaseline,
  CircularProgress,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ThemeRegistry from "@/libs/providers/ThemeRegistry";
import { panelTheme } from "./utils/panelTheme";
import { SummaryCard } from "./utils/summaryCard";
import { Candidate, Summary } from "../candidate/interface/candidate.interface";

const PanelContent: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState("");
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(
    null
  );
  const [summary, setSummary] = useState<Summary>({
    total: 0,
    fitAltissimo: 0,
    fitAprovado: 0,
    ajusteQuestionavel: 0,
    foraDoPerfil: 0,
  });

  const fetchCandidates = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/candidates");
      if (!response.ok) throw new Error("Erro ao buscar candidatos");
      const candidatesData: Candidate[] = await response.json();
      setCandidates(candidatesData);
      calculateSummary(candidatesData);
      setError(null);
    } catch (err) {
      setError("Erro ao carregar candidatos");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCandidates();
  }, [fetchCandidates]);

  const calculateSummary = (candidates: Candidate[]) => {
    const summaryData: Summary = {
      total: candidates.length,
      fitAltissimo: candidates.filter(
        (c) => c.classification === "Fit Altíssimo"
      ).length,
      fitAprovado: candidates.filter((c) => c.classification === "Fit Aprovado")
        .length,
      ajusteQuestionavel: candidates.filter(
        (c) => c.classification === "Ajuste Questionável"
      ).length,
      foraDoPerfil: candidates.filter(
        (c) => c.classification === "Fora do Perfil"
      ).length,
    };
    setSummary(summaryData);
  };

  const filteredCandidates: Candidate[] = candidates.filter((c) => {
    const matchesFilter = filter ? c.classification === filter : true;
    const matchesSelected = selectedCandidate
      ? c.id === selectedCandidate
      : true;
    return matchesFilter && matchesSelected;
  });

  const getClassificationColor = (classification: string) => {
    switch (classification) {
      case "Fit Altíssimo":
        return "#4caf50";
      case "Fit Aprovado":
        return "#2196f3";
      case "Ajuste Questionável":
        return "#ff9800";
      case "Fora do Perfil":
        return "#f50057";
      default:
        return "inherit";
    }
  };

  const summaryNavCard: SummaryCard[] = [
    { title: "Total de Candidatos", value: summary.total, color: "primary" },
  ];

  const summaryCards: SummaryCard[] = [
    { title: "Fit Altíssimo", value: summary.fitAltissimo, color: "success" },
    { title: "Fit Aprovado", value: summary.fitAprovado, color: "info" },
    {
      title: "Ajuste Questionável",
      value: summary.ajusteQuestionavel,
      color: "warning",
    },
    {
      title: "Fora do Perfil",
      value: summary.foraDoPerfil,
      color: "secondary",
    },
  ];

  const coloredSummaryCards = summaryCards.map((card) => ({
    ...card,
    color: getClassificationColor(card.title),
  }));

  if (loading) {
    return <div>Carregando candidatos...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <ThemeRegistry theme={panelTheme}>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: "background.default",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Navbar */}
        <Box
          sx={{
            background: "linear-gradient(45deg, #0309b5 30%, #4456e0 90%)",
            color: "#fff",
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 4px 25px rgba(3, 9, 181, 0.25)",
          }}
        >
          <Typography variant="h5" component="h1" sx={{ fontWeight: "bold" }}>
            Painel de Avaliação FitScore
          </Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* Menu Lateral */}
          <Paper
            elevation={3}
            sx={{
              width: { xs: "100%", md: 280 },
              minHeight: { xs: 200, md: "calc(100vh - 64px)" },
              p: 1,
              mr: { xs: 0, md: 3 },
              mb: { xs: 3, md: 0 },
              borderRadius: 0,
            }}
          >
            {/* Filtros */}

            <FormControl fullWidth>
              <InputLabel id="classification-filter-label">
                Filtrar por Classificação
              </InputLabel>
              <Select
                labelId="classification-filter-label"
                value={filter}
                label="Filtrar por Classificação"
                onChange={(e) => {
                  setFilter(e.target.value as string);
                  setSelectedCandidate(null);
                }}
              >
                <MenuItem value="">Todos</MenuItem>
                <MenuItem value="Fit Altíssimo">Fit Altíssimo</MenuItem>
                <MenuItem value="Fit Aprovado">Fit Aprovado</MenuItem>
                <MenuItem value="Ajuste Questionável">
                  Ajuste Questionável
                </MenuItem>
                <MenuItem value="Fora do Perfil">Fora do Perfil</MenuItem>
              </Select>
            </FormControl>
          </Paper>

          {/* Conteúdo Principal */}
          <Box sx={{ flexGrow: 1, px: 3, py: 2 }}>
            <Paper elevation={3} sx={{ p: { xs: 3, sm: 5 } }}>
              {/* Seção de Resumo em Cards */}
              <Grid container spacing={2} sx={{ mb: 4 }}>
                {summaryCards.map((card, index) => (
                  <Grid size={{ xs: 6, sm: 3, md: 2.5 }} key={index}>
                    <Paper elevation={2} sx={{ p: 3, textAlign: "center" }}>
                      <Typography
                        variant="subtitle1"
                        component="h1"
                        sx={{ fontWeight: "bold", color: "text.secondary" }}
                      >
                        {card.title}
                      </Typography>
                      <Typography
                        variant="h5"
                        component="p"
                        sx={{
                          fontWeight: "bold",
                          mt: 1,
                          color:
                            panelTheme.palette[card.color]?.main ||
                            "text.primary",
                        }}
                      >
                        {card.value}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>

              {/* Exibição da lista de candidatos */}
              {loading && (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                  <CircularProgress />
                </Box>
              )}

              {error && (
                <Box sx={{ mt: 4, textAlign: "center" }}>
                  <Typography color="error">{error}</Typography>
                </Box>
              )}

              {!loading && filteredCandidates.length === 0 && (
                <Box sx={{ mt: 4, textAlign: "center" }}>
                  <Typography variant="h6" color="text.secondary">
                    Nenhum candidato encontrado com a classificação selecionada.
                  </Typography>
                </Box>
              )}

              {!loading && filteredCandidates.length > 0 && (
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead sx={{ bgcolor: "primary.main" }}>
                      <TableRow>
                        <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                          Nome
                        </TableCell>
                        <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                          E-mail
                        </TableCell>
                        <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                          FitScore
                        </TableCell>
                        <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                          Classificação
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredCandidates.map((candidate) => (
                        <TableRow
                          key={candidate.id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {candidate.name}
                          </TableCell>
                          <TableCell>{candidate.email}</TableCell>
                          <TableCell
                            sx={{
                              color: getClassificationColor(
                                candidate.classification
                              ),
                              fontWeight: "bold", 
                            }}
                          >
                            {candidate.total_score}
                          </TableCell>

                          <TableCell>
                            <Typography
                              component="span"
                              sx={{
                                fontWeight: "bold",
                                color: getClassificationColor(
                                  candidate.classification
                                ),
                              }}
                            >
                              {candidate.classification}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </Paper>
          </Box>
        </Box>
      </Box>
    </ThemeRegistry>
  );
};

export default PanelContent;
