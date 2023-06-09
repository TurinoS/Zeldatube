import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import triforce from '../../assets/triforce.png'

export default function Header() {
    return(
        <header className={styles.header}>
            <Link to='/'><img src={triforce} alt='Triforce' /></Link>
            <div>
                <Link to="/" >Página inicial</Link>
                <a href='/#games' >Todos os jogos</a>
                <Link to="/videos" >Vídeos</Link>
                <Link to="/images" >Imagens</Link>
                <Link to="/favorites" >Favoritos</Link>
            </div>
            <Link to="/adminPage" className={styles.admin}>Adicionar conteúdo</Link>
        </header>
    )
}