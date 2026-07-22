// import BlogList from './BlogList';
import EmployeeList from './EmployeeList';
import useFetch from './useFetch';

const Home = () => {
    const { data:employees, isLoading, error} = useFetch('http://localhost:8000/employees');

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading ...</div>}
            {/* {blogs && <BlogList blogs={blogs} title="All Blogs!"/>} */}
            {employees && <EmployeeList employees={employees} title="Frontend Team"/>}
        </div>
     );
}
 
export default Home;