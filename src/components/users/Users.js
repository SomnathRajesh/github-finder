import React, { useContext } from 'react';
import Useritem from './Useritem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import githubContext from '../../context/github/githubContext';

const Users = () => {
  const GithubContext = useContext(githubContext);
  const { loading, users } = GithubContext;
  if (loading) {
    return <Spinner></Spinner>;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <Useritem key={user.id} user={user}></Useritem>
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};

export default Users;
