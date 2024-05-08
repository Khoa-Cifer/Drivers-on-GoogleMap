import api from "./CustomizeApiFunction"

const getToken = () => {
	return sessionStorage.getItem('token');
};

const registerUser = async (registraion) => {
    const formData = new FormData();
    formData.append("firstName", registraion.firstName);
    formData.append("lastName", registraion.lastName);
    formData.append("email", registraion.email);
    formData.append("password", registraion.password);
    formData.append("role", registraion.role);
    const response = await api.post("/api/auth/register-user", formData);
    return response;
}

const getAllLogs = async () => {
    const response = await api.get("/api/log/all-logs");
    return response;
}

const getLogsBasedOnDriver = async (email) => {
    const response = await api.get(`/api/log/logs/${email}`);
    return response;
}

const getUsersBasedOnRole = async (role) => {
    const response = await api.get(`api/user/users/${role}`)
    return response;
}

const loginUser = async (email, password) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    const response = await api.post("api/auth/login", formData);
    return response;
}

export {
    registerUser,
    loginUser,
    getAllLogs,
    getLogsBasedOnDriver,
    getUsersBasedOnRole
}