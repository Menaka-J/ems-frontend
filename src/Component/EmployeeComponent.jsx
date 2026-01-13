import React, { useState } from 'react'

function EmployeeComponent() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    function saveemployee(e) {
        e.preventDefault();

        const employee = { firstName, lastName, email };
        console.log(employee);
    }
    return (
        <div>

            {/* whole conatiner  */}
            <div className='container'>
                <br />
                <div className='row'>

                    <div className='card col-md-6 offset-md-3 offset-md-3'>

                        {/* title  */}
                        <h2 className='text-center'>Add Employee</h2>
                        <div className='card-body'>

                            {/* form  */}
                            <form>

                                {/* first name input  */}
                                <div className='form-group mb-2'>
                                    <label className='form-label'>First Name:</label>
                                    <input className='form-control' type="text" placeholder='Enter Employee First Name' name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                </div>

                                {/* last name input  */}
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Last Name:</label>
                                    <input className='form-control' type="text" placeholder='Enter Employee Last Name' name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                </div>

                                {/* email  */}
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Email:</label>
                                    <input className='form-control' type="text" placeholder='Enter Employee Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>

                                {/* button  */}
                                <button className='btn btn-success' onClick={saveemployee}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeComponent
