import React, {Component} from 'react';
import './App.css';
import Search from './components/Search';
import Navbar from './components/Navbar';
import Accordion from './components/Accordion';
import SignUp from './components/SignUp';
import {Route, Switch, withRouter} from 'react-router-dom'

class App extends Component {
  state= {
    user: null,
    isLogged: false
  };

  signUp = async(data) => {
    try {
      const signUpResponse = await fetch('http://localhost:3030/user/signUp', {
        method: 'POST',
        credential: 'include',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const parsedResponse = await signUpResponse.json();
      console.log(parsedResponse, 'this is data from sign up function')
    } catch (error) {
      console.log(error);
    };
  };

  render(){
    return (
      <div className="container">
        <Navbar/>
        <main>
          <Switch>
            <Route exact path="/signUp" render={(props) => <SignUp {...props} signUp={this.signUp}/>}/>
          </Switch>
        </main>
        <Search  suggestions={[
        "Alternative Pop",
        "Alternative Rock",
        "Blues",
        "Brazilian",
        "Classic Pop",
        "Classic Rock",
        "Classical",
        "Country",
        "Dance",
        "Electronic",
        "Folk",
        "Gospel",
        "HipHop",
        "Jazz",
        "Latin",
        "Metal",
        "Modern Pop",
        "Pop Rock",
        "Reggae",
        "RnB",
        "Spoken"
      ]}
        />
        <Accordion/>
        <Accordion/>
        <Accordion/>
        <Accordion/>
        <Accordion/>
      </div>
    );
  };
}

export default withRouter(App);
