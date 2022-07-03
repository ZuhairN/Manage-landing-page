import '../SCSS/App.scss';
import Header from './components/Header';
import Illustraion from './components/Illustraion';
import Manage from './components/Manage';
import Reviews from './components/Reviews';
import Simplify from './components/Simplify';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Illustraion />
      <Manage />
      <Reviews />
      <Simplify />
      <Footer />
    </div>
  );
}

export default App;
