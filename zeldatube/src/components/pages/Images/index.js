import { useEffect, useState } from 'react';
import ImageCard from './ImageCard';
import styles from './Images.module.css';

export default function Images() {

    const [images, setImages] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/images', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(resp => resp.json())
        .then(data => {
            setImages(data)
        })
        .catch(err => console.log(err))
    }, [setImages])

    return(
        <main className={styles.container}>
            <h1>Arte dos fãs</h1>

            <div className={styles.cards}>
                {images.map((image) => (
                   <ImageCard 
                        src={image.src}
                        alt={image.alt}
                        key={image.id}
                    /> 
                ))}
            </div>
        </main>
    )
}