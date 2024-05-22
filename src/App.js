import "./App.css";
import Decoder from "./components/Decoder";
import Information from "./components/Information";

function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="main-container">
        <div className="grid-center">
          <span style={{ fontSize: "5vw", padding: "2vh" }}>Demo</span>
        </div>
        <div className="center-content-grid">
          <Information />
          <Decoder />
        </div>
        <div className="grid-center footer">
          <div className="align-text-center">
            <p>Build by Saurav Goswami & Abhilash Kumar</p>
            <p>Tecalcrypt 2024-25</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
