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
          <li className='list-item'>~ React Json Fetching</li>
        </ul>
      </div>
      <div className='content-div'>
        <h1 className='content-head'># Project Description :</h1>
        <p className='content-para'>
          A ReactJS Application developed via React Hooks, acting as a Github
          Clone for Users consisiting Search Query, the DOM displays the Users
          Component with indivitual User consisiting the Users Repos and Public
          Gists
        </p>
        <h3>Project DOM Flow</h3>
        {/* <img src= /> */}
      </div>
      <div className='content-div'>
        <h1 className='content-head'># Developer Details :</h1>
        <p>
          # Developed By <strong>Hemant Saini</strong>
        </p>
        <p>GitHub :</p>
        <p>LinkedIn :</p>
      </div>
    </div>
  );
};
export default About;
