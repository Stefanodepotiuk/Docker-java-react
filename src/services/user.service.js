import {axiosService} from "./axios.service";
import {urls} from "../constans";

const userService = {
    getAll:()=>axiosService.get(urls.users)
}

export {
    userService
}