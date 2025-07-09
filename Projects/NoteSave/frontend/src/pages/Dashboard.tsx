import { useEffect, useState } from "react";
import { Button } from "../components/Buttons";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { PlusIcons } from "../icons/PlusIcons";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/Sidebar";
import { useContent } from "../hooks/useContent";
import axios from "axios";
import BACKEND_URL from "../config";

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false)
  // @ts-ignore
  const {contents , refresh} = useContent()

  useEffect(() => {
    refresh()
  } ,[modalOpen])

  return (
    <div>
      <Sidebar />

      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
        <CreateContentModal open={modalOpen} onClose={() => {
          setModalOpen(false)
        }} />

        <div className="flex justify-end gap-4">
          <Button
            onClick={() => { setModalOpen(true) }}
            variant="primary"
            text="Add content"
            startIcon={<PlusIcons />}
          ></Button>
          <Button
          onClick={async () => {
        const response =  await  axios.post(`${BACKEND_URL}/api/v1/brain/share` ,{
              share:true
            }, {
              headers:{
                "Authorization":localStorage.getItem("token")
              }
            })
         const shareUrl = `http://localhost:5173/share/${response.data.hash}`  
         alert(shareUrl)
          }}
            variant="secondary"
            text="Share brain"
            startIcon={<ShareIcon />}
          ></Button>
        </div>
        <div className="flex gap-4 flex-wrap">


         
         

          {contents.map(({ type, title, link }) =>
            <Card
              title={title}
              type={type}
              link={link}
            />
          )}

         



        </div>
      </div>




    </div>
  );
};

export default Dashboard;
