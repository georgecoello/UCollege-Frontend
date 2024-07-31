import api from "@/lib/axios";
import { UserInfo } from "@/types/profile";
import { isAxiosError } from "axios";

// Obtener el perfil del usuario
export async function fetchUserProfile(userId: number): Promise<UserInfo> {
    try {
        const url = `/api/users/${userId}`;
        const { data } = await api.get(url);
        // Aquí podrías usar un esquema de validación si es necesario
        return data as UserInfo;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
        throw new Error("El servidor no responde");
    }
}

// Actualizar el perfil del usuario
export async function updateUserProfile(userId: number, userData: Partial<UserInfo>): Promise<string> {
    try {
        const url = `/api/users/${userId}`;
        const { data } = await api.put(url, userData);
        return data.message;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
        throw new Error("El servidor no responde");
    }
}

// Obtener roles
export async function getUserRoles() {
    try {
        const url = '/api/users/roles';
        const { data } = await api.get(url);
        // Aquí podrías usar un esquema de validación si es necesario
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
        throw new Error("El servidor no responde");
    }
}

// Obtener centros regionales
export async function getRegionalCenters() {
    try {
        const url = '/api/users/regional-centers';
        const { data } = await api.get(url);
        // Aquí podrías usar un esquema de validación si es necesario
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
        throw new Error("El servidor no responde");
    }
}

// Obtener departamentos
export async function getDepartments() {
    try {
        const url = '/api/users/departments';
        const { data } = await api.get(url);
        // Aquí podrías usar un esquema de validación si es necesario
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
        throw new Error("El servidor no responde");
    }
}

