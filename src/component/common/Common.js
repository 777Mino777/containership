import { atom } from "recoil"

export const BACKENDURL = "http://10.125.121.212:8080"

export const AtomIsLogin = atom({
    key: "isLogin",
    default: false,
})

export const AtomIsExpanded = atom({
    key: "isExpanded",
    default: true,
})