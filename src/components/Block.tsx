import '../App.css'

interface Props {
    value: string;
    onClick: () => void;
}

function Block({ value, onClick }: Props) {
    return (
        <div className={`block ${value ? 'blockFilled' : ''} col p-0 m-0 d-flex justify-content-center align-items-center`} onClick={onClick} role={value ? '' : 'button'}>
            <h1 className={value.includes('X') ? 'text-primary' : 'text-danger'}>{value}</h1>
        </div>
    )
} 

export default Block