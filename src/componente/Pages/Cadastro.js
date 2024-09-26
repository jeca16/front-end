import styles from '../Css/cadastro.module.css'
import Header2 from '../Bases/Header2'
import imgFrelancer from '../img/freelancer.png'
import imgCliente from '../img/cliente.png'

function selecionar(){
    
}

function Cadastro() {
    return (
        <div>
            <Header2 />
            <div className={styles.tela}>
                <h1 className={styles.h1}>Cadastrar-se como um cliente ou como um freelancer?</h1>

                <div className={styles.escolhas}>
                    <button className={styles.escolha1} onClick={selecionar()}>
                        <div className={styles.papai}><div className={styles.bola}></div></div>
                        <div>
                            <img src={imgFrelancer}></img>
                            <p>Sou um cliente contratando para um projeto</p>
                        </div>

                    </button>

                    <button className={styles.escolha2} onClick={selecionar()}>
                        <div className={styles.papai}><div className={styles.bola}></div></div>
                        <div>
                            <img src={imgCliente}></img>
                            <p>Sou um freelancer procurando por um trabalho</p>
                        </div>

                    </button>

                </div>

                <button className={styles.botao}>
                    Criar uma conta
                </button>

            </div>
        </div>


    )
}

export default Cadastro