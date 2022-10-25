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

export async function sendresignationInfo(e: any) {
  // need to be fix
  try {
    const res = await api.put(`/mydocument/resignationinfo/${e}`);
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
