import React, { useState } from "react";


function PrincipalView() {
  const [num, setNum] = useState(0);

  const incNum = () => {
    setNum(num + 1);
  };

  const resetNum = () => {
    setNum(0);
  };

  return (
    <>
      <div className="main_div">
       <div className="center_div">
          <h1> {num} </h1>
          <div className="btn_div">
            <button onClick={incNum}> Increment </button>
            <button onClick={resetNum}> Reset </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrincipalView
