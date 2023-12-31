import logo from './logo.svg';
import './App.css'
import Football_Team from './Components/Football_Team';
import Trainee from './Components/Trainee';
import trainees from './data/trainee.json';

// react component called APP

function App() {
  console.log("Trainers:", trainees);
  // declaring traineeComponents as an array
  const traineeComponents = []

  for (const trainee of trainees) {
    console.log("Trainees:", trainee);
    traineeComponents.push(
      <Trainee name={trainee.name} age={trainee.age} jobtitle={trainee.jobtitle} />
    );

  }

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
      <Trainee name="Rick" age="38" jobtitle="Trainee Software Engineer" />
      <br></br>
      <Trainee name="Leo" age="Unknown" jobtitle="Trainee Software Engineer" />
      <br></br>
      <Trainee name="Temi" age="Unknown" jobtitle="Trainee Software Engineer" />
      <br></br>
      <h1>Trainee Names</h1>
      {traineeComponents}
    </div >
  );
}

export default App;
