import { useState } from 'react';
import styles from './AdminPage.module.css';

export default function AdminPage(page) {

    const [newUrlImage, setNewUrlImage] = useState('')
    const [newAltImage, setNewAltImage] = useState('')
  
    const [newUrlVideo, setNewUrlVideo] = useState('')
    const [newTitleVideo, setNewTitleVideo] = useState('')
    const [newUrlCh, setNewUrlCh] = useState('')
    const [newNameCh, setNewNameCh] = useState('')

    function addImageToJson(e) {
        e.preventDefault()

        let newImage = {
            src: newUrlImage,
            alt: newAltImage
        }

        fetch(`http://localhost:5000/images`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newImage)
        })
    }

    function addVideoToJson(e) {
        e.preventDefault()

        let newVideo = {
            linkDoVideo: newUrlVideo,
            titulo: newTitleVideo,
            linkDoCanal: newUrlCh,
            nomeDoCanal: newNameCh,
        }

        fetch(`http://localhost:5000/videos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newVideo)
        })
    }

    return(
        <main className={styles.container}>
                <h2>Adicione uma imagem ao banco de dados</h2>
            <form onSubmit={addImageToJson}>
                <label htmlFor='enderecoImagem'>Endereço da imagem</label>
                <input onChange={(e) => setNewUrlImage(e.target.value)} type='text' name='enderecoImagem' id='enderecoImagem' />
                <label htmlFor='altImagem'>Descrição da imagem</label>
                <input onChange={(e) => setNewAltImage(e.target.value)} type='text' name='altImagem' id='altImagem' />
                <input className={styles.btn} type='submit' value='Enviar' />
            </form>

                <h2>Adicione um vídeo ao banco de dados</h2>
            <form onSubmit={addVideoToJson}>
                <label htmlFor='linkVideo'>Link do "incorporar" do vídeo</label>
                <input onChange={(e) => setNewUrlVideo(e.target.value)} type='text' name='linkVideo' id='linkVideo' />
                <label htmlFor='tituloVideo'>Título do vídeo</label>
                <input onChange={(e) => setNewTitleVideo(e.target.value)} type='text' name='tituloVideo' id='tituloVideo' />
                <label htmlFor='linkCanal'>URL do canal do youtube</label>
                <input onChange={(e) => setNewUrlCh(e.target.value)} type='text' name='linkCanal' id='linkCanal' />
                <label htmlFor='nomeCanal'>Nome do canal do youtube</label>
                <input onChange={(e) => setNewNameCh(e.target.value)} type='text' name='nomeCanal' id='nomeCanal' />
                <input className={styles.btn} type='submit' value='Enviar' />
            </form>
        </main>
    )
}