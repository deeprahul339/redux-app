
import './App.css';
import  Navbar from './components/Navbar';
import Shop from './components/Shop';

function App() {
   const name="Rahul"
  return (
    <>
    <Navbar/>
    <div className="container">
    <Shop name={name}/>
    </div>
    </>
  );
}

export default App;
