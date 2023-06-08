import ImageCard from './ImageCard';
import styles from './Images.module.css';

export default function Images({ src, alt }) {
    return(
        <main className={styles.container}>
            <h1>Arte dos fãs</h1>

            <div className={styles.cards}>
                <ImageCard 
                    src='https://cdn.ome.lt/rRlzU660xGRLy_Nozat5l3PCZRc=/1200x630/smart/extras/conteudos/zelda_tears_of_the_kingdom_official_artwork_link_j8kqNqZ.jpg' 
                    alt='imagem zelda' 
                    linkDaImagem='https://cdn.ome.lt/rRlzU660xGRLy_Nozat5l3PCZRc=/1200x630/smart/extras/conteudos/zelda_tears_of_the_kingdom_official_artwork_link_j8kqNqZ.jpg'
                />
                <ImageCard 
                    src='https://t.ctcdn.com.br/t9j-HgGWlA7GHh1lEkS12cbW9YQ=/1400x788/smart/i617416.png' 
                    alt='imagem zelda' 
                    linkDaImagem='https://t.ctcdn.com.br/t9j-HgGWlA7GHh1lEkS12cbW9YQ=/1400x788/smart/i617416.png'
                />
                <ImageCard 
                    src='https://cdn.ome.lt/rRlzU660xGRLy_Nozat5l3PCZRc=/1200x630/smart/extras/conteudos/zelda_tears_of_the_kingdom_official_artwork_link_j8kqNqZ.jpg' 
                    alt='imagem zelda' 
                    linkDaImagem='https://cdn.ome.lt/rRlzU660xGRLy_Nozat5l3PCZRc=/1200x630/smart/extras/conteudos/zelda_tears_of_the_kingdom_official_artwork_link_j8kqNqZ.jpg'
                />
                <ImageCard 
                    src='https://t.ctcdn.com.br/t9j-HgGWlA7GHh1lEkS12cbW9YQ=/1400x788/smart/i617416.png' 
                    alt='imagem zelda' 
                    linkDaImagem='https://t.ctcdn.com.br/t9j-HgGWlA7GHh1lEkS12cbW9YQ=/1400x788/smart/i617416.png'
                />
                <ImageCard 
                    src='https://cdn.ome.lt/rRlzU660xGRLy_Nozat5l3PCZRc=/1200x630/smart/extras/conteudos/zelda_tears_of_the_kingdom_official_artwork_link_j8kqNqZ.jpg' 
                    alt='imagem zelda' 
                    linkDaImagem='https://cdn.ome.lt/rRlzU660xGRLy_Nozat5l3PCZRc=/1200x630/smart/extras/conteudos/zelda_tears_of_the_kingdom_official_artwork_link_j8kqNqZ.jpg'
                />
                <ImageCard 
                    src='https://t.ctcdn.com.br/t9j-HgGWlA7GHh1lEkS12cbW9YQ=/1400x788/smart/i617416.png' 
                    alt='imagem zelda' 
                    linkDaImagem='https://t.ctcdn.com.br/t9j-HgGWlA7GHh1lEkS12cbW9YQ=/1400x788/smart/i617416.png'
                />
            </div>
        </main>
    )
}