import { axiosWithToken, axiosWithOutToken } from "./axios";

export async function getProfile(token) {
    const response = await axiosWithToken(token).get("api/auth/user/");

    return response.data;
}

export async function createProfile(token, phone_number, address, date_of_birth, age, gender, height, weight, blood_type, genotype) {
    const response = await axiosWithToken(token).post("api/auth/user/", {phone_number, address, date_of_birth, age, gender, height, weight, blood_type, genotype});

    return response.data;
}

export async function register(token, username, email, password1, password2) {
    const response = await axiosWithToken(token).post("api/auth/user/", {username, email, password1, password2});

    return response.data;
}

export async function chat(token, user_id, message) {
    const response = await axiosWithToken(token).post("api/chatbot/", {user_id, message});

    return response.data;
}

export async function chat2(token, message) {
    const response = await axiosWithToken(token).post("api/chatbot/", { message });

    return response.data;
}