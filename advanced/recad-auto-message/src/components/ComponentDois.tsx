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
  Button,
} from "@mui/material"

import { ComplexDocs } from "../utils/docsInterface"
import React, { BaseSyntheticEvent, useContext, useState } from "react"
import { SecondCheckboxContext } from "../contexts/SecondCheckboxContext"
import EndText from "../utils/endTextGen"

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
    required: false,
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
  keyName: string
  optionList?: Array<string>
}

const DocumentOptions: React.FC<DocumentosOptionsProps> = ({
  name,
  keyName,
  optionList,
}) => {
  const globalDocs = useContext(SecondCheckboxContext)
  const [field, setField] = useState<string>("")

  const handleChange = (e: SelectChangeEvent) => {
    const nameVal = e.target

    setField(e.target.value)

    console.log(keyName)

    // Error any type
    const endObject = {
      required: nameVal.name === "depId" && optionList![optionList!.indexOf(e.target.value)] === 'dep' ? true : documents[nameVal.name].required,
      present: e.target.value ? true : false,
      options: optionList
        ? optionList[optionList.indexOf(e.target.value)]
        : undefined,
    }

    if (!optionList) delete endObject.options

    globalDocs?.setDocs({
      ...globalDocs.docs,
      [nameVal.name]: endObject,
    })

    console.log(globalDocs!.docs)
  }

  return (
    <ListItem sx={{ width: "100%" }}>
      <FormControl variant="outlined" fullWidth>
        <InputLabel id="field-name">{name}</InputLabel>
        <Select
          labelId="field-name"
          label={name}
          value={field}
          name={keyName}
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
  const handleClick = (e: BaseSyntheticEvent) => {
    const globalDocs = useContext(SecondCheckboxContext)
    const endTextTwo = new EndText(globalDocs?.docs)
    console.log(endTextTwo.returnFullText())

    console.log(e)
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      padding={"0.3rem"}
      width={"40%"}
    >
      <Box display={"flex"} alignItems={"center"} gap={"0.7rem"}>
        <Avatar>H</Avatar>
        <Typography fontSize={"1.2rem"}>Cadastro</Typography>
      </Box>
      <List sx={{ width: "100%" }}>
        {Object.keys(documents).map((doc: string) => {
          return (
            <DocumentOptions
              key={doc}
              name={documents[doc].name}
              keyName={doc}
              optionList={documents[doc].optionList}
            />
          )
        })}
      </List>
      <Box sx={{ width: "100%", padding: "0 1rem" }}>
        <Button variant="contained" fullWidth onClick={handleClick}>
          Verify
        </Button>
      </Box>
    </Box>
  )
}

export default ComponentDois
