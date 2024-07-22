export const PublicRoutes = {
    ADMISSION : '/admisiones',
    ADMISSION_INSCRIPTION : '/admisiones/inscripcion',
    ADMISSION_EXAMS : '/admisiones/examenes',
    ADMISSION_RESULTS : '/admisiones/resultados',
    LOGIN : '/auth/login',
    FORGOT_PASSWORD : '/auth/forgot-password',
    NEW_PASSWORD : '/auth/new-password/:token',
    TEACHER: './views/Teacher/teacherView',
}

export const PrivateRoutes = {
    PRIVATE : 'myspace',
    CHAT : 'chat',
    ADMIN_ADMISIONES : 'admin/admisiones'
}