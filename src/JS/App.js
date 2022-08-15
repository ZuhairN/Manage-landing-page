import Header from './components/Header';
import Illustraion from './components/Illustraion';
import Manage from './components/Manage';
import Reviews from './components/Reviews';
import Simplify from './components/Simplify';
import Footer from './components/Footer';
import '../SCSS/App.scss';

export default function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Illustraion />
        <Manage />
        <Reviews />
        <Simplify />
      </main>
      <Footer />
    </div>
  );
}