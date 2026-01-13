import React, { useState } from 'react'

function EmployeeComponent() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    function handlefirstname(e) {
        setFirstName(e.target.value);
    }

    function handlelastname(e) {
        setLastName(e.target.value);
    }

    function handleemail(e) {
        setEmail(e.target.value);
    }

    return (
        <div>

            {/* whole conatiner  */}
            <div className='container'>
                <div className='row'>

                    <div className='card'>

                        {/* title  */}
                        <h2 className='text-center'>Add Employee</h2>
                        <div className='card-body'>

                            {/* form  */}
                            <form>

                                {/* first name input  */}
                                <div className='form-group mb-2'>
                                    <label className='form-label'>First Name:</label>
                                    <input className='form-control' type="text" placeholder='Enter Employee First Name' name='firstName' value={firstName} onChange={handlefirstname} />
                                </div>

                                {/* last name input  */}
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Last Name:</label>
                                    <input className='form-control' type="text" placeholder='Enter Employee Last Name' name='lastName' value={lastName} onChange={handlelastname} />
                                </div>

                                {/* email  */}
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Email:</label>
                                    <input className='form-control' type="text" placeholder='Enter Employee Email' name='email' value={email} onChange={handleemail} />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeComponent
