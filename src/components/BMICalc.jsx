import React, { useState } from "react";

function BMICalc() {
  const [userInput, setUserInput] = useState({});
  const [bmi, setBmi] = useState({});

  const setInput = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const getBmi = () => {
    const wheight = userInput.Wheight;
    const height = (userInput.height / 100) * (userInput.height / 100);
    const bmi = wheight / height;

    if (bmi <= 18.5) {
      setBmi({
        bmi: bmi,
        bodyState: "Underwheight",
      });
    } else if (bmi <= 25.0) {
      setBmi({
        bmi: bmi,
        bodyState: "Normal",
      });
    } else if (bmi <= 30.0) {
      setBmi({
        bmi: bmi,
        bodyState: "Overweight",
      });
    } else if (bmi > 30) {
      setBmi({
        bmi: bmi,
        bodyState: "Obese",
      });
    }
  };

  return (
    <div className="w-full h-[100vh] bg-slate-950 flex justify-center items-center">
      <div className="rounded bg-white flex flex-col w-96 p-5 transition-all">
        <label>Enter your Wheight:</label>
        <input
          className="p-2 border border-stone-950 rounded"
          onChange={setInput}
          name="Wheight"
          value={userInput.wheight}
          placeholder="Wheight in kilograms"
        ></input>
        <label>Enter your Height:</label>
        <input
          className="p-2 border border-stone-950 rounded  "
          onChange={setInput}
          name="height"
          value={userInput.height}
          placeholder="height in meters"
        ></input>
        <button
          onClick={getBmi}
          className="bg-slate-500 p-2 rounded mt-2 font-bold"
        >
          Calc BMI
        </button>

        {bmi && (
          <>
            <div className="flex flex-col justify-center items-center">
              <p className="text-center font-bold mt-2">BMI : {bmi.bmi}</p>
              <p className="text-center font-bold mt-2">
                Body State:{bmi.bodyState}
              </p>
              <img
                src={`/images/${bmi.bodyState}.png`}
                className="w-20"
              ></img>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default BMICalc;
