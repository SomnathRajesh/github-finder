import React, { useEffect, useContext } from 'react';
import githubContext from '../../context/github/githubContext';
const User = ({ match }) => {
  const GithubContext = useContext(githubContext);
  const { user, loading, getUser } = GithubContext;
  useEffect(() => {
    getUser(match.params.login);
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  return <div>{name}</div>;
};

export default User;
