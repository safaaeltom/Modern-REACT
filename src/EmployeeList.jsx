const EmployeeList = ({employees, title}) => {

    return ( 
        <div className="employee-list">
            <h2>{title}</h2>
            {employees.map((employee) => (
                <div className="employee-preview" key={employee.id}>
                    <h2>{employee.name}</h2>
                    <p>{employee.job}</p>
                </div>
            ))}
        </div>
     );
}
 
export default EmployeeList;