export default function Card(props) {
    const { isActive, name, review, avatar, id } = props;
    return (
        <div className={isActive} id={id}>
            {avatar}
            <h4 className='heading--3'>{name}</h4>
            <p className='para'>{review}</p>
        </div>
    )
}