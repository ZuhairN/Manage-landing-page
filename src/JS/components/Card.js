import avatar from '../../images/avatar-ali.png';

export default function Card() {
    return (
        <div className='Card'>
            <img className='Card__avatar' src={avatar} alt='avatar' />
            <h4 className='heading--3'>Ali Bravo</h4>
            <p className='para'>“We have been able to cancel so many other subscriptions since using
                Manage. There is no more cross-channel confusion and everyone is much
                more focused.”</p>
        </div>
    )
}