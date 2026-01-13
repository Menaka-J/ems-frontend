import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../Services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

function EmployeeComponent() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({ firstName: "", lastName: "", email: "" });
    const { id } = useParams();
    const navigator = useNavigate();

    useEffect(() => {
        if (id) {
            getEmployee(id).then((res) => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setEmail(res.data.email);
            }).catch(error => {
                console.log(error);
            })
        }
    }, [id])

    function saveorupdateemployee(e) {
        e.preventDefault();

        if (validateform()) {
            const employee = { firstName, lastName, email };

            if (id) {
                updateEmployee(id, employee).then((res) => {
                    console.log(res.data);
                    navigator("/employees");
                }).catch(error => {
                    console.log(error);
                })
            } else {
                createEmployee(employee).then((res) => {
                    console.log(res.data);
                    navigator("/employees");
                }).catch(error => {
                    console.log(error);
                })
            }
        }
    }

    function validateform() {
        let valid = true;
        const errorsCopy = { ...errors };

        if (firstName.trim()) {
            errorsCopy.firstName = "";
        } else {
            errorsCopy.firstName = "First Name is required!";
            valid = false;
        }

        if (lastName.trim()) {
            errorsCopy.lastName = "";
        } else {
            errorsCopy.lastName = "Last Name is required!";
            valid = false;
        }

        if (email.trim()) {
            errorsCopy.email = "";
        } else {
            errorsCopy.email = "Email is required!";
            valid = false;
        }

        setErrors(errorsCopy);
        return valid;
    }

    function pagetitle() {
        if (id) {
            return <h4 className='mb-0'>✏️ Update Employee</h4>
        } else {
            return <h4 className='mb-0'>➕ Add Employee</h4>
        }
    }

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-6 mx-auto'>

                    <div className='card shadow-lg border-0'>
                        <div className='card-header bg-dark text-white text-center'>
                            {pagetitle()}
                        </div>

                        <div className='card-body p-4'>
                            <form>

                                <div className='form-group mb-3'>
                                    <label className='form-label fw-semibold'>First Name</label>
                                    <input
                                        className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                                        type="text"
                                        placeholder='Enter First Name'
                                        name='firstName'
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                                </div>

                                <div className='form-group mb-3'>
                                    <label className='form-label fw-semibold'>Last Name</label>
                                    <input
                                        className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                                        type="text"
                                        placeholder='Enter Last Name'
                                        name='lastName'
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                    {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                                </div>

                                <div className='form-group mb-4'>
                                    <label className='form-label fw-semibold'>Email</label>
                                    <input
                                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                        type="text"
                                        placeholder='Enter Email'
                                        name='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                                </div>

                                <div className='d-grid'>
                                    <button
                                        className='btn btn-success btn-lg'
                                        onClick={saveorupdateemployee}
                                    >
                                        ✅ Submit
                                    </button>
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



// import React, { useEffect, useState } from 'react'
// import { createEmployee, getEmployee, updateEmployee } from '../Services/EmployeeService';
// import { useNavigate, useParams } from 'react-router-dom';

// function EmployeeComponent() {
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [email, setEmail] = useState("");
//     const [errors, setErrors] = useState({ firstName: "", lastName: "", email: "" });
//     const { id } = useParams();
//     const navigator = useNavigate();


//     useEffect(() => {
//         if (id) {
//             getEmployee(id).then((res) => {
//                 setFirstName(res.data.firstName);
//                 setLastName(res.data.lastName);
//                 setEmail(res.data.email);
//             }).catch(error => {
//                 console.log(error);
//             })
//         }
//     }, [id])


//     //=====================================================================
//     //function for creating and updating employee
//     function saveorupdateemployee(e) {

//         e.preventDefault();

//         if (validateform()) {
//             const employee = { firstName, lastName, email };

//             if (id) {
//                 updateEmployee(id, employee).then((res) => {
//                     console.log(res.data);
//                     navigator("/employees");
//                 }).catch(error => {
//                     console.log(error);
//                 })
//             } else {
//                 createEmployee(employee).then((res) => {
//                     console.log(res.data);
//                     navigator("/employees");
//                 }).catch(error => {
//                     console.log(error);
//                 })
//             }
//         }
//     }

//     //form validation
//     function validateform() {
//         let valid = true;

//         const errorsCopy = { ...errors };

//         //firstnaem validation
//         if (firstName.trim()) {
//             errorsCopy.firstName = "";
//         } else {
//             errorsCopy.firstName = "First Name is required!";
//             valid = false;
//         }

//         //last name validation
//         if (lastName.trim()) {
//             errorsCopy.lastName = "";
//         } else {
//             errorsCopy.lastName = "Last Name is required!";
//             valid = false;
//         }

//         //email validation
//         if (email.trim()) {
//             errorsCopy.email = "";
//         } else {
//             errorsCopy.email = "Emailis required!";
//             valid = false;
//         }

//         setErrors(errorsCopy);
//         return valid;
//     }

//     //=====================================================
//     //dynamic page title
//     function pagetitle() {
//         if (id) {
//             return <h2 className='text-center'>Update Employee</h2>
//         } else {
//             return <h2 className='text-center'>Add Employee</h2>
//         }
//     }



//     return (
//         <div>

//             {/* whole conatiner  */}
//             <div className='container'>
//                 <br />
//                 <div className='row'>

//                     <div className='card col-md-6 offset-md-3 offset-md-3'>

//                         {/* title  */}
//                         {pagetitle()}
//                         <div className='card-body'>

//                             {/* form  */}
//                             <form>

//                                 {/* first name input  */}
//                                 <div className='form-group mb-2'>
//                                     <label className='form-label'>First Name:</label>
//                                     <input className={`form-control ${errors.firstName ? "is-invalid" : ""}`} type="text" placeholder='Enter Employee First Name' name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//                                     {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
//                                 </div>

//                                 {/* last name input  */}
//                                 <div className='form-group mb-2'>
//                                     <label className='form-label'>Last Name:</label>
//                                     <input className={`form-control ${errors.lastName ? "is-invalid" : ""}`} type="text" placeholder='Enter Employee Last Name' name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} />
//                                     {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
//                                 </div>

//                                 {/* email  */}
//                                 <div className='form-group mb-2'>
//                                     <label className='form-label'>Email:</label>
//                                     <input className={`form-control ${errors.email ? "is-invalid" : ""}`} type="text" placeholder='Enter Employee Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
//                                     {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
//                                 </div>

//                                 {/* button  */}
//                                 <button className='btn btn-success' onClick={saveorupdateemployee}>Submit</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default EmployeeComponent
