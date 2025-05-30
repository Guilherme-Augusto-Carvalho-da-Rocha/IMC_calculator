import styles from './Cabecalho.module.css'

const Cabecalho = () => {
    return (
        <header className={styles.header}>
        <h1 className={styles.title}>Calculadora de IMC</h1>
        <p>O IMC (Indice de Massa Corporal) é utilizado para medir o quao saudavel é o seu peso em relacao a sua altura!</p>
        </header>
    )
}

export default Cabecalho;