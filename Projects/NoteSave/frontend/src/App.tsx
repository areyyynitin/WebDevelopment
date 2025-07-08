import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcons } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'


function App() {

  return (
   <>
    <Button startIcon={<PlusIcons size='sm'  />} size='sm' variant='primary' text='Share' endIcon={<ShareIcon size='sm' />} />
    <br />
    <Button startIcon={<PlusIcons size='md'/>} size='md' variant='primary' text='Add Content' endIcon={<ShareIcon size='md' />} />
    <br />
    <Button startIcon={<PlusIcons size='lg'/>} size='lg' variant='primary' text='Add Content' endIcon={<ShareIcon size='lg'/>} />
    <br />
    <Button startIcon={<PlusIcons size='sm'  />} size='sm' variant='secondary' text='Share' endIcon={<ShareIcon size='sm' />} />
    <br />
    <Button startIcon={<PlusIcons size='md'/>} size='md' variant='secondary' text='Add Content' endIcon={<ShareIcon size='md' />} />
    <br />
    <Button startIcon={<PlusIcons size='lg'/>} size='lg' variant='secondary' text='Add Content' endIcon={<ShareIcon size='lg'/>} />
    <br />
   
   </>
  )
}

export default App
