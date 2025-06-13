import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobAtom,networkAtom,messageAtom,notificationAtom } from '../atoms/atoms'

export default function UsingRecoilValue() {
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobAtom)
  const notificationAtomCount = useRecoilValue(notificationAtom)
  const messageAtomCount = useRecoilValue(messageAtom)
  

  return (
    <>
    <button>Home</button>
    <button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
    <button>Jobs ({jobsAtomCount >= 10 ? "10+" : jobsAtomCount }) </button>
    <button>Messaging ({messageAtomCount >= 9 ? "9+" : messageAtomCount }) </button>
    <button>Notification ({notificationAtomCount >= 15 ? "15+" : notificationAtomCount })</button>
    <button>Me </button>
     
    </>
  )

}


// now i am 