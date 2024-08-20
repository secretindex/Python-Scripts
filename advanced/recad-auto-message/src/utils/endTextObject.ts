// Type for valid and types for missing docs
type IDValid = "id/v"
type IDInvalid = "id/10" | "id/n"

// Residence
type ResidenceValid = "cr/v" | "dr/s"
type ResidenceInvalid = "cr/60" | "dr/n" | "cr/n"

// Civil State
type CivilStatusInvalid = "cns/n" | "cerc/n" | "cav/n" | "un/n" | "dsvu/n"
type CivilStatusValid = "cns/s" | "cerc/s" | "cav/s" | "un/s" | "dsvu/s"

// Dependent
type DependentTypeInvalid = "deco/n" | "dp/n" | "tgc/n" | "dp/21" | "dep/id/n" | "dep/id/10" | "cnd/n"
type DependentTypeValid = "deco/s" | "dp/s" | "tgc/s" | "cnd/s" | "dep/n"

interface FinalTextDocuments {
  foto: boolean
  id: IDInvalid | IDValid
  residencia: ResidenceInvalid | ResidenceValid
  estadoCivil: CivilStatusInvalid | CivilStatusValid
  contracheque: boolean
  posse: boolean
  veracidade: boolean
  comprovanteEstado: boolean
  depId: DependentTypeInvalid | DependentTypeValid
}

export default FinalTextDocuments