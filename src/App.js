import logo from './logo.svg';
import './App.css';
import Trainer from './components/Trainer';

// react component called APP

function App() {
  return (
    <div>
      <header></header>
      <h1>React Application</h1>
      <p>Hello<p />
        <p>World</p>
        <Trainer />
        <Trainee />
    </div >
  );
}

export default App;
