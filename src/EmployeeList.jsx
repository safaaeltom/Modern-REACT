const EmployeeList = ({employees}) => {
    return ( 
        <div className="employee-list">
            {employees.map((employee) => (
                <div key={employee.id}>
                    <h2>{employee.name}</h2>
                    <p>{employee.job}</p>
                </div>
            ))}
        </div>
     );
}
 
export default EmployeeList;