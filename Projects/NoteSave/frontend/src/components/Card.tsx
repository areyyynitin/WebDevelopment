import { ShareIcon } from "../icons/ShareIcon";
interface CardProps{
    title:string;
    link:string;
    type:"Twitter" | "Youtube"
}

export const Card = ({title,link,type}:CardProps) => {
  return (
    <>
      <div>
        <div className="p-4 rounded-md bg-white shadow-md border  border-gray-200 max-w-72 min-h-72 min-w-72">
          <div className="flex justify-between ">
            <div className="flex items-center ">
              <div className=" text-gray-600 pr-2">
                <ShareIcon />
              </div>
             {title}
            </div>

            <div className="flex items-center">
              <div className="pr-2 text-gray-600">
                <a href={link} target="_blank"><ShareIcon /></a>
              </div>
              <div className=" text-gray-600">
                <ShareIcon />
              </div>
            </div>
          </div>

          <div className="pt-3">
            {type === "Youtube" &&  <iframe className="w-full"
            //   src={link.replace("watch" , "embed").replace("?v=" , "/")}
                src={`https://www.youtube.com/embed/${link.split("v=")[1]?.split("&")[0]}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            }
           
           {type === "Twitter" &&    <blockquote className="twitter-tweet">  <a href={link.replace("x.com" ,"twitter.com")}></a></blockquote> }
        
          </div>
        </div>
      </div>
    </>
  );
};
