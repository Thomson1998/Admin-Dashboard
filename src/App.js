/* eslint-disable react/jsx-pascal-case */
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Charts_Page from './Components/Charts';
import Dashboard from './Components/Dashboard';
import Button_Page from './Components/dropcomp/Buttons';
import Cards_Page from './Components/dropcomp/Cards';
import Error_Page from './Components/Pages/404Page';
import Blank_page from './Components/Pages/Blank_page';
import Forgot_page from './Components/Pages/ForgetPassword';
import Login_Page from './Components/Pages/Login';
import Register_Page from './Components/Pages/Registor';
import Tables_Page from './Components/Tables';
import Animation_Page from './Components/Utilities/Animations';
import Borders_Page from './Components/Utilities/Borders';
import Colors_Page from './Components/Utilities/Colors';
import Other_Page from './Components/Utilities/Other';


function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Dashboard/>
        </Route>
          {/* Components */}

          <Route path="/cards">
            <Cards_Page/>
          </Route>

          <Route path="/buttons">
            <Button_Page/>
          </Route>

        {/* Utilities */}

        <Route path="/colors">
          <Colors_Page/>
        </Route>

        <Route path="/borders">
          <Borders_Page/>
        </Route>

        <Route path="/animations">
          <Animation_Page/>
        </Route>

        <Route path="/others">
          <Other_Page/>
        </Route>

        {/* Pages */}

        <Route path="/login">
          <Login_Page/>
        </Route>

        <Route path="/register">
          <Register_Page/>
        </Route>

        <Route path="/forgot">
          <Forgot_page/>
        </Route>

        <Route path="/**/**">
          <Error_Page/>
        </Route>

        <Route path="/blank">
          <Blank_page/>
        </Route>

        <Route path="/charts">
          <Charts_Page/>
        </Route>

        <Route path="/tables">
          <Tables_Page/>
        </Route>
      </Switch>

    </div>
  );
}

export default App;