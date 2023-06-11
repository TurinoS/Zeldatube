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

    function removeImage(id) {
        fetch(`http://localhost:5000/images/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const newImageArray = images.filter(image => image.id !== id);
        setImages(newImageArray);
    }

    return(
        <main className={styles.container}>
            <h1>Arte dos fãs</h1>

            <div className={styles.cards}>
                {images.map((image) => (
                    <>
                        <ImageCard 
                            src={image.src}
                            alt={image.alt}
                            key={image.id}
                        />
                        <button onClick={() => removeImage(image.id)}>x</button>
                    </>
                ))}
            </div>
        </main>
    )
}