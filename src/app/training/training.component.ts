import { Component } from '@angular/core';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [],
  templateUrl: './training.component.html',
  styleUrl: './training.component.css'
})
export class TrainingComponent {
  Certifications: string[] = ['Cisco Certification in Introduction to Networks', 'Cisco Certification in Cybersecurity Essentials'];

  Seminars: string[] = ['Morality in Media (2018)', 'Angeles: Formation Series on Christian Faith (2022)', 'Design of the Times: Exemplifying the Beauty of Design Through Implementation (2022)', 'Optimal Prime: The Quintessential Guide to a Famed Channel (2022)'];
}
