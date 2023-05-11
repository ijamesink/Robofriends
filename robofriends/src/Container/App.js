import React, { useState, useEffect } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import './App.css';
import Scroll from "../Components/Scroll";
import ErrorBoundry from "../Components/ErrorBoundry";

function App () {
  // constructor () {
  //   super ()
  //   this.state = {
  //     robots: [],
  //     searchfield: ''
  //   }
  // }

  const [robots, setRobots] = useState([])
  const [ searchfield, setSearchField] = useState('')

  // componentDidMount () {
  //   fetch ('https://jsonplaceholder.typicode.com/users')
  //     .then (response => response.json())
  //     .then (users => {this.setState({ robots: users})});
  
  // }

  useEffect(() => {
    fetch ('https://jsonplaceholder.typicode.com/users')
      .then (response => response.json())
      .then (users => {setRobots(users)});
  }, []) // an empty array [] is a short cut for componentdidMount when using a class
  

  const onSearchChange = (event) => {
    setSearchField(event.target.value)
    // this.setState({ searchfield: event.target.value }) use this when using a class component.

  }

  const filteredRobot = robots.filter(robots => {
    return robots.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
  })

  return !robots.length ?
    <h1>Loading</h1> :
      (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobot} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
  }


export default App;
