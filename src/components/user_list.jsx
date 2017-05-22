import React, {Component} from 'react'; 
import {connect} from 'react-redux';
import * as actions from '../actions'; 

class UserList extends Component{ 
  componentWillMount(){
    this.props.getUsers(); 
  }

  renderUsers(){
    return this.props.users.map((user) => {
      return(
        <div className="card card-block" key={user.id}> 
          <h4 className="card-title">{user.name}</h4> 
          <p className="card-text">{user.company.name}</p> 
          <a className="btn btn-primary"> {user.email}</a> 
        </div> 
      )
    });
  } 

  render(){
    return(
      <div> 
        {this.renderUsers()} 
      </div> 
    );
  }
}

function mapStateToProps(state){
  return {users: state.users} 
}

export default connect(mapStateToProps,actions)(UserList); 

