import React from "react";
import "./App.css";
import { SwapTokensContent } from "./components/SwapTokensContent";
import { Box, Card, CardContent, Typography } from "@mui/material";

export const App: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#0d1d36",
        width: 500,
        margin: "40px auto",
        color: "#fff",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <Typography variant="h6" component="h2">
        Swap Tokens
      </Typography>
      <Card
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          borderRadius: 0,
          p: 3,
        }}
      >
        <CardContent>
          <SwapTokensContent />
        </CardContent>
      </Card>
    </Box>
  );
};

export default App;
