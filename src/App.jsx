import Calculator from "./components/Calculator"
import Result from "./components/Result"
import { useState } from "react"

//IMC = peso * pow(altura,2)
function App() {
  const [iMC, setIMC] = useState(0);
  const [calculado, setCalculado] = useState(false);
  const [abaixoPeso, setAbaixoPeso] = useState(false);
  const [pesoNormal, setPesoNormal] = useState(false);
  const [sobrepeso, setSobrepeso] = useState(false);
  const [obeso, setObeso] = useState(false);
  return(
    <>
    <Calculator setIMC={setIMC} setPesoNormal={setPesoNormal} setAbaixoPeso={setAbaixoPeso} setSobrepeso={setSobrepeso} 
    setObeso={setObeso} setCalculado={setCalculado}/>
    <Result iMC={iMC} calculado={calculado} abaixoPeso={abaixoPeso} obeso={obeso} pesoNormal={pesoNormal} sobrepeso={sobrepeso}/>
    </>
  )
}

export default App
