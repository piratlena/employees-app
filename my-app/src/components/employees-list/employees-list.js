import EmplyeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmplyeesListItem key={id} {...itemProps}/>
        )
    })

    return <ul className="app-list list-group">
        {elements}
    </ul>
}
export default EmployeesList;