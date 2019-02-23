import React, { Component } from 'react';
import './App.css';
// add the react router module
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import About from './About';
import Home from './Home';
import MovieList from './MovieList'
import Movie from './Movie'

class App extends Component {
  render() {
    const superHero = "batman";
    // the router goes around everything it needs to control
    return (
      <Router>
        <div className="App">
      
      {/* in react router, we dont use <a>, thats so 2015
        thats so Team frotress 2 */}
        {/* link component is the new <a>
          <li><a href="/">Home</a></li>
          <li><a href="/About">About</a></li> */}
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Movies">Movies</Link>
       

        {/* use the Route component to set up a path match
        if the path matches the browser path, it will render
        whatever is given as a component prop */}
        {/* route is a self closing */}

        {/* if you have path by itself, it will look for that path in the url 
        to restrict to exact, use exact*/}
          {/* <Route exact path="/" component={Home}/> */}
          <Route exact path="/" component={(props)=>
            
              <Home superHero={superHero} />
          
          }/>
          <Route path="/About" component={About}/>
          <Route exact path="/Movies" component={MovieList}/>
          <Route path="/movies/:movieId" component={Movie} />

        </div>
      </Router>
    );
  }
}

export default App;
