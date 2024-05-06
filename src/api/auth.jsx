import { axiosWithToken, axiosWithOutToken } from "./axios";
import { storeData } from "./useStorage";
import axios from "axios";

export async function login(username, password) {
    try {
        const response = await axios.post('https://tolusrec.pythonanywhere.com/api/auth/login/', {
            username,
            password
        });

        console.log(response.data); // Logging the data received from the server

        // Assuming storeData is a function to store data in AsyncStorage or similar
        await storeData("token", response.data.key);

        return response.data;
    } catch (error) {
        console.error('Error:', error);
        // Handle error here, such as displaying an error message to the user
        throw error; // Re-throw the error so it can be caught by the caller if necessary
    }
}

export async function logout(token) {
    const response = await axiosWithToken(token).post("api/auth/logout");
    localStorage.clear()
    return response.data;
}

export async function passwordReset(email) {
    const response = await axiosWithOutToken().post("api/auth/password/reset/", {email});
    return response.data;
}

export async function passwordResetConfirm(new_password1, new_password2, uid, token) {
    const response = await axiosWithOutToken().post("api/auth/password/reset/confirm", { new_password1, new_password2, uid, token });
    return response.data;
}