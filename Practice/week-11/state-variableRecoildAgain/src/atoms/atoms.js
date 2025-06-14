import { atom, selector } from "recoil";

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
    default: 1
})

export const messageAtom = atom({
    key: "messageAtom",
    default: 0
})



export const totalNotificationSelector = selector({
    key:"totalNotificationSelector",
    get:({get}) => {
        const networkAtomCount = get(networkAtom);
        const jobAtomCount = get(jobAtom);
        const notificationAtomCount = get(notificationAtom);
        const messageAtomCount = get(messageAtom);

        return networkAtomCount+jobAtomCount+notificationAtomCount+messageAtomCount
    }
})