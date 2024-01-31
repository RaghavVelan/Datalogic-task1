
import './App.css';
import Footer from './components/Footer';
import LatestNews from './components/LatestNews';
import Newsroom from './components/Newsroom';
import Stories from './components/Stories';

function App() {
  return (
    <div className="App">
      <LatestNews />
      <Stories />
      <Newsroom />
      <Footer />
    </div>
  );
}

export default App;
