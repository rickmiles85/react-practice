import logo from './logo.svg';
import './App.css';
import Trainer from './Components/Trainer';
import Trainee from './components/Trainee';

// react component called APP

function App() {
  return (
    <div>
      <header></header>
      <h1>React Application</h1>
        <Trainer />
        <Trainee />
    </div >
  );
}

export default App;
