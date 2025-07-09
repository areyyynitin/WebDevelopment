import { Deleteicons } from "../icons/Deleteicons";
import { NoteIcons } from "../icons/NoteIcons";
import { RedirectIcon } from "../icons/RedirectIcon";
interface CardProps{
    title:string;
    link:string;
    type:"twitter" | "youtube"
}

export const Card = ({title,link,type}:CardProps) => {
  return (
    <>
      <div>
        <div className="p-4 rounded-md bg-white shadow-md border  border-gray-200 max-w-72 min-h-72 min-w-72 ">
          <div className="flex justify-between ">
            <div className="flex items-center ">
              <div className=" text-black pr-2">
                <NoteIcons />
              </div>
             {title}
            </div>
            <div className="flex items-center">
              <div className="pr-2 text-gray-600 hover:text-black">
                <a href={link} target="_blank"><RedirectIcon /></a>
              </div>
              <div className=" text-gray-600 hover:text-black cursor-pointer">
                <Deleteicons />
              </div>
            </div>
          </div>

          <div className="pt-3">
            {type === "youtube" &&  <iframe className="w-full"
            //   src={link.replace("watch" , "embed").replace("?v=" , "/")}
                src={`https://www.youtube.com/embed/${link.split("v=")[1]?.split("&")[0]}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            }
           
           {type === "twitter" &&    <blockquote className="twitter-tweet">  <a href={link.replace("x.com" ,"twitter.com")}></a></blockquote> }
        
          </div>
        </div>
      </div>
    </>
  );
};
