import axios from "axios";

// const REST_API_BASE_URL = "http://localhost:8080/api/employees";
const REST_API_BASE_URL = import.meta.env.VITE_API_URL;

//retrievl
export const listEmployees = () => axios.get(REST_API_BASE_URL);
//creation
export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);
//updation details get here
export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URL + "/" + employeeId);
//updation
export const updateEmployee = (employeeId, employee) => axios.put(REST_API_BASE_URL + "/" + employeeId, employee);
//deletion
export const deleteEmployee = (employeeId) => axios.delete(REST_API_BASE_URL + "/" + employeeId);