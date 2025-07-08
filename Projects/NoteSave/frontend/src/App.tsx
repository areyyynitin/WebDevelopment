import { Button } from "./components/Buttons";
import { PlusIcons } from "./icons/PlusIcons";
import { ShareIcon } from "./icons/ShareIcon";

const App = () => {
  return (
    <div className="">
    <Button variant="primary" text="Add content" startIcon={<PlusIcons/>}></Button>
    <Button variant="secondary" text="Share brain" startIcon={<ShareIcon/>}></Button>
  
    </div>
  )
}

export default App;
