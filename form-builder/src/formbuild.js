import React from "react";
import questionsArray from "./data";
import JsListCreator from "./JSListCreator";
import KeyListCreator from "./KeyListCreator";
import keyCreator, { newAllQuestionKeyCombinationArray } from "./keyCreator";
import StructureCreator from "./structureCreator";
import ApiListCreator from "./apiListCreator";
import "./dataCreator.css";

function Formbuild({ header, titleCol1, titleCol2, titleCol3 }) {
  return (
    <div>
      <div className="mb-8 mt-15 color">HTML STRUCTURE</div>
      {`<div class="section"><h2 class="complex_form_title">${
        header || "header"
      }</h2><div class="rows pt-2 pb-5"> <div class="col-12"><h3>${
        titleCol1 || "col1Header"
      }</h3>`}
      {questionsArray.map(
        (item, i) => `<p class="ors-form-label">${item.col1}</p>`
      )}
      {`</div></div>`}
      {`
      <div class="acceptance_significant_block">
      <div class="acceptance_significant_row">
          <div class="acceptance_significant_inner">
              <div class="acceptance_block text-center">
                <h3>${titleCol2 || "col2Header"}</h3>
              </div>
              <div class="significant_block text-center">
                <h3>${titleCol3 || "col13Header"}</h3>
              </div>
          </div>                                    
      </div>
      `}

      {questionsArray.map((item, i) => (
        <>
          <div className="border-grey mb-8 p-10">
            <StructureCreator
              key={i}
              num={i + 1}
              col1={item.col1}
              col2={item.col2}
              passFail={item.passFail}
              inpTxt={item.inpTxt}
              txt={item.txt}
              keyCreator={keyCreator}
            />
          </div>
        </>
      ))}
      {`
        </div>   
        <div class="rows">
            <div class="col-12">
                <div class="rows pt-2">
                    <label class="ors-form-label mb-1" for="comments_fittings_provisions_ladders">Comments/Observations</label>
                </div>
                <div class="rows">
                    <textarea class="textarea-text" name="comments_fittings_provisions_ladders" style="height: 29px"
                        data-bind="expandable:{min:1},value:vm.formData.comments_fittings_provisions_ladders,attr:{readonly:vm.isReadOnlyField('comments_fittings_provisions_ladders')}"></textarea>
                </div>
            </div>
        </div>
      </div>
      `}
      <div className="mb-8 mt-15">LIST OF KEYS FOR JAVASCRIPT FILE</div>
      <div className="border-grey p-10">
        <JsListCreator array={newAllQuestionKeyCombinationArray} />
      </div>
      {/* <div className="mb-8 mt-15">LIST OF KEYS FOR OUTPUT REPORT</div>
      <div
        className="border-grey p-10 mb-8"
        style={{ wordBreak: "break-word" }}
      >
        <KeyListCreator array={newAllQuestionKeyCombinationArray} />
      </div> 
      <div className="mb-8 mt-15">LIST OF KEYS FOR API MAPPING</div>

      <div
        className="border-grey p-10 mb-8"
        style={{ wordBreak: "break-word" }}
      >
        <ApiListCreator array={newAllQuestionKeyCombinationArray} />
      </div> */}
    </div>
  );
}

export default Formbuild;
