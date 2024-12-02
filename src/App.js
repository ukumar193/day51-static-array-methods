import { useRef } from 'react';
import './App.css';
import TenthStudent from './classes/TenthStudent';

function App() {
  

  let ashok =new TenthStudent();
  
  ashok.engMarks=95;
  ashok.telMarks=94;
  ashok.hinMarks=93;
  ashok.matMarks=92;
  ashok.scimarks=91;
  ashok.socMarks=90;
  let physicalGames =["badminton","Golf","wersling"];
  let mentalGames  =["chess","suduko","Crossword"];
  
  
  let SportsandGames =["Boxing","Cricket","Cycling","Kabbadi","Kho Kho","Tennis"];
  let lengthOutputRef =useRef();
  let atOutputRef =useRef();
  let pushOutputRef =useRef();
  let pushOut2Ref =useRef();
  let popoutputRef =useRef();
  let shiftoutputRef= useRef();
  let unshiftRef =useRef();
  let spliceOutputRef=useRef();
  let concatRef=useRef();
  
  return (
    <div className="App">
    <div className='dv1'>

     <button type='button' onClick={()=>{
    ashok.caluculateResult();
    ashok.About();
     }}>Static variable</button>

     <button type='button' onClick={()=>{
      console.log(SportsandGames.length);
      for(let i=0; i<SportsandGames.length;i++)
      console.log(SportsandGames[i])
    lengthOutputRef.current.innerHTML=(SportsandGames.length);
    
   
      
      }}>length</button>
      <button type='button' onClick={()=>{
        console.log(SportsandGames.at(5));
        atOutputRef.current.innerHTML=(SportsandGames.at(5))

      }}>At</button>
     <button type='button' onClick={()=>{
        console.log(SportsandGames);
        
        pushOutputRef.current.innerHTML=(SportsandGames.push("vollyball"));
        
        pushOut2Ref.current.innerHTML=(SportsandGames)
      
      }}>Push</button>
     <button type='button' onClick={()=>{
      console.log(SportsandGames);
      console.log(SportsandGames.pop());
      popoutputRef.current.innerHTML=(SportsandGames);


      }}>Pop</button>
      <button type='button' onClick={()=>{
        console.log(SportsandGames.shift());
        shiftoutputRef.current.innerHTML=SportsandGames;

      }}>Shift</button>
      <button type='button' onClick={()=>{
        console.log(SportsandGames.unshift("carrom"),("Chess"));
       
        unshiftRef.current.innerHTML=SportsandGames;
      }}>UnShift</button>
      <button type='button' onClick={()=>{
        console.log(SportsandGames);
        console.log(SportsandGames.toString());
        console.log(SportsandGames.join("-->"));
      }}>To string /join</button>
     <button type='button' onClick={()=>{
      console.log(SportsandGames.splice(0,1,"Hockey","Table Tennis"));
      spliceOutputRef.current.innerHTML=(SportsandGames);

      }}>Splice</button>
     <button type='button'onClick={()=>{
       let games;
       console.log(physicalGames);
       console.log(mentalGames);
      console.log( games =physicalGames.concat(mentalGames));
      concatRef.current.innerHTML=games;

      }}>Concat</button>
     
      <p ref={lengthOutputRef}></p>
      <br></br>
      <p ref={atOutputRef}></p>
      <br></br>
      <p ref={pushOutputRef}></p>
      <br></br>
      <p ref={pushOut2Ref}></p>
      <br></br>
      <p ref={popoutputRef}></p>
      <br></br>
      <p ref={shiftoutputRef}></p>
      <br></br>
      <p ref={unshiftRef}></p>
      <br></br>
      <p ref={spliceOutputRef}></p>
      <br></br>
      <p ref={concatRef}></p>
      
     </div>
               
    </div>
  );
}

export default App;
