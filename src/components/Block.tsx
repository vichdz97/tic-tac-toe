import { useState } from 'react';
import '../App.css'

function Block() {

    const CIRCLE = 'src/assets/circle.png';
    const X = 'src/assets/x.png';
    const [ image, setImage ] = useState('');

    return (
        <div className={`block col p-0 m-0 d-flex justify-content-center align-items-center`} 
        onClick={() => setImage(CIRCLE)} 
        role={image ? '' : 'button'}>
            <img src={image} width='50' />
        </div>
    )
} 

export default Block