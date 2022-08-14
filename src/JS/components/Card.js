import Anisha from '../../images/avatar-anisha.png';
import Ali from '../../images/avatar-ali.png';
import Richard from '../../images/avatar-richard.png';
import Shanai from '../../images/avatar-shanai.png';

const avatar = [Anisha, Ali, Richard, Shanai];

export default function Card({ active, name, review, id }) {
    return (
        <div className={active ? 'Card active' : 'Card'}>
            <img className='Card__avatar' src={avatar[id]} alt={name} />
            <h4 className='heading--3'>{name}</h4>
            <p className='para'>{review}</p>
        </div>
    )
}