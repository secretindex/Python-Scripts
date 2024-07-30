import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Avatar from "@mui/material/Avatar"
import {
  Box,
  Typography,
  Select,
  SelectChangeEvent,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material"

import { ComplexDocs } from "../utils/docsInterface"
import React, { useState } from "react"

const documents: ComplexDocs = {
  foto: {
    name: "Foto + id",
    required: true,
    present: false,
  },
  id: {
    name: "Identidade",
    required: true,
    present: false,
    options: undefined,
    optionList: ["valido", "+10"],
  },
  residencia: {
    name: "C. Residencia",
    required: true,
    present: false,
    options: undefined,
    optionList: ["valido", "+60", "terceiros"],
  },
  estadoCivil: {
    name: "Estado civil",
    required: true,
    present: false,
    options: undefined,
    optionList: ["solteiro", "casado", "uniao"],
  },
  contracheque: {
    name: "Contracheque",
    required: true,
    present: false,
  },
  posse: {
    name: "Termo de Posse",
    required: true,
    present: false,
  },
  veracidade: {
    name: "Termo de Veracidade",
    required: true,
    present: false,
  },
  comprovanteEstado: {
    name: "C. de Estado Civil",
    required: true,
    present: false,
  },
  depId: {
    name: "Identidade Dependente",
    required: true,
    present: false,
    options: undefined,
    optionList: ["semdep", "dep"],
  },
  declaracaoRes: {
    name: "Declaração de Residência",
    required: false,
    present: false,
    options: undefined,
    optionList: ["Não requerido", "Requerido"],
  },
}

interface DocumentosOptionsProps {
  name: string
  required?: boolean
  present?: boolean
  option?: any
  optionList?: Array<string>
}

const DocumentOptions: React.FC<DocumentosOptionsProps> = ({
  name,
  optionList,
}) => {
  const [field, setField] = useState<string>("")
  const handleChange = (e: SelectChangeEvent) => {
    console.log(e.target.value)
    setField(e.target.value)
  }
  return (
    <ListItem sx={{ width: "100%" }}>
      <FormControl variant="outlined" fullWidth>
        <InputLabel id="field-name">{name}</InputLabel>
        <Select
          labelId="field-name"
          label={name}
          value={field}
          onChange={handleChange}
          fullWidth={true}
        >
          {optionList
            ? optionList.map((opt) => {
                return (
                  <MenuItem key={opt} value={opt}>
                    {opt}
                  </MenuItem>
                )
              })
            : [
                <MenuItem key={"sim"} value="sim">
                  Sim
                </MenuItem>,
                <MenuItem key={"nao"} value="nao">
                  Não
                </MenuItem>,
              ]}
        </Select>
      </FormControl>
    </ListItem>
  )
}

const ComponentDois = () => {
  // const [docs, setDocs] = useState<ComplexDocs>();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      padding={"0.3rem"}
      width={"20%"}
    >
      <Box display={"flex"} alignItems={"center"} gap={"0.7rem"}>
        <Avatar>H</Avatar>
        <Typography fontSize={"1.2rem"}>Cadastro</Typography>
      </Box>
      <List sx={{ width: "100%" }}>
        {Object.keys(documents).map((doc: string) => {
          return (
            <DocumentOptions
              name={doc}
              optionList={documents[doc].optionList}
            />
          )
        })}
      </List>
    </Box>
  )
}

export default ComponentDois
