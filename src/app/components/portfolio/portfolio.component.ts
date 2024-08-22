import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { trigger, state, style, transition, animate } from '@angular/animations'; // Import animation functions
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
  styleUrls: ['./portfolio.component.css'],
  animations: [  // Add animations array
    trigger('filterAnimation', [
      state('collapsed', style({
        height: '0px',
        opacity: 0,
        overflow: 'hidden'
      })),
      state('expanded', style({
        height: '*',
        opacity: 1
      })),
      transition('collapsed <=> expanded', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class PortfolioComponent implements OnInit { 
  
  projects: Project[] = [];
  isCollapsed: boolean = true;

  typescript: boolean = false;
  angular: boolean = false;
  javascript: boolean = false; 
  python: boolean = false; 
  java: boolean = false;
  nodejs: boolean = false;
  powershell: boolean = false;
  react: boolean = false; 
  
  isFiltered: boolean = false;
  
  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Nikunj Patel - Portfolio');
  }

  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  Filter() {
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
    if (this.powershell){
      filterTags.push(Tag.POWERSHELL);
    }
    if (this.react){
      filterTags.push(Tag.REACT);
    }

    if (this.typescript || this.angular || this.javascript || this.python || this.java || this.nodejs || this.powershell || this.react){
      this.isFiltered = true;
    } else {
      this.isFiltered = false;
    }
    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  resetFilters() {
    this.typescript = false;
    this.angular = false;
    this.javascript = false; 
    this.python = false; 
    this.java = false;
    this.nodejs = false;
    this.powershell = false;
    this.react = false; 

    this.isFiltered = false;

    this.projects = this.projectService.GetProjects();
  }
}
