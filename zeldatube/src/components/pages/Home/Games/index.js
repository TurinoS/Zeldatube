import GameCard from './GameCard';
import styles from './Games.module.css';
import card_totk from '../../../../assets/card_totk.png'

export default function Games() {
    return(
        <section className={styles.container}>
            <h2>Todos os jogos da franquia</h2>

            <div className={styles.cards}>
                <GameCard src={card_totk} titulo='Tears of the Kingdom' ano='2023' />
                <GameCard src={card_totk} titulo='Tears of the Kingdom' ano='2023' />
                <GameCard src={card_totk} titulo='Tears of the Kingdom' ano='2023' />
                <GameCard src={card_totk} titulo='Tears of the Kingdom' ano='2023' />
            </div>
        </section>
    )
}