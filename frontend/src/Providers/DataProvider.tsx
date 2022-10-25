import { api } from "../utils/axios";

export async function sendInfo(e: any) {
  try {
    const res = await api.put("/MyInfo", e);
  } catch (err) {
    throw new Error("Unknown error");
  }
}

export async function sendwithdrawalInfo(e: any) {
  // need to be fix
  try {
    const res = await api.put(`/mydocument/withdrawal/${e}`);
  } catch (err) {
    throw new Error("Unknown error");
  }
}

export async function postwithdrawalInfo(e: number) {
  try {
    const res = await api.post(`/mydocument/withdrawalinfo/${e}`);
  } catch (err) {
    throw new Error("Unknown error");
  }
}

export async function sendresignationInfo(e: any) {
  // need to be fix
  try {
    const res = await api.put(`/mydocument/resignationinfo/${e}`);
  } catch (err) {
    throw new Error("Unknown error");
  }
}

export async function postresignation(e: number) {
  try {
    const res = await api.post(`/mydocument/resignationinfo/${e}`);
  } catch (err) {
    throw new Error("Unknown error");
  }
}

export async function createWithdrawalDoc(e: any) {
  try {
    const res = await api.post("/mydocuments");
    return res.data.id;
  } catch (err) {
    throw new Error("Unknown error");
  }
}
