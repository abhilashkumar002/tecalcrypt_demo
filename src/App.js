import "./App.css";
import Decoder from "./components/Decoder";

function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="main-container">
        <div className="grid-center">
          <span style={{ fontSize: "5vw", padding: "2vh" }}>Demo</span>
        </div>
        <div className="center-content-grid">
          <div className="grid-center">
            <img
              src={process.env.PUBLIC_URL + "/logo.png"}
              alt="Tecalcrypt logo"
              style={{ height: 200, width: 200 }}
            />
          </div>
          <Decoder />
        </div>
        <div className="grid-center">Tecalcrypt demo 2024-25</div>
      </div>
    </div>
  );
}

export default App;
