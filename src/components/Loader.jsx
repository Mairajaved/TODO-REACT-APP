import "../style/loader.css";

function Loader() {
  return (
    <>
      <div className="loader-container">
        <div className="pyramid-loader">
          <div className="wrapper">
            <span className="side side1" />
            <span className="side side2" />
            <span className="side side3" />
            <span className="side side4" />
            <span className="shadow" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Loader;
