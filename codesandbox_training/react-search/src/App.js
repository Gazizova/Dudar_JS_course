import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import clientList from "./data.json";
import RenderUsersList from './clientList'
import FilterUserList from './filterUsers'
import UsersResults from './usersResults'
import UsersResultsRow from './usersResultsRow'
import SearchInput from "./SearchInput";
import UserSorting from './usersSorting'
import sortByName2 from './usersSorting2'
import UsersResults2ndSample from './usersResults2ndSample'

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            filterUserList: FilterUserList(clientList, '')
        };
    }
    handleSearchChange= input => {
        this.setState({
            filterUserList: FilterUserList(clientList, input.target.value)
        })
    }

    clearAllButton = () =>{
        const search_field = document.getElementById('search'); // как адекватно передавать ИД елемента, если он рендерится в другом компоненте?
        search_field.form.reset();
        this.setState({
            filterUserList: FilterUserList(clientList, '')
        })
    }

    sortbyAsc =() =>{
        const arr = sortByName2(0, clientList)
        console.log("sortbyAsc")
        console.log(arr)
        this.setState({
            filterUserList: FilterUserList(arr, '')
        })
    }

    sortbyDesc =() =>{
        const arr = sortByName2(1, clientList)
        console.log("sortbyDesc")
        console.log(arr)
        this.setState({
            filterUserList: FilterUserList(arr, '')
        })
    }

    render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
              <form id="find_form">
                      <SearchInput textChange={this.handleSearchChange} asc={this.sortbyAsc} desc={this.sortbyDesc} clear={this.clearAllButton}/>
                      <UsersResults dataList={this.state.filterUserList}/>
              </form>
          </div>

    );
  }
}

export default App;
