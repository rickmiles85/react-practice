import logo from './logo.svg';
import './App.css';
import Trainer from './Components/Trainer';
import Trainee from './Components/Trainee';

// react component called APP

function App() {
  return (
    <div>
      <header></header>
      <h1>React Application</h1>
      <p>This is a test webpage to show the features and benefit of React JS</p>
        <Trainer />
      <Trainee />
         </div >
  );
}

export default App;
