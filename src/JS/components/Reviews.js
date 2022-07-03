import Card from './Card';
import Btn from './Btn';
import review from './reviewsData';
export default function Reviews() {
    return (
        <div className='Reviews'>
            <h2 className='heading--2'>What they’ve said</h2>
            {review.map((r, i) => (
                <Card name={r.name} review={r.review} avatar={r.avatar} id={i} />
            ))}
            <form>
                {review.map((r, i) => (
                    <input type='radio' name='render' id={i} />
                ))}
            </form>
            <Btn text='Get Started' />
        </div>
    )
}