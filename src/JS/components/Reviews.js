import Card from './Card';
import Btn from './Btn';
import review from './reviewsData';
export default function Reviews() {
    function activeCard(e) {
        const cards = document.querySelectorAll('.Card');
        if (e.target.tagName === 'INPUT') {
            for (let c of cards) {
                c.classList.remove('active');
            };
            cards[e.target.value].classList.add('active');
        }
    }
    return (
        <div className='Reviews'>
            <h2 className='heading--2'>What they’ve said</h2>
            <div className='Reviews__container'>{review.map((r, i) => (
                <Card isActive={i === 1 ? 'Card active' : 'Card'} name={r.name} review={r.review} avatar={r.avatar} id={i} />
            ))}
            </div>
            <form className='Reviews__form' onClick={activeCard}>
                {review.map((r, i) => (
                    < input className='Reviews__input' type='radio' name='render' value={i} defaultChecked={i === 1 ? 'checked' : ''} />
                ))}
            </form>
            <Btn text='Get Started' />
        </div >
    )
}
