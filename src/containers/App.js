import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import CardList from '../components/CardList'
import { User } from '../components/User'
import Search from '../components/Search';
import Scroll from '../components/Scroll';

import {stSearchField} from '../action';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    onSearchChange: (e) => dispatch(stSearchField(e.target.value))
  }
}

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      user: [],
    }
  }

  componentDidMount(){
    this.setState({user: User})
  }

  render(){
    const { user } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredUser = user.filter(users => {
      return users.name.toLowerCase().includes(searchField.toLowerCase())
    })
  
    const arr = Object.entries(filteredUser);

    return(
    <div className='tc'>
      <h1> My Memories 's My Priorities</h1>
      <Search searchChange={onSearchChange}/>
      <Scroll>
        <CardList user={ filteredUser } result={arr.length}/>
      </Scroll>
    </div>
  )
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
