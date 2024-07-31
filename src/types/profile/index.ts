import z  from 'zod';
import { RoleEnum } from '../auth';


// Esquema de validación para los roles
export const roleSchema = z.enum([RoleEnum.ADMIN, RoleEnum.COORDINATOR, RoleEnum.DEPARTMENT_HEAD, RoleEnum.TEACHER]);

// Esquema de validación para el departamento
export const departmentSchema = z.object({
    id: z.number(),
    name: z.string(),
});

// Esquema de validación para el centro regional
export const regionalCenterSchema = z.object({
    id: z.number(),
    name: z.string(),
});

// Esquema de validación para la carrera
export const careerSchema = z.object({
    id: z.number(),
    name: z.string(),
});

// Esquema de validación para la foto
export const photoSchema = z.object({
    url: z.string().url(),
});

// Esquema de validación principal que agrupa todos los campos
export const userInfoSchema = z.object({
    dni: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    phoneNumber: z.string(),
    dept: departmentSchema,
    role: roleSchema,
    career: careerSchema,
    regionalCenter: regionalCenterSchema,
    photo: photoSchema.optional().nullable(),
});

// Tipo inferido del esquema principal
export type UserInfo = z.infer<typeof userInfoSchema>;
