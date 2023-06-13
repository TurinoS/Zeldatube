import styles from './History.module.css';
import logo from '../../../../assets/logo_original.png'

export default function History() {
    return(
        <section className={styles.container}>
            <h2>História da franquia</h2>

            <p>The Legend of Zelda é uma série de vídeo games de ação-aventura 
                de alta fantasia desenvolvida e publicada pela Nintendo e criada 
                pelo famoso designer de games Shigeru Miyamoto. O jogo consiste 
                de uma mistura de ação, aventura, resolver puzzles e RPG, com 
                ocasionais elementos de plataforma, furtividade, e elementos de 
                corrida. A série gira em torno de Link, o único personagem 
                jogável e o herói. Link geralmente recebe a tarefa de resgatar a 
                Princesa Zelda e o cenário mais comum da série, Hyrule, de 
                Ganondorf, o qual é o vilão primário da série. No entanto, 
                outros cenários e antagonistas apareceram ao longo dos jogos, 
                com Vaati tendo se tornado o antagonista secundário da série. 
                A história geralmente envolve uma relíquia conhecida como a 
                Triforce, um conjunto de três triângulos dourados de onipotência. 
                O herói de cada jogo nem sempre é a mesma encarnação de Link, 
                embora os mesmo Link algumas vezes apareça em vários jogos.</p> 
                
            <img src={logo} alt='Logo original da série desenvolvida para o primeiro jogo' />

                <p>A série The Legend of Zelda é amplamente considerada uma das 
                séries de vídeo games mais influentes na história. A série é 
                composta de dezoito jogos oficiais em várias plataformas, 
                bem como vários spin-offs. A maioria dos jogos da série foram 
                recebidos com elogios da crítica e sucesso comercial. Em 2021, 
                a série completou 35 anos.</p>

        </section>
    )
}