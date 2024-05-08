import api from "./CustomizeApiFunction"

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

const loginUser = async (login) => {
    const response = await api.post("api/auth/login", login);
    return response;
}

const createProduct = async (name, quantity) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("quantity", quantity);
    const response = await api.post("/api/product/create-product", formData)
    return response;
}

const createLocation = async (email, latitude, longitude) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);
    const response = await api.post("/api/location/create-location", formData);
    return response;
}

const getRoleByEmail = async(email) => {
    const response = await api.get(`api/user//users/role/${email}`);
    return response;
}

export {
    registerUser,
    loginUser,
    getAllLogs,
    getLogsBasedOnDriver,
    getUsersBasedOnRole,
    createProduct,
    createLocation,
    getRoleByEmail,
}