const EmployeeCard = (props) => {
  return (
    <div>
      <div className="employee-card">
        <img src={props.image} alt="Employee Name" />
        <h2>{props.name}</h2>
        <p>Age:{props.age}</p>
        <p>Department: {props.department} </p>
      </div>
    </div>
  );
};
export default EmployeeCard;
