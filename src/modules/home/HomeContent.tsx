"use client";
import { useState } from "react";
import {
  Button,
  Box,
  Stack,
  Typography,
  CircularProgress,
} from "@mui/material";
import ThemeRegistry from "@/libs/providers/ThemeRegistry";
import { useRouter } from "next/navigation";
import CustomAlert from "@/libs/ui/CustomAlert";
import theme from "@/libs/theme/theme";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<
    "Candidato" | "Colaborador" | null
  >(null);
  const router = useRouter();

  const handleProfileSelection = (profile: "Candidato" | "Colaborador") => {
    setLoading(true);
    setSelectedProfile(profile);
    console.log(`Usuário selecionou o perfil: ${profile}`);

    setAlertOpen(true);

    setTimeout(() => {
      setAlertOpen(false);
      if (profile === "Candidato") {
        router.push("/candidate");
      } else {
        router.push("/login");
      }
      setLoading(false);
    }, 1000);
  };

  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  return (
    <ThemeRegistry theme={theme}>
      {/* Alerta Personalizado */}
      <CustomAlert
        open={alertOpen}
        onClose={handleAlertClose}
        message={
          selectedProfile
            ? `Redirecionando para a página de ${selectedProfile}...`
            : ""
        }
        showProgress={true}
        duration={1000}
        severity="success"
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "#f0f2f5",
          p: 2,
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ color: "#333", mb: 4, fontWeight: "bold" }}
        >
          Selecione seu perfil
        </Typography>

        <Box
          sx={{
            width: { xs: "100%", sm: "80%", md: "50%" },
            maxWidth: "400px",
          }}
        >
          <Stack spacing={2} direction="column">
            {/* Botão para Candidato */}
            <Button
              variant="contained"
              size="large"
              disabled={loading}
              onClick={() => handleProfileSelection("Candidato")}
              sx={{
                py: 2,
                borderRadius: "50px",
                fontSize: "1.25rem",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                "&:hover": {
                  boxShadow: "0 6px 8px rgba(0,0,0,0.15)",
                  backgroundColor: "primary.dark",
                },
              }}
            >
              Candidato
            </Button>

            {/* Botão para Colaborador */}
            <Button
              variant="contained"
              size="large"
              disabled={loading}
              onClick={() => handleProfileSelection("Colaborador")}
              sx={{
                py: 2,
                borderRadius: "50px",
                fontSize: "1.25rem",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                "&:hover": {
                  boxShadow: "0 6px 8px rgba(0,0,0,0.15)",
                  backgroundColor: "primary.dark",
                },
              }}
            >
              Colaborador
            </Button>
          </Stack>

          {loading && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              <CircularProgress />
            </Box>
          )}
        </Box>
      </Box>
    </ThemeRegistry>
  );
}
