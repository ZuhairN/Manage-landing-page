export default function Btn({ text, isWhite }) {
    return (
        <a className={isWhite ? 'Btn--white' : 'Btn'} href='./#'>
            {text}
        </a>
    )
}

