import api from "./CustomizeApiFunction"

const registerUser = async(registraion) => {
    const formData = new FormData();
    formData.append("firstName", registraion.firstName);
    formData.append("lastName", registraion.lastName);
    formData.append("email", registraion.email);
    formData.append("password", registraion.password);
    formData.append("role", registraion.role);
    const response = await api.post("/api/auth/register-user", formData);
    return response;
}

const getAllLogs = async() => {
    const response = await api.get("/api/log/all-logs");
    return response;
}

export {
    registerUser,
    getAllLogs,
}