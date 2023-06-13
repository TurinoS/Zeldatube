import styles from './Home.module.css';
import banner from '../../../assets/banner.png'
import History from './History';
import Character from './Character';
import Games from './Games';

export default function Home() {
    return(
        <main className={styles.container}>
            <img src={banner} alt='Todos os Links dos jogos The Lengend of Zelda'></img>
            <h1>Saiba tudo sobre Zelda</h1>
            
            <History />
            <Character />
            <Games />
        </main>
    )
}