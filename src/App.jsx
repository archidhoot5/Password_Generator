import { useState, useCallback, useEffect, useRef } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/card'
import {Navbar} from './components/Navbar'

function App() {

  // let mac = {
  //   name: "Macbook", 
  //   age: 20
  // };
  // let wind = {
  //   name: "Windows", 
  //   age: 20
  // };
  // first hook, very easy to use, after writing this, you need to assign default value to the hook! 
  // you can give it by using any variable type, like const value, array, boolean,string or whatever.

  let [points, setPoints] =  useState(10);
  let [length, setLength] = useState(points);
  let [num, setNum] = useState(false);
  let [char, setChar] = useState(false);
  let [password, setPassword] = useState(); 
  
  
  const passGen = useCallback(() => {
    let pass = ""
    // str holds the password from which we'll make data
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwyxz";
    if(num){
      str = str + "0123456789";
    }
    if(char){
      str = str + "!@#$%^&*";
    }

    // now we'll use for loop to detmine the total no. of times the code will run to generate pass

    for (let i = 1; i <= points; i++) {
      let element = Math.floor((Math.random()* str.length )+1)
      pass += str.charAt(element)
      console.log(pass);
    }
    setPassword(pass)
    
  }, [points,num, char, setPassword ])

  const passref = useRef(null)

  const copyClip = useCallback(() => {
    // how to copy!!!
    window.navigator.clipboard.writeText(password)
    //select pass when clicked
    passref.current?.select()
  }, [password])


  const addValue = () => {
    console.log("we added the value:", points);
    if(points<50)
      points = points + 1;
    setPoints(points);
  };

  const decValue = () => {
    console.log("we dec the value:", points);
    if(points>6)
      points = points - 1;
    setPoints(points);
  };



/* 1. first heading 
        2. add points and 2 buttons
        3. to make button active we add "ON-CLICK"
        4. we'll pass ref in onclick button, let's create function for them
        */

useEffect(() => {
passGen()
}, [points, num, char, passGen])        
      

return (
    <>
      <Navbar />

      <h1 className='text-black my-3'> ADG Welcomes You!</h1>  
      <h2> Your points are: {points} </h2>
      <button onClick={addValue}> Increase points, Total: {points} </button>    
      <br />
      <br />
      <button onClick={decValue} > decrease points, Total: {points} </ button>

      {/* SO HOW HOW WILL THIS DATA BE CHANGED? IT'S DONE BY METHODS CALLED HOOKS */}

      <br/>
      <br/>
      

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-white '> 
      <h1 className='text-4xl text-center text-black my-3'>Password Generator from Points!</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-gray'> 
      <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref = {passref}
      /> 
      <button className='outline-none bg-blue-800 text-white px-3 py-2 shrink-0'
      onClick={copyClip}> COPY</button>
      </div>
      <div className='flex text-sm gap-x-2'> 
        <div className='flex items-center gap-x-1'>
          <input type="range"  
            min ={6}
            max={50}
            value={points}
            className='cursor-pointer'
            onChange={(e) => setPoints(e.target.value)}
          />
          <label> Length: {points} </label>
        </div>
          
        <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            id='numInp' 
            onChange={() => {
              setNum((num) = !num)
            }}
            />
             <label htmlFor="numInp"> Numbers </label>
        </div>
        <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            id='charInp' 
            onChange={() => {
              setChar((char) = !char)
            }}

            // if changed firectly, it'll we always true
            />
             <label htmlFor="charInp"> Characters </label>
        </div>

      </div>
   </div>
      <br/>
      {/* <h1  className='bg-green-400 text-black p-4 rounded-xl'> TAILWIND TEST</h1> */}
      <Card channel = "ADG'23" btnText = "Click Me"  />
      <br />
      {/* <Card channel =" ADG'24" btnText = "Read More"/> */}







      
    </>
  )
}

export default App
