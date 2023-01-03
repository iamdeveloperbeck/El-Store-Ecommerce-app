import './App.css';
import Footer from './container/Footer';
import Navbar from './container/Navbar';
import Arrivals from './sections/Arrivals';
import Header from './sections/Header';
import Lookbook from './sections/Lookbook';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Arrivals />
      <Lookbook />
      <Footer />
    </div>
  );
}

export default App;