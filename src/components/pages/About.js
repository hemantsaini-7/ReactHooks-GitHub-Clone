import React from "react";

const About = () => {
  return (
    <div className='about-div'>
      <h1 className='about-head'>About Project</h1>
      <div className='content-div'>
        <h1 className='content-head'># Project Specifications :</h1>
        <ul className='list'>
          <li className='list-item'>~ React Hooks</li>
          <li className='list-item'>~ React Routing</li>
          <li className='list-item'>~ React Linking</li>
          <li className='list-item'>~ React JSON Fetching</li>
        </ul>
      </div>
      <div className='content-div'>
        <h1 className='content-head'># Project Description :</h1>
        <p className='content-para'>
          A ReactJS Application developed via React Hooks, acting as a Github
          Clone for Users consisting Search Query, the DOM displays the Users
          Component with individual User consisting of the Users Repos, Public
          Gists and more functionalities.
        </p>
      </div>
      <div className='content-div'>
        <h1 className='content-head'># Developer Details :</h1>
        <h4>
          <i className='fa fa-github fa-2x'></i> :
          https://github.com/hemantsaini-7
        </h4>
        <h4>
          <i className='fa fa-linkedin fa-2x'></i> :
          https://www.linkedin.com/in/hemant-saini-2158a01a5/
        </h4>
      </div>
    </div>
  );
};
export default About;
