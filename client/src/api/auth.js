import axios from "./axios";

export const registerRequest = async (user) => axios.post("/auth/register", user);

export const loginRequest = async (user) => axios.post("/auth/login", user);

export const verifyTokenRequest = async () => axios.get("/auth/verify");

export const profileRequest = async () => axios.get("/auth/profile");

export const refreshTokenRequest = async () => axios.post("/auth/refresh-token");