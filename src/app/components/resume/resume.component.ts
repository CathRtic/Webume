import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [AccordionModule, NgIf],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  IsWorkExperienceOpen: boolean = false;
  IsEducationOpen: boolean = false;
  IsCertificationsOpen: boolean = false;
  IsSkillsOpen: boolean = false;

  constructor(private titleService: Title, private renderer: Renderer2){
    this.titleService.setTitle('Nikunj Patel - Resume')
  }

  DownloadPDF(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'Resume.pdf');
    link.setAttribute('download', 'Resume.pdf');
    link.click();
    link.remove();
  }
}

