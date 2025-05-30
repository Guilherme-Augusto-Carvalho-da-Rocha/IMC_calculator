import { useState } from "react";
import { IMaskInput } from 'react-imask';


const Calculator = ({setIMC, setAbaixoPeso, setPesoNormal, setSobrepeso, setObeso, setCalculado}) => {
    const [medidaMetrica, setMedidaMetrica] = useState(true);
    const [pesoMetrico, setPesoMetrico] = useState();
    const [alturaMetrica, setAlturaMetrica] = useState();
    const [pesoImperial, setPesoImperial] = useState();
    const [alturaImperial, setAlturaImperial] = useState("");
    const [alturaEmPolegadas, setAlturaEmPolegadas] = useState(null);

    const feetEPolegadasParaPolegadas = () => {
        const [alturaPes, alturaPolegadas] = alturaImperial.split("'").map(Number);
        const alturaTotal = (alturaPes * 12) + alturaPolegadas;
        setAlturaEmPolegadas(alturaTotal);
}

    const calculaIMC = (e) =>{
        e.preventDefault();
        setCalculado(false)
        let valorIMCMetrico;
        let valorIMCImperial;
        if(medidaMetrica){
            valorIMCMetrico = pesoMetrico / (alturaMetrica ** 2)
            setIMC(valorIMCMetrico)
        } else if(!medidaMetrica) { //IMC imperial
            const [pes, polegadas] = alturaImperial.split("'").map(Number);
            if (polegadas > 11) {
                alert("O número de polegadas não pode ser maior que 11");
                return;
            }
            feetEPolegadasParaPolegadas();
            valorIMCImperial = (pesoImperial*703) / (alturaEmPolegadas**2);
            setIMC(valorIMCImperial)
        }
        if(valorIMCMetrico < 18.5 || valorIMCImperial < 18.5){
                setAbaixoPeso(true)
                setPesoNormal(false)
                setSobrepeso(false)
                setObeso(false)
                setCalculado(true)
            } else if((valorIMCMetrico >=18.5 && valorIMCMetrico < 25) || (valorIMCImperial >=18.5 && valorIMCImperial < 25)){
                setAbaixoPeso(false)
                setPesoNormal(true)
                setSobrepeso(false)
                setObeso(false)
                setCalculado(true)
            } else if((valorIMCMetrico >= 25 && valorIMCMetrico < 30) || (valorIMCImperial >= 25 && valorIMCImperial < 30)) {
                setAbaixoPeso(false)
                setPesoNormal(false)
                setSobrepeso(true)
                setObeso(false)
                setCalculado(true)
            } else if(valorIMCMetrico >= 30 || valorIMCImperial >= 30){
                setAbaixoPeso(false)
                setPesoNormal(false)
                setSobrepeso(false)
                setObeso(true)
                setCalculado(true)
            }
    }

    return (
        <>
        <h1>Calculadora de IMC</h1>
        <p>O IMC (Indice de Massa Corporal) eh utilizado para medir o quao saudavel eh o seu peso em relacao a sua altura!</p>
        <button type="button" onClick={() => setMedidaMetrica(true)}>Metrica</button>
        <button type="button" onClick={() => setMedidaMetrica(false)}>Imperial</button>
        {medidaMetrica? (
        <form onSubmit={calculaIMC}>
            <label htmlFor="pesoMetrico">Seu peso:</label>
            <input type="number" id="pesoMetrico" onChange={(e) => setPesoMetrico(Number(e.target.value))} placeholder="0 kg"/>
            <label htmlFor="alturaMetrica">Sua altura:</label>
            <input type="number" id="alturaMetrica" step={0.01} onChange={(e) => setAlturaMetrica(Number(e.target.value))} placeholder="0.00 metros"/>
            <button type="submit">Calcular seu IMC</button>
        </form>
        ) : (
        <form onSubmit={calculaIMC}>
            <label htmlFor="pesoImperial">Seu peso:</label>
            <input type="number" id="pesoImperial" onChange={(e) => setPesoImperial(Number(e.target.value))} placeholder="0 lbs"/>
            <label htmlFor="alturaImperial">Sua altura:</label>
            <IMaskInput mask="0'00" onChange={(event) => setAlturaImperial(event.target.value)} placeholder="5'11" unmask={true} />
            <button type="submit">Calcular seu IMC</button>
        </form>
    )}
        </>
    )
}

export default Calculator;