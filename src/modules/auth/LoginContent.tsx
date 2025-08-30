'use client';
import { useState } from 'react';
import { Button, Box, Stack, Typography, CircularProgress, TextField } from '@mui/material';
import ThemeRegistry from '@/libs/providers/ThemeRegistry';
import theme from '@/libs/theme/theme';

 function LoginContent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    console.log(res);

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || "Erro ao fazer login");
      setLoading(false);
      return;
    }
    
    localStorage.setItem("token", data.token);
    alert("Login realizado com sucesso!");
    
    window.location.href = "/panel";
  } catch (err) {
    console.error(err);
    alert("Erro de rede ou servidor");
  } finally {
    setLoading(false);
  }
};
  return (
    <ThemeRegistry theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          backgroundColor: '#f0f2f5', 
          p: 2, 
        }}
      >
        <Box
          component="form"
          onSubmit={handleLogin}
          sx={{
            width: { xs: '100%', sm: '80%', md: '50%' },
            maxWidth: '400px',
            p: 4,
            backgroundColor: '#fff',
            borderRadius: '16px', 
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#333', mb: 4, fontWeight: 'bold', textAlign: 'center' }}>
            Acesse o Painel
          </Typography>

          <Stack spacing={2} direction="column">
            {/* Campo de e-mail */}
            <TextField
              fullWidth
              label="E-mail"
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* Campo de senha */}
            <TextField
              fullWidth
              label="Senha"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* Botão de login */}
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              disabled={loading}
              sx={{
                py: 2,
                fontSize: '1.25rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                '&:hover': {
                  boxShadow: '0 6px 8px rgba(0,0,0,0.15)',
                  backgroundColor: 'primary.dark',
                },
              }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Entrar'}
            </Button>
          </Stack>
        </Box>
      </Box>
    </ThemeRegistry>
  );
}


export default LoginContent;