import usePasswordGenerator from "./hooks/use-password-generator";
import "./styles.css";
import { useState } from "react";
import PasswordStrengthGenerator from "./components/StrengthChecker";
import Button from "./components/Button";
import checkbox from "./components/Checkbox";

function App() {
  const [length, setLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);

  const [copied, setCopied] = useState(false);

  const handleCheckBoxChange = (i) => {
    const updateCheckBoxData = [...checkboxData];
    updateCheckBoxData[i].state = !updateCheckBoxData[i].state;
    setCheckboxData(updateCheckBoxData);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied();
    }, 1000);
  };

  const { password, errorMessage, generatePassword } = usePasswordGenerator();

  return (
    <div className="container">
      {/*password Text and copy button */}
      {password && (
        <div className="header">
          <div className="title">{password}</div>

          <Button
            text={copied ? "copied" : "copy"}
            onclick={handleCopy}
            customClass="copyBtn"
          />
        </div>
      )}
      {/*character length*/}
      <div className="charlength">
        <span>
          <label>Character Length</label>
          <label>{length}</label>
        </span>
        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      {/*checkboxes */}
      <div className="checkboxes">
        {checkboxData.map((checkbox, index) => {
          return (
            <checkbox
              key={index}
              title={checkbox.title}
              onChange={() => handleCheckBoxChange(index)}
              state={checkbox.state}
            />
          );
        })}
      </div>

      {/*strength */}
      <PasswordStrengthGenerator password={password} />

      {/*Error Handling*/}
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}

      {/*generate button */}
      <Button
        text="Generate Password"
        onclick={() => generatePassword(checkboxData, length)}
        customClass="generateBtn"
      />
    </div>
  );
}

export default App;
