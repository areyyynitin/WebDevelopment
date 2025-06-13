import { atom } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 101
})

export const jobAtom = atom({
    key: "jobAtom",
    default: 10
})

export const notificationAtom = atom({
    key: "notificationAtom",
    default: 15
})

export const messageAtom = atom({
    key: "messageAtom",
    default: 9
})