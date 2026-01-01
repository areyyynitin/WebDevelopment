"use client"
import {TextInput} from "@repo/ui/text-input";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
   <>
   <div style={
    {
      height:"100vh",
      width:"100vw",
      display:"flex",
      justifyContent:"center",
      justifyItems:"center"
    }
   }>
    <div style={{
      display:"flex",
      justifyContent:"center",
      flexDirection:"column"
    }}>
    {/* <input type="text" placeholder="Enter text" /> */}
    <TextInput
    
    size="small" placeholder="Enter Kuch bhi you want"/>
    <button 
    onClick={ () => {
      router.push("/chat/23")
    } }
    >Click Me</button>
    </div>
   </div>
   </>
  );
}
