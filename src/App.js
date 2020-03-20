import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Table from './components/Table';
import API from './utils/API';

class App extends Component {
state={
  users: [],
  orderBy: 'a2z',
}
  componentDidMount(){
    API.getDummy().then(goku=> this.setState({
      users: goku.data.results
    }))
  }

  render(){
    return(
       <div className="App">
      <Navbar />
      <Search />
      <Table data={this.state.users}/>
    </div>
    )
  }
}

export default App;
