import EmplyeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = () => {
    return <ul className="app-list list-group">
        <EmplyeesListItem/>
        <EmplyeesListItem/>
        <EmplyeesListItem/>
    </ul>
}
export default EmployeesList;