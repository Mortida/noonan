import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import CardList from '../components/CardList'
import Search from '../components/Search';
import Scroll from '../components/Scroll';

import {stSearchField, gitUsers} from '../action';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchUser.searchField,
    user: state.requestUser.user,
    isPending: state.requestUser.isPending,
    error: state.requestUser.error
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    onSearchChange: (e) => dispatch(stSearchField(e.target.value)),
    onRequestUser: () => dispatch(gitUsers)
  }
}

class App extends React.Component {

  componentDidMount(){
    this.props.onRequestUser()
  }

  render(){
    const { searchField, onSearchChange, user, isPending } = this.props;
    const filteredUser = user.filter(users => {
      return users.name.toLowerCase().includes(searchField.toLowerCase())
    })
  
    const arr = Object.entries(filteredUser);
    const loading = document.querySelector('root')
    
      if(isPending){
          return loading.style.display = 'none';
      }else{
        
        return <div className='tc'>
            <h1> My Memories 's My Priorities</h1>
            <Search searchChange={onSearchChange}/>
            <Scroll>
              <CardList user={ filteredUser } result={arr.length}/>
            </Scroll>
          </div>
        
      }
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
