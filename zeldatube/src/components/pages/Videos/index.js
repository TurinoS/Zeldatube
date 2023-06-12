import { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import styles from './Videos.module.css';

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
        const newVideoArray = videos.filter(video => video.id !== id);
        setVideos(newVideoArray);
    }
    
    return(
        <main className={styles.container}>
            <h1>Confira os vídeos e canais mais relevantes</h1>

            <div className={styles.cards}>
                {videos.map((video) => (
                    <>
                        <VideoCard 
                            linkDoVideo={video.linkDoVideo}
                            titulo={video.titulo}
                            linkDoCanal={video.linkDoCanal}
                            nomeDoCanal={video.nomeDoCanal}
                            key={video.id}
                        />
                        <button onClick={() => removeVideo(video.id)}>x</button>
                    </>
                ))}
                
            </div>
        </main>
    )
}