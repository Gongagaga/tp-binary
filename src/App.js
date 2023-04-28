import React, { useState } from "react";
import BaseNumberInput from "./Components/BaseNumberInput";
import "./App.css";

function App() {
  const [decimalValue, setDecimalValue] = useState(0);
  const [binaryValue, setBinaryValue] = useState(0);

  const handleChange = (value, type) => {
    if (type === "decimalToBinary") {
      const binaryValue = (value >>> 0).toString(2);
      setDecimalValue(value);
      setBinaryValue(binaryValue);
    } else if (type === "binaryToDecimal") {
      const decimalValue = parseInt(value, 2);
      setBinaryValue(value);
      setDecimalValue(decimalValue);
    }
  };

  return (
    <div>
      <BaseNumberInput
        label="Nombre Décimal "
        value={decimalValue}
        type="decimalToBinary"
        onChangeBase={(value) => handleChange(value, "decimalToBinary")}
      />
      <BaseNumberInput
        label="Nombre Binaire "
        value={binaryValue}
        type="binaryToDecimal"
        onChangeBase={(value) => handleChange(value, "binaryToDecimal")}
      />
    </div>
  );
}

export default App;
