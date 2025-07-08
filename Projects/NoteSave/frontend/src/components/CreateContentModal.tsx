import { Button } from "./Buttons";
import { CrossIcon } from "./CrossIcon";

export const CreateContentModal = ({open, onClose}) => {
  return (
    <div>
    {open &&  <div className="w-screen h-screen bg-black fixed top-0 left-0 opacity-60 flex justify-center">

        <div className="flex flex-col justify-center">
            <span className="bg-white opacity-100  rounded p-4">
                <div className="flex justify-end cursor-pointer">
                    <div onClick={onClose}>
                 <CrossIcon/>
                 </div>
                   </div>

                     <div>
                            <Input placeholder={"Title"}/>
                            <Input placeholder={"Link"}/>
                     </div>
                  <div className="flex justify-center">  <Button variant="primary" text="Submit"/></div> 
            </span>
        </div>

      </div> }
    </div>
  );
};


function Input({onchange , placeholder}: {onchange: () => void}){
    return <div>
        <input placeholder={placeholder} type="text" className="px-4 py-2 border rounded m-2 border-slate-800 outline-none" onChange={onchange} />
    </div>
}


// 02:02:07
