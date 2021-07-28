import React from "react";

const TemplateItem = ({ templateArr, templateAction }: TemplateItemComp) => {
  return (
    <div>
      <div> id is {templateArr[0].id}</div>
      <button onClick={() => templateAction(1)}>Change id</button>
    </div>
  );
};

export default TemplateItem;
