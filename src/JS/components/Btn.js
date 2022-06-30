export default function Btn(props) {
    const { text, isWhite } = props;
    const btn = isWhite ? 'Btn--white' : 'Btn';
    return (
        <a className={btn} href='./'>
            {text}
        </a>
    )
}