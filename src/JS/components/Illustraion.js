import Btn from './Btn';
import illustration from '../../images/illustration-intro.svg';

export default function Illustraion() {
    return (
        <div className="Illustration">
            <div className='Illustration__content'>
                <div className='Illustration__intro'>
                    <h1 className='heading--1'>
                        Bring everyone together to build better products.
                    </h1>
                    <p className='para'>
                        Manage makes it simple for software teams to plan day-to-day
                        tasks while keeping the larger team goals in view.
                    </p>
                </div>
                <Btn text='Get Started' />
            </div>
            <div><img className='Illustraion__img' src={illustration} alt='illustraion' /></div>
        </div>
    )
}