import {instance} from "./Interceptors";

const formDataConfig = {
  headers: { "Content-Type": "multipart/form-data" },
};

const jsonConfig = {
  headers: { "Content-Type": "application/json" },
};

export async function normalRegistApi(jsonData: Object) {
  return instance.post("member/join", jsonData, jsonConfig);
}

// 닉네임 중복 검사
export async function nickNameCheckApi(jsonData: Object) {
  return instance.post("member/check/nickName", jsonData, jsonConfig);
}

// 자체 로그인
export async function normalLoginApi(jsonData: Object) {
  return instance.post("member/login", jsonData, jsonConfig);
}