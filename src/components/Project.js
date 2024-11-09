import React from 'react';

import calcProject from '../assets/project-unsplash1.jpg';
import freelancerProject from '../assets/project-unsplash1.jpg';
import recipeProject from '../assets/project-unsplash1.jpg';
import bookStore from '../assets/project-unsplash1.jpg';
import RestApi from '../assets/project-unsplash1.jpg';

import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full ">
      <div className="flex flex-col">
        <h1 className="text-[20px] md:text-[40px] font-sora text-[#FBFBFB] md:leading-[72px]">
          What I have Build
        </h1>
      </div>

      <div className="grid p-8 md:p-12 md:grid-cols-2 gap-8">
        <ProjectItem
          title="Book Store"
          backgroundImg={bookStore}
          projectUrl="#"
          tech="Golang, VueJs"
        />
        <ProjectItem
          title="Lorem 2"
          backgroundImg={freelancerProject}
          projectUrl="#"
          tech="Vue,Vuex and FireBase"
        />
        <ProjectItem
          title="Lorem 3"
          backgroundImg={recipeProject}
          projectUrl="#"
          tech="Angular and FireBase"
        />
        <ProjectItem
          title="Lorem 4"
          backgroundImg={RestApi}
          projectUrl="#"
          tech="Node, Express, and MongoDb"
        />
        <ProjectItem
          title="Lorem 5"
          backgroundImg={calcProject}
          projectUrl="#"
          tech="React JS"
        />
      </div>
    </div>
  );
};

export default Projects;