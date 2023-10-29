import Navbar from './components/layout/Navbar';
import React, { useState, Fragment } from 'react';
//import Useritem from './components/layout/users/Useritem';
import Users from './components/users/Users';
import Search from './components/users/Search';
import './App.css';
import axios from 'axios';
import { Alert } from './components/layout/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About } from './components/pages/About';
import User from './components/users/User';
import GithubState from './context/github/GithubState';
const App = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  //This function was used to initially load the data from the api
  // async componentDidMount(){
  //   this.setState({loading:true});
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState({users:res.data,loading:false});
  // }

  //Get single user

  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <GithubState>
      <Router>
        <React.Fragment>
          <Navbar title='Github Finder' />
          <div className='container'>
            <Alert alert={alert}></Alert>
            <Routes>
              <Route
                path='/'
                element={
                  <Fragment>
                    <Search setAlert={showAlert}></Search>
                    <Users></Users>
                  </Fragment>
                }
              ></Route>
              <Route exact path='/about' element={<About />}></Route>
              <Route exact path='/user/:login' element={<User />}></Route>
            </Routes>
          </div>
        </React.Fragment>
      </Router>
    </GithubState>
  );
};

export default App;
