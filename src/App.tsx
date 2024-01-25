import { useState } from 'react';
import './App.css'
import Block from './components/Block'


function App() {

    const [ input, setInput ] = useState(0);

    const createGrid = () => {
        let grid = [];
        for (let i = 1; i <=9; i++) {
            grid.push(<Block number={i} onClick={() => setInput(i)} />);
        }
        return grid;
    }

    return (
        <div className='d-flex flex-column justify-content-center align-items-center '>
            <div className="row row-cols-3">
                { createGrid() }
            </div>
            <p className='text-center'>Input: {input}</p>
        </div>
    )
}

export default App
