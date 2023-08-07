import {instance} from "./Interceptors";

const formDataConfig = {
    headers: { "Content-Type": "multipart/form-data" },
};

const jsonConfig = {
    headers: { "Content-Type": "application/json" },
};

export async function createJukeboxPage(textData: String) {
    const data = await instance.post("jukebox", textData, jsonConfig)
    return data;
}