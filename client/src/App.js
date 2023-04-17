import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <div className="h-screen ">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
