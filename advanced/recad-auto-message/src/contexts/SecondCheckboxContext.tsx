import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react"

import FinalTextDocuments from "../utils/endTextObject"

const documentsContext: FinalTextDocuments = {
  foto: false,
  id: "id/n",
  residencia:"cr/n",
  estadoCivil: "cns/n",
  contracheque: false,
  posse: false,
  veracidade: false,
  comprovanteEstado: false,
  depId: 'dep/n'
}

interface SecondCheckboxContentType {
  docs: FinalTextDocuments
  setDocs: Dispatch<SetStateAction<FinalTextDocuments>>
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
  const [docs, setDocs] = useState<FinalTextDocuments>(documentsContext)

  return (
    <SecondCheckboxContext.Provider value={{ docs, setDocs }}>
      {children}
    </SecondCheckboxContext.Provider>
  )
}

export { SecondCheckboxContextProvider, SecondCheckboxContext }
