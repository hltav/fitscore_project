import React from 'react';
import { Box, Typography } from '@mui/material';

const FormHeader: React.FC = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(45deg, #0309b5 30%, #4456e0 90%)",
        color: "#fff",
        p: { xs: 3, sm: 5 },
        borderRadius: 16,
        mb: 4,
        boxShadow: "0 8px 25px rgba(3, 9, 181, 0.25)",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        align="center"
        sx={{ fontWeight: "bold" }}
      >
        Formulário FitScore
      </Typography>
      <Typography
        variant="body1"
        component="p"
        align="center"
        sx={{ mt: 1 }}
      >
        Versão Trade-off (sem respostas óbvias)
      </Typography>
    </Box>
  );
};

export default FormHeader;