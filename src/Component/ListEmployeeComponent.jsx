import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees } from '../Services/EmployeeService';
import { useNavigate } from 'react-router-dom';

function ListEmployeeComponent() {

    const [employees, setEmployees] = useState([]);

    const navigator = useNavigate();

    //==================================================================
    //showing employees
    useEffect(() => {
        getallemployees();
    }, [])

    //getting function
    function getallemployees() {
        listEmployees().then((res) => {
            setEmployees(res.data);
        }).catch(error => {
            console.log(error);
        })
    }

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

    ////==================================================================
    //deleting employees
    function removeemployee(id) {
        deleteEmployee(id).then((res) => {
            getallemployees();
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-10 mx-auto'>

                        <div className='card shadow-lg border-0'>
                            <div className='card-header bg-dark text-white d-flex justify-content-between align-items-center'>
                                <h4 className='mb-0'>👨‍💼 Employee Management</h4>
                                <button
                                    className='btn btn-success'
                                    onClick={addNewEmployee}
                                >
                                    + Add Employee
                                </button>
                            </div>

                            <div className='card-body'>
                                <div className='table-responsive'>
                                    <table className='table table-hover table-striped align-middle text-center'>
                                        <thead className='table-dark'>
                                            <tr>
                                                <th>ID</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Email</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {employees.map(employee =>
                                                <tr key={employee.id}>
                                                    <td className='fw-bold'>{employee.id}</td>
                                                    <td>{employee.firstName}</td>
                                                    <td>{employee.lastName}</td>
                                                    <td>{employee.email}</td>
                                                    <td>
                                                        <button
                                                            className='btn btn-outline-primary btn-sm me-2'
                                                            onClick={() => updateemployee(employee.id)}
                                                        >
                                                            ✏️ Update
                                                        </button>
                                                        <button
                                                            className='btn btn-outline-danger btn-sm'
                                                            onClick={() => removeemployee(employee.id)}
                                                        >
                                                            🗑 Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>

                                    </table>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ListEmployeeComponent



//MYCODE
// import React, { useEffect, useState } from 'react'
// import { deleteEmployee, listEmployees } from '../Services/EmployeeService';
// import { useNavigate } from 'react-router-dom';

// function ListEmployeeComponent() {

//     const [employees, setEmployees] = useState([]);

//     const navigator = useNavigate();

//     //==================================================================
//     //showing employees
//     useEffect(() => {
//         getallemployees();
//     }, [])

//     //getting function
//     function getallemployees() {
//         listEmployees().then((res) => {
//             setEmployees(res.data);
//         }).catch(error => {
//             console.log(error);
//         })

//     }
//     //==================================================================
//     //create function
//     function addNewEmployee() {
//         navigator("/add-employee");
//     }

//     //==================================================================
//     //update function
//     function updateemployee(id) {
//         navigator(`/update-employee/${id}`);
//     }

//     ////==================================================================
//     //deleting employees
//     function removeemployee(id) {
//         deleteEmployee(id).then((res) => {
//             getallemployees();
//         }).catch(error => {
//             console.log(error);
//         })
//     }
//     return (
//         <>
//             <div className='container '>
//                 <h2>List of Employees</h2>
//                 <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
//                 <table className='table table-striped table-bordered'>
//                     {/* table head row  */}
//                     <thead>
//                         <tr>
//                             <th>Employee Id</th>
//                             <th>Employee First Name</th>
//                             <th>Employee Last Name</th>
//                             <th>Employee Email</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>

//                     {/* actual table data  */}
//                     <tbody>
//                         {employees.map(employee =>
//                             <tr key={employee.id}>
//                                 <td>{employee.id}</td>
//                                 <td>{employee.firstName}</td>
//                                 <td>{employee.lastName}</td>
//                                 <td>{employee.email}</td>
//                                 <td>
//                                     <button className='btn btn-info m-1' onClick={() => updateemployee(employee.id)}>Update</button>
//                                     <button className='btn btn-danger m-1' onClick={() => removeemployee(employee.id)}>Delete</button>
//                                 </td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         </>
//     )
// }

// export default ListEmployeeComponent
