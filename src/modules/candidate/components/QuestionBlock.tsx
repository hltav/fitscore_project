import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { QuestionBlockProps } from "../utils/questionsBlockProps";

const QuestionBlock: React.FC<QuestionBlockProps> = ({
  blockName,
  questions,
  scores,
  onChange,
}) => {
  return (
    <Grid size={{ xs: 12 }}>
      <Paper
        elevation={1}
        sx={{
          p: { xs: 2, sm: 4 },
          bgcolor: "primary.main",
          color: "#fff",
        }}
      >
        <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
          {blockName}
        </Typography>
      </Paper>
      <Box sx={{ mt: 3 }}>
        {questions.map((q) => (
          <Paper
            key={q.id}
            elevation={1}
            sx={{
              p: { xs: 2, sm: 3 },
              mb: 4,
              transition: "box-shadow 0.3s",
              "&:hover": {
                boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
              },
            }}
          >
            <Typography
              variant="body1"
              component="h3"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              {q.question}
            </Typography>
            <RadioGroup
              aria-label={q.question}
              name={q.id}
              value={scores[q.id]?.toString() ?? ""}
              onChange={(e) => onChange(q.id, Number(e.target.value))}
            >
              {q.options.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio size="small" />}
                  label={<Typography variant="body2">{option.text}</Typography>}
                  sx={{
                    border: "1px solid #e0e0e0",
                    borderRadius: 8,
                    mb: 1,
                    p: 1.5,
                    transition: "background-color 0.2s",
                    "&.Mui-checked": {
                      backgroundColor: "rgba(3, 9, 181, 0.1)",
                      borderColor: "primary.main",
                    },
                    "&:hover": {
                      backgroundColor: "rgba(3, 9, 181, 0.05)",
                    },
                  }}
                />
              ))}
            </RadioGroup>
          </Paper>
        ))}
      </Box>
    </Grid>
  );
};

export default QuestionBlock;
