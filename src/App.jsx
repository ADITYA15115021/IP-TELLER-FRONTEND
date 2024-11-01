
import { useState } from 'react'
import axios from "axios"
import backgroundImage from './assets/bg.jpg';

function App() {

  const [Ip,setIp] = useState('');

  async function onClickHandler(){

    try {
        const response = await axios.get('http://13.60.166.53:3000/');
        const userIp = response.data.userIp;
        console.log(userIp);
        setIp(userIp);
    }catch (error) {
       console.log(error);
    }
     
   
  }

  if( !Ip ){
  return(
      <>
        <div className="relative h-screen w-full">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }} aria-hidden="true"></div>
            <div className="absolute inset-0 bg-black opacity-50" aria-hidden="true"></div>
  
              <div className='h-screen relative z-10 flex flex-row justify-center '>
              <div className=' flex flex-col justify-center '>
              <RequestCard onClickHandler={onClickHandler}></RequestCard>
              </div>
              </div>
  
        </div>
      </>
    )
  }

  return(
    <>
      <div className="relative h-screen w-full">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }} aria-hidden="true"></div>
          <div className="absolute inset-0 bg-black opacity-50" aria-hidden="true"></div>

            <div className='h-screen relative z-10 flex flex-row justify-center '>
            <div className=' flex flex-col justify-center '>
            <IPCard userIp = {Ip} setIp={setIp} ></IPCard>
            </div>
            </div>

      </div>
    </>
  )



}

function RequestCard({onClickHandler}){
  return(
    <>
      <div className='w-[480px] h-[118px] bg-gray-100 m-8 border rounded-lg border-gray-900 flex flex-col justify-center items-center'>
        <div className='m-4 text-xl font-semibold'>CLICK THE BUTTON TO KNOW YOUR PUBLIC IP</div>
        <div  className='m-2'><button onClick={onClickHandler} className='h-8 px-2 border rounded-lg bg-green-400 font-semibold'>CLICK ME !</button></div>
      </div>
    </>
  )

}

function IPCard({userIp,setIp}){
  return(
    <>
      <div className='w-[480px] h-[118px] flex flex-col justify-center items-center bg-gray-100 h-24 border rounded-lg '>
        
        <div className='m-2 px-12 font-semibold text-xl'>
          YOUR PUBLIC IP IS {userIp}     
        </div>

        <div className='m-1'>
          <button className="m-1 bg-violet-200 rounded-lg px-4 border border-b-black shadow font-semibold" onClick={()=> {setIp('')}}>GO BACK </button>
        </div>
      
      </div>
    </>
  )
}

export default App
