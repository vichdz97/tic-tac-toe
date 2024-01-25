import '../App.css'

interface Props {
    number: number;
    onClick: () => void;
}

function Block({ number, onClick }: Props) {

    return (
        <div className={`block col border border-danger`} onClick={onClick} role="button">{number}</div>
    )
} 

export default Block