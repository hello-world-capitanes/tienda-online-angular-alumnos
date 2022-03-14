import { USER_CONTANTS } from "./user-constants";

export const USER_ERRORS = {
    required: 'Campo requerido',
    email: {
        invalid: 'Email inválido'
    },
    password: {
        minLength: `Debe contener al menos ${USER_CONTANTS.password.minLength} caracteres`,
        maxLength: `Debe contener como máximo ${USER_CONTANTS.password.maxLength} caracteres`,
    },
    dni: {
        invalid: 'DNI inválido'
    }
}