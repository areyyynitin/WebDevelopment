import './App.css'
import Button from './components/Button'
import Input from './components/Input'
import { Otp } from './components/Otp'


function App() {
  return (
    <>
      <div className='h-screen w-full bg-blue-700'>
       <br /><br /><br /><br /><br />
      {/* <Button disabled={false}>SignUp</Button>
      <Input type="text" placeholder={"Username"} ></Input>  */}

      <Otp number={20}  />
       </div>

    </>
  )
}












































function Screen1() {

  return <>
    <div className='w-full h-screen bg-blue-900 flex flex-col justify-center items-center'>


      <span className='text-3xl font-semibold'>
        <span className='text-cyan-200'>Webinar</span>
        <span className='text-white'>.gg</span>
      </span>
      <p className='text-2xl py-20 font-bold text-white'>Verify your age</p>
      <p className='mb-4'>Please confirm your birth year.This data will not be stored</p>
      <input type="date"
        className='rounded bg-cyan-100 w-60 mb-4' />
      <div> <button className='w-60 bg-blue-200 hover:bg-cyan-600 rounded p-1 ' >Continue</button></div>





    </div>
  </>
}


function Practice1() {
  return <>

    <div className='grid grid-cols-12'>
      <div className='col-span-12 sm:col-span-4 rounded-full text-4xl bg-black text-white'>Child 2</div>
      <div className='col-span-12 sm:col-span-4 bg-blue-400'>Child 1</div>
      <div className='col-span-12 sm:col-span-4 bg-yellow-400 '>Child 3</div>
    </div>
  </>

}

function Responsive() {
  return <>
    <div className='xl:bg-red-600 md:bg-blue-500 sm:bg-orange-500 bg-green-500' >Hello Shastri</div>
  </>
}

function Flex() {
  return <>
    <div className='flex justify-around '>
      <div className='bg-blue-400 m-5'>Child 1</div>
      <div className='bg-black text-white m-5'>Child 2</div>
      <div className='bg-yellow-400 m-5'>Child 3</div>
    </div>
  </>
}

function Grid() {
  return <>
    <div className='grid grid-cols-10'>
      <div className='bg-blue-400  col-span-5'>Child 1</div>
      <div className='bg-black text-white col-span-3'>Child 2</div>
      <div className='bg-yellow-400  col-span-6'>Child 3</div>
      <div className='bg-blue-500  col-span-5'>Child 1</div>
    </div>
  </>
}

export default App
