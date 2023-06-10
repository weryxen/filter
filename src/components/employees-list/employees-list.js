import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = () => {
  return (
    <ul className="app-list list-group">
      <EmployeesListItem name="Johan.L" salary={1000} />
      <EmployeesListItem name="Yagami.L" salary={1000} />
      <EmployeesListItem name="Ali.D" salary={9999} />
    </ul>
  );
};

export default EmployeesList;
