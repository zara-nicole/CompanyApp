import React from 'react';

class UserEditForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: this.props.user.name 
    };
  }
  changeName = (ev) => {
    this.setState({ name: ev.target.value });
  }
  render(){
    const { name } = this.state;
    const { changeName } = this;
    const inValid = name.length === 0 || this.props.user.name === name;
    return (
      <li className='list-group-item'>
        <div className='form-group'>
          <input onChange={ changeName } className='input-control' value={ name }/>
        </div>
       <div style={ { marginBottom: '10px' } } >
        <button onClick={()=> this.props.cancel()}>Cancel</button>
        <button disabled={ inValid } onClick={ ()=> this.props.edit({ id: this.props.user.id, name: this.state.name })}>Save</button>
      </div>
      </li>
    );
  }
}

export default ({ user, deleteUser, goToEditMode, editing, cancel, edit })=> {
  if(editing === user.id){
    return (
      <UserEditForm user={ user } cancel={ cancel } edit={ edit }/>
    );
  }
  return (
    <li className='list-group-item'>
      <span onClick={()=> goToEditMode(user.id)}>{ user.name }</span>
      <button className='btn btn-danger' onClick={ ()=>  deleteUser(user.id)} style={{ float: 'right' }}>x</button>
    </li>
  );
};

