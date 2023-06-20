import React from "react";
import { useState } from "react";
import "./dataCreator.css";

function DataCreator({
  header,
  setHeader,
  titleCol1,
  titleCol2,
  titleCol3,
  setTitleCol1,
  setTitleCol2,
  setTitleCol3,
}) {
  const [questionList, setQuestionList] = useState([]);
  const [col1, setCol1] = useState("");
  const [col2, setCol2] = useState("");
  const [txt, setTxt] = useState("");
  const [passFail, setPassFail] = useState(false);
  const [inpTxt, setInpTxt] = useState(false);

  function deleteQuestionFunction() {
    const newArray = [...questionList];
    newArray.pop();
    setQuestionList(() => newArray);
  }
  return (
    <>
      <div className="border-grey p-30 mb-20">
        <input
          className="border-one p-3 mr-10 mb-8 br-10"
          style={{ width: "550px" }}
          placeholder="Header"
          value={header}
          onChange={(e) => setHeader(e.target.value)}
        />
        <br />
        <input
          className="border-one p-3 mr-10 mb-8 br-10"
          style={{ width: "550px" }}
          placeholder="column 1 title"
          value={titleCol1}
          onChange={(e) => setTitleCol1(e.target.value)}
        />
        <input
          className="border-one p-3 mr-10 mb-8 br-10"
          style={{ width: "550px" }}
          placeholder="column 2 title"
          value={titleCol2}
          onChange={(e) => setTitleCol2(e.target.value)}
        />
        <input
          className="border-one p-3 mr-10 mb-8 br-10"
          style={{ width: "550px" }}
          placeholder="column 3 title"
          value={titleCol3}
          onChange={(e) => setTitleCol3(e.target.value)}
        />

        <div className="flex-row">
          <input
            className="border-one p-3 mr-10 mb-8 br-10"
            style={{ width: "550px" }}
            placeholder="column 1 data"
            value={col1}
            onChange={(e) => setCol1(e.target.value)}
          />
          <input
            className="w-100 border-one p-3 mr-10 mb-8 br-10"
            style={{ width: "550px" }}
            placeholder="column 2 data"
            value={col2}
            onChange={(e) => setCol2(e.target.value)}
          />
          <div
            className="w-100 border-one p-3 mr-10 mb-8 br-10 flex-row flex-between"
            style={{ width: "350px" }}
          >
            <input
              type="checkbox"
              id="passed_failed"
              name="passed_failed"
              checked={passFail}
              onChange={(e) => setPassFail(e.target.checked)}
            />
            <label for="passed_failed"> Passed/Failed</label>
            <input
              type="checkbox"
              id="inp_tex"
              name="inp_tex"
              checked={inpTxt}
              onChange={(e) => setInpTxt(e.target.checked)}
            />
            <label for="inp_tex">input text</label>
          </div>
          {inpTxt && (
            <input
              className="w-100 border-one p-3 mr-10 mb-8 br-10 flex-row flex-between"
              placeholder="input text label"
              value={txt}
              onChange={(e) => setTxt(e.target.value)}
            />
          )}
        </div>
        <br />
        <br />
        <br />
        <button
          className="p-10 border-none mr-10"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setQuestionList([
              ...questionList,
              {
                col1: `"${col1}"`,
                col2: `"${col2}"`,
                passFail: `${passFail}`,
                inpTxt: `${inpTxt}`,
                txt: `"${txt}"`,
              },
            ]);
            setCol1("");
            setCol2("");
            setPassFail(false);
            setInpTxt(false);
            setTxt("");
          }}
        >
          Add Row
        </button>
        <button
          className="p-10 border-none mr-10"
          onClick={() => deleteQuestionFunction()}
          style={{ cursor: "pointer" }}
        >
          Delete Row
        </button>
        <br />
        <div className="mt-15">DATA STRUCTURE IN OBJECT FORMAT</div>
        <div className="border-grey p-30 mb-20">
          {questionList.map((item) => {
            return (
              <>
                {` {
            col1: ${item.col1},
            col2: ${item.col2},
            passFail: ${item.passFail},
            ynna: ${item.ynna},
            inpTxt: ${item.inpTxt},
            txt: ${item.txt},
            
        },`}
                <br />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default DataCreator;
