import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { Box, Typography } from "@mui/material";

export default function CheckboxLabels() {
  const [_checkboxes, _setCheckboxes] = useState<Array<string>>([]);

  return (
    <div>
      <Box>
        <Typography variant="h2" sx={{ fontSize: "24px", textAlign: "left" }}>
          Pendências
        </Typography>
      </Box>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Foto + ID" />
        <FormControlLabel control={<Checkbox />} label="Identidade" />
        <FormControlLabel control={<Checkbox />} label="PIS/PASEP ou NIT" />
        <FormControlLabel control={<Checkbox />} label="C. Residência" />
        <FormControlLabel control={<Checkbox />} label="D. União estável" />
        <FormControlLabel
          control={<Checkbox />}
          label="Certidão de Casamento"
        />
        <FormControlLabel control={<Checkbox />} label="Contracheque" />
        <FormControlLabel control={<Checkbox />} label="Termo de Posse" />
        <FormControlLabel control={<Checkbox />} label="Termo de Veracidade" />
        <FormControlLabel
          control={<Checkbox />}
          label="Declaração de Estado Civil"
        />
        <FormControlLabel control={<Checkbox />} label="ID do Dependente" />
        <FormControlLabel
          control={<Checkbox />}
          label="Declaração de Residência"
        />
      </FormGroup>
    </div>
  );
}
