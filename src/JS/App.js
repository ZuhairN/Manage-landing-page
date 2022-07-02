import '../SCSS/App.scss';
import Header from './components/Header';
import Illustraion from './components/Illustraion';
import Manage from './components/Manage';
import Card from './components/Card';
import Simplify from './components/Simplify';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Illustraion />
      <Manage />
      <Card />
      <Simplify />
      <Footer />
    </div>
  );
}

export default App;
