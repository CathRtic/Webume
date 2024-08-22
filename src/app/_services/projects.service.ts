import { Injectable } from '@angular/core';

import { Tag } from '../_models/tag';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {
      id: 0, 
      name: "OnePass", 
      pictures: ["OnePass/user.webp","OnePass/settings.webp"], projectLink: "//www.github.com/CathRtic/OnePass", 
      summary: "Locally run personal password manager", 
      description: "A simple password manager application built with Python, MongoDB and CustomTkinter. Locally store your passwords with encryption in a NoSQL Database, This password manager allows users to securely store and manage their passwords. It uses AES encryption to encrypt the passwords before storing them in a database run locally as a service.", 
      tags: [Tag.PYTHON]
    },

    {
      id: 1, 
      name: "Webume", 
      pictures: ["Webume/home.webp","Webume/portfolio.webp","Webume/resume.webp", "Webume/contact.webp"], 
      projectLink: "//github.com/CathRtic/Webume", 
      summary: "Interactive and visually appealing web-based resume or portfolio application", 
      description: "Webume is an interactive and visually appealing web-based resume or portfolio application. Designed to showcase your skills, experience, and projects in a modern and responsive format, Webume allows potential employers or clients to navigate your professional journey with ease.", 
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS]
    },

    {
      id: 2, 
      name: "MediaScripts", 
      pictures: [], 
      projectLink: "//github.com/CathRtic/MediaScripts", 
      summary: "collection of scripts to batch manipulate media files", 
      description: "Webume is an interactive and visually appealing web-based resume or portfolio application. Designed to showcase your skills, experience, and projects in a modern and responsive format, Webume allows potential employers or clients to navigate your professional journey with ease.", 
      tags: [Tag.POWERSHELL]
    }
  ];
  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id === id);

    if(project === undefined){
      throw new TypeError('There is no project that matches that ID: ' + id)
    }

    return project;
  }

  GetProjectsByFilter(filterTags: Tag[]){
      let filteredProjects: Project[] = [];

      this.projects.forEach(function (project){
        let foundAll = true;

        filterTags.forEach(function (filterTag){
          if (project.tags.includes(filterTag) == false){
            foundAll= false;
          }
        });

        if (foundAll) {
          filteredProjects.push(project);
        }
      });

      return filteredProjects;
  }
}
