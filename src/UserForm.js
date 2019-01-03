import React from 'react';
import faker from 'faker';

export default class UserForm extends React.Component{
  constructor(){
    super();
    this.state = {
      name: ''
    };
  }
  changeName = (ev) => {
    this.setState({ name: ev.target.value });
  }
  addUser = () => {
    this.props.addUser({ name: this.state.name, id: faker.random.number()});
    this.setState({ name: '' });
  }
  render(){
    const { addRandomUser } = this.props;
    const { name } = this.state;
    const { changeName, addUser } = this;
    const inValid = name.length === 0;
    return (
      <div>
        <div className='form-group'>
          <input onChange={ changeName } className='input-control' value={ name }/>
        </div>
       <div style={ { marginBottom: '10px' } } >
        <button onClick={ addUser } className='btn btn-warning' disabled={ inValid }>Add a Company</button>
        { ' ' }
        <button onClick={ addRandomUser } className='btn btn-primary'>Create a Company</button>
      </div>
      </div>
    );
  }
}
