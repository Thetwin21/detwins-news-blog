import './App.scss';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import NewsContainer from './Component/NewsContainer';
import SlideContainer from './Component/SlideContainer';

function App() {
 
  return (
    <div className="container">
      <Navbar />
      <SlideContainer />
      <NewsContainer />
      <Footer />

    </div>
  );
}

export default App;
