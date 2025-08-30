"use client";
import React, { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Button,
  Box,
  CssBaseline,
  Grid,
  CircularProgress,
  TextField,
} from "@mui/material";
import theme from "@/libs/theme/theme";
import ThemeRegistry from "@/libs/providers/ThemeRegistry";
import { initialScores } from "./utils/scores";
import FormHeader from "./components/FormHeader";
import QuestionBlock from "./components/QuestionBlock";
import { formQuestions } from "./utils/formQuestions";

const CandidateContent: React.FC = () => {
  const [scores, setScores] = useState(initialScores);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (questionId: string, value: number) => {
    setScores((prevScores) => ({
      ...prevScores,
      [questionId]: value,
    }));
    setErrorMessage(null);
    setSuccessMessage(null);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const allAnswered = Object.values(scores).every((score) => score !== null);
    if (!name || !email || !allAnswered) {
      setErrorMessage(
        "Por favor, preencha seu nome e e-mail e responda a todas as perguntas antes de enviar."
      );
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    try {
      const totalScore = Object.values(scores as Record<string, number>).reduce(
        (sum, current) => sum + current,
        0
      );

      let classification = "";
      if (totalScore >= 80) classification = "Fit Altíssimo";
      else if (totalScore >= 60) classification = "Fit Aprovado";
      else if (totalScore >= 40) classification = "Ajuste Questionável";
      else classification = "Fora do Perfil";

      const dataToSend = {
        name,
        email,
        total_score: totalScore.toString(),
        classification,
        answers: scores,
      };

      const response = await fetch(
        "https://hltav2025.app.n8n.cloud/webhook/candidates",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToSend),
        }
      );

      const result = await response.json();
      console.log("Resposta do n8n:", result);

      setSuccessMessage(
        "Formulário enviado com sucesso! Entraremos em contato em breve."
      );

      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (error) {
      console.error(error);
      setErrorMessage("Ocorreu um erro ao enviar o formulário.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeRegistry theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: "background.default",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <Paper elevation={3} sx={{ p: { xs: 3, sm: 5 } }}>
            <FormHeader />

            <form onSubmit={handleSubmit}>
              {/* Campos de Nome e E-mail */}
              <Grid container spacing={2} display={"flex"}>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Nome do Candidato"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Grid>
              </Grid>

              <Grid container spacing={4} sx={{ mt: 3 }}>
                {/* Substitua o código manual pelo QuestionBlock */}
                {["Desempenho", "Energia", "Cultura LEGAL"].map((blockName) => (
                  <QuestionBlock
                    key={blockName}
                    blockName={blockName}
                    questions={formQuestions.filter(
                      (q) => q.block === blockName
                    )}
                    scores={scores}
                    onChange={handleChange}
                  />
                ))}
              </Grid>

              <Box sx={{ mt: 4, textAlign: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={loading}
                >
                  {loading ? (
                    <CircularProgress size={24} sx={{ color: "#fff" }} />
                  ) : (
                    "Enviar Formulário"
                  )}
                </Button>
                {errorMessage && (
                  <Typography color="error" sx={{ mt: 2 }}>
                    {errorMessage}
                  </Typography>
                )}
                {successMessage && (
                  <Typography color="success.main" sx={{ mt: 2 }}>
                    {successMessage}
                  </Typography>
                )}
              </Box>
            </form>
          </Paper>
        </Container>
      </Box>
    </ThemeRegistry>
  );
};

export default CandidateContent;
