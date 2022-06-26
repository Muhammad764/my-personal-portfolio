import './App.css';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Navbar/Navbar';
import Projects from './Pages/Projects/Projects';

function App() {
  return (
    <div className="App bg-gradient-to-r from-slate-900 to-gray-900">
      <header className='App-header'>
      <Navbar></Navbar>
      <Home></Home>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
