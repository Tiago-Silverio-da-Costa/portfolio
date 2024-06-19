import { TLogin } from "@/components/commom/schemalogin";

    export function getCurrentUser() {
        const user = localStorage.getItem('user');
        if (user) {
            return JSON.parse(user) as TLogin;
        }
        return null;
    }