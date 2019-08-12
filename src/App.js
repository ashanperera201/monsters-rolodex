import React, { Component } from 'react';
import { SearchBox } from './components/search-box/search-box.component';
import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    this.loadUserData();
  }

  loadUserData = () => {
    fetch('https://jsonplaceholder.typicode.com/users').then(serviceResponse => {
      if (serviceResponse) {
        serviceResponse.json()
          .then(users => this.setState({ monsters: users }));
      }
    })
  }

  onChangeEventHandler = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    let { monsters, searchField } = this.state;
    let filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1> Monsters Roladex </h1>
        <SearchBox
          placeholder={'search monsters'}
          handleChangeEvent={this.onChangeEventHandler}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
