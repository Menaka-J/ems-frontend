import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/employees";

//retrievl
export const listEmployees = () => axios.get(REST_API_BASE_URL);
//creation
export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);
//updation
export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URL + "/" + employeeId);