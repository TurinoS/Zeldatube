import GameCard from './GameCard';
import styles from './Games.module.css';
import { useEffect, useState } from 'react';

export default function Games() {

    const [infoGames, setInfoGames] = useState([])

    useEffect(() => {
        fetch('https://ginger-supreme-pantry.glitch.me/posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(resp => resp.json())
        .then(data => setInfoGames(data))
        .catch(err => console.log(err))
    })

    return(
        <section className={styles.container} id={'games'}>
            <h2>Todos os jogos da franquia</h2>

            <div className={styles.cards}>
                {infoGames.map((game) => (
                    <GameCard 
                        src={game.img} 
                        titulo={game.titulo} 
                        console={game.console} 
                        ano={game.ano} 
                        key={game.id}
                        linkExterno={game.linkExterno}
                    />
                ))}
            </div>
        </section>
    )
}