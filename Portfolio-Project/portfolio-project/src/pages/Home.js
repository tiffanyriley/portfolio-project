import React from 'react';
import ProjectList from '../components/ProjectList';

const projects = [
  {
    title: 'Project 1',
    description: 'Description for project 1.',
    image: 'images/project1.png',
  },
  // Add more projects as needed
];

const Home = () => {
  return (
    <div className="home">
      <h1>My Coding Projects</h1>
      <ProjectList projects={projects} />
    </div>
  );
};

export default Home;
