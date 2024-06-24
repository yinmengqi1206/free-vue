import service from ".";
import {LoginFromInt } from "../type/login";

export function login(data:LoginFromInt){
    return service({
        url:"login",
        method:"post",
        data
    })
}