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
            <img className = "img-test" src="https://reactjs.org/logo-og.png" alt="Bootstrap" />
        </div>
      </div>
      <div className="row">
        <div className="col">
            <h1>
              Hello WOrl
            </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
