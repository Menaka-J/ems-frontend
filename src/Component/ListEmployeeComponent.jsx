import React, { useEffect, useState } from 'react'
import { listEmployees } from '../Services/EmployeeService';
import { useNavigate } from 'react-router-dom';

function ListEmployeeComponent() {

    const [employees, setEmployees] = useState([]);

    const navigator = useNavigate();

    useEffect(() => {
        listEmployees().then((res) => {
            setEmployees(res.data);
        }).catch(error => {
            console.log(error);
        })
    }, [])

    //==================================================================
    //create function
    function addNewEmployee() {
        navigator("/add-employee");
    }

    //==================================================================
    //update function
    function updateemployee(id) {
        navigator(`/update-employee/${id}`);
    }

    return (
        <>
            <div className='container '>
                <h2>List of Employees</h2>
                <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
                <table className='table table-striped table-bordered'>
                    {/* table head row  */}
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    {/* actual table data  */}
                    <tbody>
                        {employees.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateemployee(employee.id)}>Update</button>
                                    {/* <button className='btn btn-'>Delete</button> */}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListEmployeeComponent
