import { USER_CONTANTS } from "./user-constants";

export const USER_ERRORS = {
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
    lastname1: {
        notProvided: 'No se ha adjuntado un nombre para el usuario',
    },
    password: {
        notProvided: 'No se ha adjuntado una contraseña para el usuario',
        minLength: `Debe contener al menos ${USER_CONTANTS.password.minLength} caracteres`,
        maxLength: `Debe contener como máximo ${USER_CONTANTS.password.maxLength} caracteres`,
    },
    database: {
        notFound: "User not found",
    }
}