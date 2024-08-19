// Type for valid and types for missing docs
type IDType = "id/v" | "id/10" | "id/n"
type ResidenceType = "cr/v" | "cr/60" | "dr/s" | "dr/n"
type CivilStateType = "s/s" | "s/n" | "c/s" | "c/n" | "un/s" | "un/n" | "dsvu/s" | "dsvu/n"
type DependentType = "dep/n" | ""

interface FinalText {
  foto: boolean
  id: IDType
  residencia: ResidenceType
  estadoCivil: CivilStateType
  contracheque: boolean
  posse: boolean
  veracidade: boolean
  comprovanteEstado: boolean
  depId: DependentType
}