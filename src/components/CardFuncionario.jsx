
import styles from '../components/CardFuncionario.module.css'

function Funcionarios ({ nome, cargo, dataAdmissao, foto }) {

    return (
    <>
        <div className={styles.card}>
         <img className={styles["card-image"]} src={foto} />
         <h2 className={styles["card-title"]}>{nome}</h2>
         <p className={styles["card-text"]}>{cargo}</p>
         <p className={styles["card-text"]}>{dataAdmissao}</p>             
        </div>
    </>
  )
}

export default Funcionarios