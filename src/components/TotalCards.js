import EmployeeCard from "./EmployeeCard";

export default function TotalCards(props) {
  const EmployeesData = props.Data;
  const Result = EmployeesData.map((item, i) => (
    <div key={i}>
      {
        <EmployeeCard
          name={item.name}
          age={item.age}
          department={item.department}
          image={item.image}
          id={props.id}
        ></EmployeeCard>
      }
    </div>
  ));
  return Result;
}
