import logo from './logo.svg';
import './App.css';

// react component called APP

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Testing React JS for the First Time</h3>
        <body>
          <form>
            <p>
              Hello This is a Test
            </p>
            <label>
              First Name:
              <input type="text" name="firstName" />
            </label>
          </form>
          <form>
            <label>
              Surname:
              <input type="text" name="lastName" />
            </label>
          </form>
          <form>
            <label>
              Place of Birth:
              <input type="text" name="birthCity" />
            </label>
            <input type="Submit" value="Submit" />
          </form>
          <table>
            <tr>
              <tr>
                <th>Name</th>
              </tr>
              <tr>
                <td>Rick</td>
              </tr>
              <tr>
                <td>John</td>
              </tr>
              <tr>
                <td>Andrew</td>
              </tr>
              <tr>
                <td>Rebecca</td>
              </tr>
              <tr>
                <td>Seb</td>
              </tr>
            </tr>
          </table>
        </body>
      </header>
    </div >
  );
}

export default App;
