import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
const User=({getUser,getUserRepos,match,user,repos})=>  {
  componentDidMount() {
    getUser(match.params.login);
    getUserRepos(match.params.login);
  }

    const {
      name,
      company,
      avatar_url,
      location,
      bio,
      blog,
      login,
      followers,
      html_url,
      following,
      public_repos,
      public_gists,
      hireable,
    } = user;

    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back To Search
        </Link>
        Hireable={" "}
        {hireable ? (
          <i className='fas fa-check text-success' />
        ) : (
          <i className='fas fa-times-circle text-danger' />
        )}
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              className='round-img'
              alt=''
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className='btn btn-dark my-1'>
              Visit GitHub Profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username :</strong>
                    {login}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company :</strong>
                    {company}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Website :</strong>
                    {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Followers: {followers}</div>
          <div className='badge badge-success'>Following: {following}</div>
          <div className='badge badge-dark'>
            Public Repositories: {public_repos}
          </div>
          <div className='badge badge-light'>Public Gists: {public_gists}</div>
        </div>
        <Repos repos={this.props.repos} />
      </Fragment>
    );
  
}

export default User;
