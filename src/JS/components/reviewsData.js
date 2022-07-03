import Anisha from '../../images/avatar-anisha.png';
import Ali from '../../images/avatar-ali.png';
import Richard from '../../images/avatar-richard.png';
import Shanai from '../../images/avatar-shanai.png';

const data = [
  {
    name: 'Anisha Li',
    review: '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”',
    avatar: <img className='Card__avatar' src={Anisha} alt='Anisha' />
  },
  {
    name: 'Ali Bravo',
    review: '“We have been able to cancel so many other subscriptions since using Manage.There is no more cross - channel confusion and everyone is much more focused.”',
    avatar: <img className='Card__avatar' src={Ali} alt='Ali' />
  },
  {
    name: 'Richard Watts',
    review: '“Manage allows us to provide structure and process.It keeps us organized and focused.I can’t stop recommending them to everyone I talk to!”',
    avatar: <img className='Card__avatar' src={Richard} alt='Richard' />
  },
  {
    name: 'Shanai Gough',
    review: '“Their software allows us to track, manage and collaborate on our projects from anywhere.It keeps the whole team in -sync without being intrusive.”',
    avatar: <img className='Card__avatar' src={Shanai} alt='Shanai' />
  }
]

export default data;