import { api } from '../utils/axios';

export async function sendInfo (e: any) {
    try {
        const res = await api.post("/MyInfo",
        e)
    } catch(err) {
        console.log(err)
    }
}
