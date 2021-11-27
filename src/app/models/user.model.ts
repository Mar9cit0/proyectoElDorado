export default interface User {
    status: string
    email: string
    senha: string
    data: {
        token: string
    }
}