import TotalCards from "./components/TotalCards";
import { Data } from "../src/components/Data.js";
import { useState } from "react";

function App() {
  const [employeesList, setEmployeesList] = useState(Data);
  const handleFilterByAge = () => {
    const minAge = document.getElementById("minAge").value;
    const maxAge = document.getElementById("maxAge").value;
    const ages = Array.from(new Set(Data.map((data) => data.age)));

    const targetAges = ages.filter((ages) => {
      return ages >= minAge && ages <= maxAge;
    });

    const filteredEmployees = Data.filter((employee) =>
      targetAges.includes(employee.age)
    );

    setEmployeesList(filteredEmployees);
  };

  return (
    <div className="app">
      <header>
        <h1>Employee List</h1>
        <div>
          <label htmlFor="minAge">Min Age:</label>
          <input type="number" id="minAge" min="18" max="100" />
          <label htmlFor="maxAge">Max Age:</label>
          <input type="number" id="maxAge" min="18" max="100" />
          <button id="btn" onClick={handleFilterByAge}>
            Filter
          </button>
        </div>
      </header>
      <div className="employees-container">
        <TotalCards Data={employeesList}></TotalCards>
      </div>
    </div>
  );
}

export default App;
