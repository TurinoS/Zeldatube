import styles from './Favorites.module.css';

export default function Favorites() {
    return(
        <main className={styles.container}>
            <section className={styles.videosFavoritos}>
                <h2>Seus vídeos favoritos</h2>
            </section>

            <section className={styles.imagensFavoritas}>
                <h2>Suas imagens favoritas</h2>
            </section>
        </main>
    )
}