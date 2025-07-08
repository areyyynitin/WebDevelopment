import { useState } from "react";
import { Button } from "../components/Buttons";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { PlusIcons } from "../icons/PlusIcons";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/Sidebar";

const Dashboard = () => {
  const [modalOpen,setModalOpen] = useState(false)
  return (
    <div>
        <Sidebar/>

      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
      <CreateContentModal open={modalOpen} onClose={() => {
        setModalOpen(false)}} />

      <div className="flex justify-end gap-4">
      <Button
      onClick={() => { setModalOpen(true) }}
        variant="primary"
        text="Add content"
        startIcon={<PlusIcons />}
        ></Button>
      <Button
        variant="secondary"
        text="Share brain"
        startIcon={<ShareIcon />}
        ></Button>
        </div>
      <div className="flex gap-4">
        <Card
          title="Krsna Biographyy"
          type="Twitter"
          link="https://x.com/TheCinesthetic/status/1942026026143666574"
        />
        <Card
          title="raftaar"
          type="Youtube"
          link="https://www.youtube.com/watch?v=yRPfHUiHrng&ab_channel=ShadeofCode"
        />
      </div>
      </div>



    
    </div>
  );
};

export default Dashboard;
