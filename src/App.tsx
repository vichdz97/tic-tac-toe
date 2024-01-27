import './App.css'
import Block from './components/Block'

function App() {

    const createGrid = () => {
        let grid: Array<any> = [];
        for (let i = 1; i <= 9; i++) {
            grid.push(<Block key={i} />);
        }
        return grid;
    }

    return (
        <div className='d-flex flex-column justify-content-center align-items-center mx-1'>
            <h1>Tic-Tac-Toe</h1>
            <div className="row row-cols-3 w-50">
                { createGrid() }
            </div>
        </div>
    )
}

export default App
