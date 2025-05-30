//vai ser dividido entre: IMC: 00 e Classificacao: XXXXXXXX
const Result = ({iMC, calculado, abaixoPeso, pesoNormal, sobrepeso, obeso}) => {
    const classificacaoIMC = () => {
        if(abaixoPeso){
            return 'Abaixo do Peso'
        } else if(pesoNormal){
            return 'Peso Normal'
        } else if(sobrepeso){
            return 'Sobrepeso'
        } else if(obeso){
            return 'Obeso'
        }
    }

    const textoClassificacao = () => {
        if(abaixoPeso){
            return 'Seu peso nao esta saudavel o bastante, tente fazer uma breve dieta de bulking ate conseguir chegar ao peso ideal, quanto mais longe do IMC 18.5 voce estiver, mais deve durar sua dieta.'
        } else if(pesoNormal){
            return 'Seu peso esta na faixa ideal para a sua altura, mantenha uma dieta de manutencao e treinos regulares que voce certamente ficara saudavel'
        } else if(sobrepeso){
            return 'Seu peso esta um pouco acima do padrao, uma breve dieta de cutting e treinos regulares provavelmente te levarao ao seu peso ideal'
        } else if(obeso){
            return 'Seu peso esta longe do saudavel, eh recomendado visitar um nutricionista ou um medico para acompanhar seu tratamento, uma mera dieta de cutting com treinos regulares pode nao ser o bastante para o seu caso.'
        }
    }

    return (
        <>
        <h2>O seu resultado eh: </h2>
        {calculado?(
            <>
                <h3>sua classificacao eh:{classificacaoIMC()}</h3>
                <h4>Seu IMC eh: {iMC}</h4>
                <p>{textoClassificacao()}</p>
            </>
        ) : (
            <>
                <h3>Ainda precisa ser calculado</h3>
            </>
        )}
        </>
    )
}

export default Result;