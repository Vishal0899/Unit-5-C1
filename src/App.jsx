import React from "react";
import "./App.css";

function App() {

  const [Initial, setInitial] = React.useState({Score: 76, Wicket: 2, Ball: 50})

  const ScoreHandle = (value,type) =>{
    if(Initial.Score<100){

      if(type==="S"){
        setInitial({...Initial,Score:Initial.Score + value});
      }else if(type==="W"){
        setInitial({...Initial,Wicket:Initial.Wicket + value});
      }else if(type==="B"){
        setInitial({...Initial,Ball:Initial.Ball + value});
      }
    }
  }

  let Latestscore = "";
  if(Initial.Score>=100){
      Latestscore = "India Won"
  }

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:
          <h1 className="scoreCount">
            {
              // show "score" here
              Initial.Score
            }
          </h1>
        </div>
        <div>
          Wicket:
          <h1 className="wicketCount">
            {
              // show wicket here
              Initial.Wicket
            }
          </h1>
        </div>

        <div>
          Over:
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              Initial.Ball
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={() => ScoreHandle(1,"S")}>Add 1</button>
        <button className="addScore4" onClick={() => ScoreHandle(4,"S")}>Add 4</button>
        <button className="addScore6" onClick={() => ScoreHandle(6,"S")}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button className="addWicket1" onClick={() => ScoreHandle(1,"W")}>Add 1</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button className="addBall1" onClick={() => ScoreHandle(1,"B")}>Add 1</button>
      </div>
        
      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      <div>
            <h1>{Latestscore}</h1>
      </div>  
    </div>
  );
}

export default App;
