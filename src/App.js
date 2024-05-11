import './App.css';
import Decoder from './components/Decoder';

function App() {


  return (
    <div style={{ minHeight: "100vh" }}>
      <div className='main-container'>
        <div className='grid-center'><span style={{ fontSize: "5vw", padding: "2vh" }}>Tecalcrypt Demo</span></div>
        <div className='center-content-grid'>
          <div className='grid-center'>left</div>
          <Decoder />

          
        </div>
        <div className='grid-center'>Tecalcrypt demo 2024-25</div>
      </div>
    </div>
  );
}

export default App;
