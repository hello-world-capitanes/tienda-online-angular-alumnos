import { USER_CONTANTS } from "./user-constants";

export const USER_ERRORS = {
    required: 'Campo requerido',
    id: {
        notProvided: 'No se ha adjuntado un id para el usuario',
    },
    email: {
        invalid: 'Email inválido',
        notProvided: 'No se ha adjuntado un email para el usuario',
    },
    name: {
        notProvided: 'No se ha adjuntado un nombre para el usuario',
    },
    password: {
        minLength: `Debe contener al menos ${USER_CONTANTS.password.minLength} caracteres`,
        maxLength: `Debe contener como máximo ${USER_CONTANTS.password.maxLength} caracteres`,
    },
    dni: {
        invalid: 'DNI inválido'
    }
}