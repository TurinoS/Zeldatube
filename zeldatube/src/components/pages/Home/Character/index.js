import styles from './Character.module.css';
import link from '../../../../assets/link_totk.png'

export default function Character() {
    return(
        <section className={styles.container}>
            <h2>Natureza do protagonista</h2>

            <p>Link é descrito como humilde, mas corajoso, atributos apropriados 
                para o portador da Triforce da Coragem. Algumas vezes o Link irá 
                ostentar um título especial, como "Herói do Tempo", "Herói dos 
                Ventos", "Hero Escolhido pelos Deuses", ou "Acordador dos Ventos". 
                Um Hyliano de orelha pontuda, ele é retratado como tendo entre 7 
                a 19 anos, dependendo do jogo. Link sempre usa uma túnica verde, 
                uma camiseta e um comprido e flexível gorro verde, ao menos parte 
                de cada aventura. Todas as encarnações de Link são canhotas, com 
                exceção até à data sendo a versão de Wii de Twilight Princess e 
                Skyward Sword em que Link é destro, devido ao "espelhamento" 
                usado para acomodar o esquema de controle com a mão direita, e 
                Skyward Sword sendo o primeiro jogo canônico onde ele é destro. 
                O efeito de espelhamento em Twilight Princess inverte o layout do 
                jogo inteiro da sua contraparte do GameCube.</p>

            <img src={link} alt='Link em Tears of the Kingdom' />

            <p>O Link não costuma falar, e produz apenas grunhidos, gritos, 
                e outros sons. Uma exceção a isso é The Wind Waker. Na 
                versão Americana, a frase audível "Vamos lá!" é usada em 
                masmorras para chamar estátuas especiais ou outros personagens 
                (Medli ou Makar) para seguirem o Link. Em jogos anteriores, 
                como A Link to the Past e Ocarina of Time, os jogadores podem 
                responder a perguntas por escolher opções de uma lista; nenhuma 
                dublagem acompanha as respostas de Link. Normalmente o personagem 
                usa expressões faciais para indicar seu humor; colocando ênfase em 
                particular nisso em The Wind Waker e Twilight Princess.</p>

            <p>Discutivelmente, Link "fala" duas linhas em The Adventure 
                of Link. Quando ele localiza um espelho debaixo de uma 
                mesa, o texto, "Eu encontrei um espelho debaixo da mesa" 
                aparece na tela. Mais tarde, se o Link examinar uma 
                lareira que ele pode entrar, a mensagem "Parece que eu 
                posso entrar na lareira" é exibida.</p>

            <p>Embora o nome aceito do personagem é Link, o jogador pode 
                nomeá-lo antes do início da maioria dos jogos, e os 
                personagens irão se dirigir a ele por esse nome no texto. 
                A razão para o silêncio é para que o jogador possam se 
                imaginar como o herói.</p>
        </section>
    )
}