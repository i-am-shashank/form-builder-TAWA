import Formbuild from "./formbuild";
import DataCreator from "./dataCreator";
import { useState } from "react";
import Footer from "./footer";
import "./dataCreator.css";

function App() {
  const [showHTML, setShowHTML] = useState(false);
  const [header, setHeader] = useState("");
  const [titleCol1, setTitleCol1] = useState("");
  const [titleCol2, setTitleCol2] = useState("");
  const [titleCol3, setTitleCol3] = useState("");
  return (
    <div className="App">
      <div className="align-center color">
        <h2>HTML CODE STRUCTURE BUILDER</h2>
      </div>
      <DataCreator
        header={header}
        setHeader={setHeader}
        titleCol1={titleCol1}
        titleCol2={titleCol2}
        titleCol3={titleCol3}
        setTitleCol1={setTitleCol1}
        setTitleCol2={setTitleCol2}
        setTitleCol3={setTitleCol3}
      />
      <button
        className="p-10 border-none "
        onClick={() => setShowHTML((value) => !value)}
      >
        {showHTML ? "Hide" : "Show"} HTML Structure
      </button>
      {showHTML && (
        <Formbuild
          header={header}
          titleCol1={titleCol1}
          titleCol2={titleCol2}
          titleCol3={titleCol3}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
