import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <NavBar />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img
            className="img-test"
            src="https://reactjs.org/logo-og.png"
            alt="Bootstrap"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="container">
            <h1 className="aboutme-header"> About Me </h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="container">
            <h1 className="aboutme-desc"> ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
