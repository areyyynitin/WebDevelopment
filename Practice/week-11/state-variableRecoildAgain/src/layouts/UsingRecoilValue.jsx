import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { jobAtom, networkAtom, messageAtom, notificationAtom,totalNotificationSelector } from '../atoms/atoms'

export default function UsingRecoilValue() {
    const networkNotificationCount = useRecoilValue(networkAtom)
    const jobsAtomCount = useRecoilValue(jobAtom)
    const notificationAtomCount = useRecoilValue(notificationAtom)
    //   const [messageAtomCount,setMessageAtomCount] = useRecoilState(messageAtom)
    const messageAtomCount = useRecoilValue(messageAtom)
    const totalNotificationCount = useRecoilValue(totalNotificationSelector)


    return (
        <>
            <button>Home</button>
            <button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
            <button>Jobs ({jobsAtomCount >= 10 ? "10+" : jobsAtomCount}) </button>
            <button>Messaging ({messageAtomCount >= 10 ? "9+" : messageAtomCount}) </button>
            <button>Notification ({notificationAtomCount >= 15 ? "15+" : notificationAtomCount})</button>
            <button>Me({totalNotificationCount}) </button>

        </>
    )
}

function ButtonUpdater() {
    const setMessageAtomCount = useSetRecoilState(messageAtom)
    return <>
        <button onClick={() => {
            setMessageAtomCount(c => c + 1)
        }} >Me </button>
    </>
}