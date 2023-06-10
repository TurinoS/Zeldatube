import VideoCard from 'components/pages/Videos/VideoCard';
import styles from './Videos.module.css';
import { useEffect, useState } from 'react';

export default function Videos() {

    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/videos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(resp => resp.json())
        .then(data => {
            setVideos(data)
        })
        .catch(err => console.log(err))
    }, [setVideos])

    function removeVideo(id) {
        fetch(`http://localhost:5000/videos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }

    return(
        <main className={styles.container}>
            <h1>Confira os vídeos e canais mais relevantes</h1>

            <div className={styles.cards}>
                {videos.map((data) => (
                    <>
                        <VideoCard 
                            linkDoVideo={data.linkDoVideo}
                            titulo={data.titulo}
                            linkDoCanal={data.linkDoCanal}
                            nomeDoCanal={data.nomeDoCanal}
                            key={data.id}
                        />
                        <button onClick={() => removeVideo(data.id)}>x</button>
                    </>
                ))}
                
            </div>
        </main>
    )
}