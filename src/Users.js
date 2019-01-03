import React from 'react';
import User from './User';

export default ({ users, deleteUser, goToEditMode, editing, edit })=> {
  return (
    <ul className='list-group'>
      {
        users.map( user => <User deleteUser={ deleteUser } key={ user.id } user={ user } goToEditMode={ goToEditMode } editing={ editing } cancel={()=> goToEditMode('')} edit={ edit }/>) 
      }
    </ul>
  );
};

