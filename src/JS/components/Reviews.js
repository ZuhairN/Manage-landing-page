import { useState } from 'react';
import data from './reviewsData';
import Card from './Card';
import Btn from './Btn';


export default function Reviews() {
    const [reviews, setReviews] = useState(data);
    const handleChange = (id) => (
        setReviews(reviews.map(r => {
            if (r.id === id) return { ...r, active: true }
            return { ...r, active: false }
        })))

    return (
        <div className='Reviews'>
            <h2 className='heading--2'>What they’ve said</h2>
            <div className='Reviews__container'>{reviews.map(r => <Card key={r.id} {...r} />)}</div>
            <form className='Reviews__form'>
                {reviews.map(r => (
                    < input key={r.id} className='Reviews__input' type='radio' name='render' checked={r.active} onChange={() => handleChange(r.id)} />
                ))}
            </form>
            <Btn text='Get Started' />
        </div >
    )
}
