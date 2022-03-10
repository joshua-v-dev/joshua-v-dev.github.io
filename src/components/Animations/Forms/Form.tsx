import { useState, ChangeEvent, FormEvent } from "react";

export default function App() {
  const [selectValue, setSelectValue] = useState("coconut");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmit = (_event: FormEvent) => {
    console.log("Form was submitted!");
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value);
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={selectValue} onChange={handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
