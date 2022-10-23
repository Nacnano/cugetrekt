import { api } from '../utils/axios'

export async function sendInfo(e: any) {
  try {
    const res = await api.put('/MyInfo', e)
  } catch (err) {
    throw new Error("Unknown error")
  }
}
