export default function Card(props) {
    const { name, review, avatar, id } = props;
    return (
        <div className='Card' id={id}>
            {avatar}
            <h4 className='heading--3'>{name}</h4>
            <p className='para'>{review}</p>
        </div>
    )
}