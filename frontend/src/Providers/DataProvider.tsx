import { api } from "../utils/axios";

export async function sendInfo(e: any) {
  try {
    const res = await api.patch("/MyInfo", e);
  } catch (err) {
    throw new Error("Unknown error");
  }
}

export async function getWithdrawalInfo(id: any) {
  try {
    await api.get(`/mydocuments/withdrawal/${id}`);
  } catch (err) {
    throw new Error("Unknown error");
  }
}

export async function sendWithdrawalInfo(data: any, id: any) {
  try {
    // console.log(e)
    const res = await api.patch(`/mydocuments/withdrawal/${id}`, {data: data});
  } catch (err) {
    throw new Error("Unknown error");
  }
}

export async function sendresignationInfo(data: any, id: any) {
  try {
    const res = await api.patch(`/mydocuments/resignation/${id}`, {data});
  } catch (err) {
    throw new Error("Unknown error");
  }
}

export async function createWithdrawalDoc() {
  try {
    const res = await api.post("/mydocuments/withdrawal");
    return res.data.id;
  } catch (err) {
    throw new Error("Unknown error");
  }
}

export async function createResignationDoc() {
  try {
    const res = await api.post("/mydocuments/resignation");
    return res.data.id;
  } catch (err) {
    throw new Error("Unknown error");
  }
}
