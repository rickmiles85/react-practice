import logo from './logo.svg';
import './App.css';
import Football_Team from './Components/Football_Team';

// react component called APP

function App() {
  return (
    <div>
      <header></header>
      <h1>Football Teams of the UK</h1>
      <p>Football Team List</p>
      <Football_Team teamName="Sheffield United" Founded="1889" League="Premiership" />
      <br></br>
      <Football_Team teamName="Sheffield Wednesday" Founded="God Knows" League="Tin Pot League" />
      <br></br>
      <Football_Team teamName="Wigan Athletic" Founded="1932" League="League 1" />
      <br></br>
      <Football_Team teamName="Liverpool" Founded="1892" League="Premiership" />
      <br></br>
      <Football_Team teamName="Manchester United" Founded="1902" League="Premiership" />
      <br></br>
      <Football_Team teamName="Arsenal AFC" Founded="1886" League="Premiership" />
      <br></br>
      <Football_Team teamName="Manchester City" Founded="1880" League="Premiership" />
      <br></br>

    </div >
  );
}

export default App;
