import { useState } from 'react';
import './App.css'
import Block from './components/Block'

function App() {

    const [ grid, setGrid ] = useState(Array(9).fill(''));
    const [ myTurn, setMyTurn ] = useState(true);
    const [ status, setStatus ] = useState('');
    const [ winningBlocks, setWinningBlocks ] = useState(Array(9).fill(false));

    const refresh = () => {
        window.location.reload();
    }

    const playXorO = (index: number) => {
        if (grid[index] || gameOver(grid)) return;

        let newGrid = grid.slice();
        myTurn ? newGrid[index] = 'X' : newGrid[index] = 'O';
        gameOver(newGrid); // end game right when button is clicked
        setGrid(newGrid);
        setMyTurn(!myTurn);
    }

    const gameOver = (blocks: Array<string>) => {
        let winningLines = [
            // horizontal
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],

            // vertical
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],

            // diagonal
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < winningLines.length; i++) {
            let winningNumbers = winningLines[i]; // winningNumbers = [x, y, z]
            let x = winningNumbers[0];
            let y = winningNumbers[1];
            let z = winningNumbers[2];
            
            if (blocks[x] && blocks[x] == blocks[y] && blocks[x] == blocks[z]) {
                let winners = winningBlocks.slice();
                winners[x] = winners[y] = winners[z] = true;
                setWinningBlocks(winners);

                if (blocks[x].includes('X')) {
                    setStatus('Player 1 Wins!');
                }
                else if (blocks[x].includes('O')) {
                    setStatus('Player 2 Wins!');
                }
                return blocks[x]; // either X or O
            }
        }
        return '';
    }

    return (
        <div className='d-flex flex-column justify-content-center align-items-center m-1'>
            <img src='/tic-tac-toe.png' width='30' />
            <h1 className='mt-2'>Tic-Tac-Toe</h1>
            <button className='btn btn-light border border-dark my-2' onClick={refresh}>Reset</button>
            { status ? 
                <h5 className='text-success my-2'>{status}</h5> 
                :
                <h5 className={`${myTurn ? 'text-primary' : 'text-danger'} my-2`}>{`${myTurn ? 'Player 1' : 'Player 2'}'s turn`}</h5>
            }
            <div className="grid row row-cols-3 my-3">
                <Block value={grid[0]} onClick={() => playXorO(0)} changeBackground={winningBlocks[0]} />
                <Block value={grid[1]} onClick={() => playXorO(1)} changeBackground={winningBlocks[1]} />
                <Block value={grid[2]} onClick={() => playXorO(2)} changeBackground={winningBlocks[2]} />
                <Block value={grid[3]} onClick={() => playXorO(3)} changeBackground={winningBlocks[3]} />
                <Block value={grid[4]} onClick={() => playXorO(4)} changeBackground={winningBlocks[4]} />
                <Block value={grid[5]} onClick={() => playXorO(5)} changeBackground={winningBlocks[5]} />
                <Block value={grid[6]} onClick={() => playXorO(6)} changeBackground={winningBlocks[6]} />
                <Block value={grid[7]} onClick={() => playXorO(7)} changeBackground={winningBlocks[7]} />
                <Block value={grid[8]} onClick={() => playXorO(8)} changeBackground={winningBlocks[8]} />
            </div>
        </div>
    )
}

export default App
