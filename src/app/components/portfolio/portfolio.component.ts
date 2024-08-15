import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { Project } from '../../_models/Project';
import { NgFor, CommonModule } from '@angular/common';
import { ProjectsService } from '../../_services/projects.service';
import { Tag } from '../../_models/tag';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent, NgFor, FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'] // Corrected to styleUrls
})
export class PortfolioComponent implements OnInit { 
  
  projects: Project[] = [];
  isCollapsed: boolean = true;
  isAnimated: boolean = true;
  isFiltered: boolean = false;

  typescript: boolean = false;
  angular: boolean = false;
  javascript: boolean = false; 
  python: boolean = false; 
  csharp: boolean = false; 
  java: boolean = false;
  nodejs: boolean = false;
  aspnet: boolean = false;
  react: boolean = false; 
   
  
  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Nikunj Patel - Portfolio');
  }

  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  Filter(){
    let filterTags: Tag[] = [];

    if (this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.angular){
      filterTags.push(Tag.ANGULAR);
    }
    if (this.javascript){
      filterTags.push(Tag.JAVASCRIPT);
    }
    if (this.python){
      filterTags.push(Tag.PYTHON);
    }
    if (this.java){
      filterTags.push(Tag.JAVA);
    }
    if (this.nodejs){
      filterTags.push(Tag.NODEJS);
    }
    if (this.aspnet){
      filterTags.push(Tag.ASPNET);
    }
    if (this.react){
      filterTags.push(Tag.REACT);
    }
    if (this.csharp){
      filterTags.push(Tag.CSHARP);
    }

    if (this.typescript || this.angular || this.javascript || this.python || this.java || this.nodejs || this.aspnet || this.react || this.csharp){
      this.isFiltered = true;
    }
    else{
      this.isFiltered = false;
    }
    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  resetFilters(){

    this.typescript = false;
    this.angular = false;
    this.javascript = false; 
    this.python = false; 
    this.csharp = false; 
    this.java = false;
    this.nodejs = false;
    this.aspnet = false;
    this.react = false; 

    this.isFiltered = false;

    this.projects = this.projectService.GetProjects();
  }
}
