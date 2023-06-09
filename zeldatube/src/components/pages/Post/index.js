import styles from './Post.module.css';

export default function Post({ nome, texto, img }) {
    return(
        <main className={styles.container}>
            <h1>{nome}</h1>
            <p>{texto}</p>
            <img src={img} alt={`Imagem do jogo ${nome}`} />
        </main>
    )
}