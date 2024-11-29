import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [NgFor],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})

export class EducationComponent {
  education: Education[] = [
    {
      school: 'Holy Angel University',
      level: 'College',
      year: '2022 - Present',
      address: '#1 Holy Angel Avenue, Sto. Rosario, Angeles City, Philippines'
    },
    {
      school: 'Holy Angel University',
      level: 'Junior and Senior High School',
      year: '2016 - 2022',
      address: '#1 Holy Angel Avenue, Sto. Rosario, Angeles City, Philippines'
    },
    {
      school: 'Bestow Emmanuel College Foundation',
      level: 'Elementary',
      year: '2014 - 2016',
      address: 'Madapdap Resettlement Center, Mabalacat City, Philippines'
    },
    {
      school: 'San Guillermo Archdiocesan School',
      level: 'Elementary',
      year: '2008 - 2014',
      address: 'Madapdap Resettlement Center, Mabalacat City, Philippines'
    }
  ]
}

export interface Education {
  school: string;
  level: string;
  year: string;
  address: string;
}
