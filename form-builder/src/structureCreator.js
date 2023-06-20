import { newAllQuestionKeyCombinationArray } from "./keyCreator";
// let emptyKeyArray = ["system_complying","standard_equivalent","firm_independent","firm_having",];
function StructureCreator({
  col1,
  col2,
  passFail,
  ynna,
  inpTxt,
  txt,
  num,
  keyCreator,
}) {
  keyCreator(col2);
  console.log({ col1, col2, passFail, ynna, inpTxt, txt });

  const structureHTML = `
<div  class="acceptance_significant_row">
          <div class="acceptance_significant_inner"> 
              <div class="acceptance_block">
                  <!-- <h3 class="mb-2">col2 items h</h3> -->
                  <div class="acceptance_inner">
                      <p>${col2}</p>
                  </div>
              </div>

              ${
                inpTxt
                  ? `<div class="significant_block">
                <div class="significant_inner">
                  <input class="w-md ors-form-input" type="text" id="${
                    newAllQuestionKeyCombinationArray[num - 1]
                  }" name="${newAllQuestionKeyCombinationArray[num - 1]}"
                    placeholder="${txt}"
                    data-bind="value:vm.formData.${
                      newAllQuestionKeyCombinationArray[num - 1]
                    }, attr:{readonly:vm.isReadOnlyField('${
                      newAllQuestionKeyCombinationArray[num - 1]
                    }')}">
                </div>
              </div>`
                  : `<div class="significant_block">
                  <div class="significant_inner">
                      <div class="main-radio" data-fieldtype="radio-group"
                          data-bind="foreach:{data:[{id:'passed',label:'Passed'},{id:'failed',label:'Failed'}],as:'option'}">
                          <div class="radio-common" data-bind="css:{'selected':vm.formData.${
                            newAllQuestionKeyCombinationArray[num - 1]
                          }()===option.id}">
                              <input type="radio" id="${
                                newAllQuestionKeyCombinationArray[num - 1]
                              }-passed" name="${
                      newAllQuestionKeyCombinationArray[num - 1]
                    }"
                                  data-bind="checkedValue:option.id,checked:vm.formData.${
                                    newAllQuestionKeyCombinationArray[num - 1]
                                  }, attr:{id:'${
                      newAllQuestionKeyCombinationArray[num - 1]
                    }'+'-'+option.id,disabled:vm.isReadOnlyField('${
                      newAllQuestionKeyCombinationArray[num - 1]
                    }')}" />
                              <label data-bind="text:option.label, attr:{for:'${
                                newAllQuestionKeyCombinationArray[num - 1]
                              }'+'-'+option.id}"></label>
                          </div>
                      </div>
                  </div>
              </div>`
              }
          </div>
      </div>  
`;

  return (
    <>
      {structureHTML} <br />
    </>
  );
}
export default StructureCreator;
