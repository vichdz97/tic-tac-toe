import { useState } from 'react';
import './App.css'
import Block from './components/Block'

function App() {

    const [ grid, setGrid ] = useState(Array(9).fill(''));
    const [ iPlayed, setiPlayed ] = useState(true);

    const refresh = () => {
        window.location.reload();
    }

    const playXorO = (index: number) => {
        if (grid[index]) return;

        let newGrid = grid.slice();
        iPlayed ? newGrid[index] = 'X' : newGrid[index] = 'O';
        setGrid(newGrid);
        setiPlayed(!iPlayed);
    }

    return (
        <div className='d-flex flex-column justify-content-center align-items-center mx-1'>
            <h1>Tic-Tac-Toe</h1>
            <button className='btn btn-light border border-dark my-2' onClick={refresh}>Reset</button>
            <div className="row row-cols-3 w-50">
                <Block value={grid[0]} onClick={() => playXorO(0)} />
                <Block value={grid[1]} onClick={() => playXorO(1)} />
                <Block value={grid[2]} onClick={() => playXorO(2)} />
                <Block value={grid[3]} onClick={() => playXorO(3)} />
                <Block value={grid[4]} onClick={() => playXorO(4)} />
                <Block value={grid[5]} onClick={() => playXorO(5)} />
                <Block value={grid[6]} onClick={() => playXorO(6)} />
                <Block value={grid[7]} onClick={() => playXorO(7)} />
                <Block value={grid[8]} onClick={() => playXorO(8)} />
            </div>
        </div>
    )
}

export default App
