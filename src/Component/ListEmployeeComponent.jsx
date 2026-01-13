import React from 'react'

function ListEmployeeComponent() {

    const dummy = [
        {
            "id": 1,
            "fname": "Dean",
            "lname": "Winchester",
            "email": "dean@gmail.com"
        },
        {
            "id": 2,
            "fname": "Sam",
            "lname": "Winchester",
            "email": "sam@gmail.com"
        }, {
            "id": 3,
            "fname": "John",
            "lname": "Winchester",
            "email": "john@gmail.com"
        }, {
            "id": 4,
            "fname": "Mary",
            "lname": "Winchester",
            "email": "mary@gmail.com"
        }
    ]

    return (
        <>
            <div className='container '>
                <h2>List of Employees</h2>

                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email</th>
                        </tr>
                    </thead>

                    <tbody>
                        {dummy.map(employee => 
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.fname}</td>
                                    <td>{employee.lname}</td>
                                    <td>{employee.email}</td>
                                </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListEmployeeComponent
