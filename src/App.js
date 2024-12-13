import React, { useState } from "react";

function App() {
  const [display, setDisplay] = useState("");
  const [storedValue, setStoredValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (number) => {
    setDisplay((prev) => prev + number);
  };

  const handleOperatorClick = (op) => {
    if (display !== "") {
      setStoredValue(parseFloat(display));
      setDisplay("");
      setOperator(op);
    }
  };

  const handleEqualsClick = () => {
    if (operator && storedValue !== null) {
      const currentValue = parseFloat(display);
      let result = 0;
      switch (operator) {
        case "+":
          result = storedValue + currentValue;
          break;
        case "-":
          result = storedValue - currentValue;
          break;
        case "*":
          result = storedValue * currentValue;
          break;
        case "/":
          result = currentValue !== 0 ? storedValue / currentValue : "Error";
          break;
        default:
          break;
      }
      setDisplay(result.toString());
      setStoredValue(null);
      setOperator(null);
    }
  };

  const handleClear = () => {
    setDisplay("");
    setStoredValue(null);
    setOperator(null);
  };

  return (
    <div className="calculator-container">
      <h1>Welcome to Harish's Calculator</h1>
      <div className="calculator">
        <div className="display">
          {storedValue !== null && operator !== null
            ? `${storedValue} ${operator} ${display || ""}`
            : display || "0"}
        </div>
        <div className="buttons">
          {/* Number Buttons */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
            <button
              key={number}
              className="button number-button"
              onClick={() => handleNumberClick(number)}
            >
              {number}
            </button>
          ))}

          {/* Operator Buttons */}
          {["+", "-", "*", "/"].map((op) => (
            <button
              key={op}
              className="button operator-button"
              onClick={() => handleOperatorClick(op)}
            >
              {op}
            </button>
          ))}

          {/* Equals and Clear Buttons */}
          <button className="button equals-button" onClick={handleEqualsClick}>
            =
          </button>
          <button className="button clear-button" onClick={handleClear}>
            C
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
