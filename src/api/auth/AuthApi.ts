import api from "@/lib/axios";
import { ForgotPasswordData, NewPasswordFormData, UserData, UserLoginForm, userSchema } from "@/types/auth";
import { isAxiosError } from "axios";


export async function UserLogin(formData : UserLoginForm) {
    try {
        const url = `/auth/login`
        const {data} = await api.post<string>(url, formData)
        localStorage.setItem('AUTH_TOKEN',data)
        return data

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
        throw new Error("El servidor no Responde")
    }
} 

export async function getUser() {
    try {
        const url = `/auth/user`
        const {data} = await api<UserData>(url)
        const result = userSchema.safeParse(data)
        if(result.success){
            return result.data
        }
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
        throw new Error("El servidor no Responde")
    }
}

export async function sendInstructions(formData : ForgotPasswordData) {
    try {
        const url = `/auth/forgot-password`
        const { data } = await api.post<string>(url,formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
        throw new Error("El servidor no Responde")
    }
}

export async function getToken(token : string) {
    try {
        const url = `/auth/valid/${token}`
        const { data } = await api<string>(url)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
        throw new Error("El servidor no Responde")
    }
}

export async function validateToken(token : string) {
    try {
        const url = `/auth/validate-token`
        const { data } = await api.post<string>(url,{ token })
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
        throw new Error("El servidor no Responde")
    }
}

export async function resetPassword({token, formData } : { token: string, formData : NewPasswordFormData}) {
    try {
        const url = `/auth/update-password/${token}`
        const { data } = await api.post<string>(url,formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
        throw new Error("El servidor no Responde")
    }
}
