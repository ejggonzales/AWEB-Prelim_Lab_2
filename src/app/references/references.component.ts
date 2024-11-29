import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [NgFor],
  templateUrl: './references.component.html',
  styleUrl: './references.component.css'
})
export class ReferencesComponent {
  references: References[] = [
    {
      name: 'Oscar M. Gonzales Jr.',
      profession: 'Cybersecurity Specialist',
      company: 'Owens Asia, Inc.',
      phone: '09123456789'
    },
    {
      name: 'Joshua O. Guevarra',
      profession: 'Technical Support',
      company: 'Concentrix',
      phone: '09123456789'
    }
  ]
}

export interface References {
  name: string;
  profession: string;
  company: string;
  phone: string;
}
