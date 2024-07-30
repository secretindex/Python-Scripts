import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react"
import { ComplexDocsEssentials } from "../utils/docsInterface"

const documentsContext: ComplexDocsEssentials = {
  foto: {
    required: true,
    present: false,
  },
  id: {
    required: true,
    present: false,
    options: undefined,
  },
  residencia: {
    required: true,
    present: false,
    options: undefined,
  },
  estadoCivil: {
    required: true,
    present: false,
    options: undefined,
  },
  contracheque: {
    required: true,
    present: false,
  },
  posse: {
    required: true,
    present: false,
  },
  veracidade: {
    required: true,
    present: false,
  },
  comprovanteEstado: {
    required: true,
    present: false,
  },
  depId: {
    required: true,
    present: false,
    options: undefined,
  },
  declaracaoRes: {
    required: false,
    present: false,
    options: undefined,
  },
}

interface SecondCheckboxContentType {
  docs: ComplexDocsEssentials
  setDocs: Dispatch<SetStateAction<ComplexDocsEssentials>>
}

const SecondCheckboxContext = createContext<
  SecondCheckboxContentType | undefined
>(undefined)

interface ContextProps {
  children: ReactNode
}

const SecondCheckboxContextProvider: React.FC<ContextProps> = ({
  children,
}) => {
  const [docs, setDocs] = useState<ComplexDocsEssentials>(documentsContext)
  return (
    <SecondCheckboxContext.Provider value={{ docs, setDocs }}>
      {children}
    </SecondCheckboxContext.Provider>
  )
}

export { SecondCheckboxContextProvider, SecondCheckboxContext }
