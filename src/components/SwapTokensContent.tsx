import { Box, Button, TextField } from "@mui/material";
import React from "react";

export const SwapTokensContent: React.FC = () => {
  return (
    <Box component="section">
      <Box
        component="div"
        sx={{ display: "flex", alignItems: "center", mb: 2 }}
      >
        <TextField
          variant="outlined"
          label="Pay"
          defaultValue="#SomeValue"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{
            label: { color: "white", fontSize: "18px" },
            flex: 1,
            backgroundColor: "#0a172f",
            input: { color: "#fff", padding: "30px 16px" },
            "&.MuiOutlinedInput-root": {
              "&.fieldset": { borderColor: "#4A5568" },
            },
          }}
        />
      </Box>

      <Box
        component="div"
        sx={{ display: "flex", alignItems: "center", mb: 2 }}
      >
        <TextField
          variant="outlined"
          label="Recive"
          defaultValue="#SomeValue"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{
            label: { color: "white", fontSize: "18px" },
            flex: 1,
            backgroundColor: "#0a172f",
            input: { color: "#fff", padding: "30px 16px" },
            "&.MuiOutlinedInput-root": {
              "&.fieldset": { borderColor: "#4A5568" },
            },
          }}
        />
      </Box>

      <Button
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: "#2669f5",
          padding: "15px",
          boxShadow: "0px 0px 8px 2px rgba(38, 105, 245, 0.6)",
          "&.hover": {
            backgroundColor: "#2B6CB0",
          },
          borderRadius: 2,
          textTransform: "none",
          fontSize: "17px",
        }}
      >
        Connect Wallet
      </Button>
    </Box>
  );
};
