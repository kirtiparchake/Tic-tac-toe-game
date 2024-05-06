import "./Page.css"
import circle_icon from "../assets/circle.png"
import cross_icon from "../assets/cross.png"
import { useState ,useRef} from "react"
 
let data =["","","","","","","","","",]
function Page() {

  
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let tittleRef = useRef(null)
  const toggle = (e, num) => {
    if (lock) {
      return;
    }
  
    const newData = [...data]; // Make a copy of the data array
    if (count % 2 === 0) {
      newData[num] = "x";
      
    } else {
      newData[num] = "o";
      
    } 
  
    // Update the state and increment count
    data = newData;
    setCount(count + 1);
    checkWin(newData[num]);
    
    // Update the UI by setting the square content
    e.target.innerHTML = newData[num] === "x" ? `<img src='${cross_icon}'>` : `<img src='${circle_icon}'>`;
  };
  const won = (winner) => {
    setLock(true);
    // Here you should handle the winning scenario
    console.log("Player " + winner + " won!");
    if(winner =="x"){
      tittleRef.current.innerHTML =`Congrats :-X win`
    }else {
      tittleRef.current.innerHTML =`Congrats :-O win`
    }{
      tittleRef.current.innerHTML = "Tic Tac Toe Game In <span>React</span>";

    }
  };
  const resetGame = () => {
    setCount(0);
    setLock(false);
    tittleRef.current.innerHTML = "Tic Tac Toe Game In <span>React</span>";
    data = ["", "", "", "", "", "", "", "", ""];
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
      square.innerHTML = "";
      square.onclick = null;
    });
  };
  
  
  
  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]); // Pass the winning player (either "x" or "o")
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };
  
   
  return (
    <div className="main">
        <h1 ref={tittleRef}>Tic Tac Toe Game In <span>React</span>
        </h1>
      <div className="conatiner">
        <div className="row1">
            <div className="square" onClick ={(e)=>{toggle(e,0)}} ></div>
            <div className="square" onClick ={(e)=>{toggle(e,1)}}></div>
            <div className="square" onClick ={(e)=>{toggle(e,2)}}></div>
        </div>  <div className="row2">
            <div className="square" onClick ={(e)=>{toggle(e,3)}}></div>
            <div className="square" onClick ={(e)=>{toggle(e,4)}}></div>
            <div className="square" onClick ={(e)=>{toggle(e,5)}}></div>
        </div>  <div className="row3">
            <div className="square" onClick ={(e)=>{toggle(e,6)}}></div>
            <div className="square" onClick ={(e)=>{toggle(e,7)}}></div>
            <div className="square" onClick ={(e)=>{toggle(e,8)}}></div>
        </div>
      </div>
      <button onClick={resetGame}>Reset</button>
    </div>
  )
}

export default Page
