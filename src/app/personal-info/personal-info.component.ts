import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {
  name: string = 'Ethan James G. Gonzales';
  profession: string = 'Web Developer';
  gmail: string = 'ethanjamesgonzales088@gmail.com';
  pnum: string = '0998 292 9420';
  address: string = 'Mabalacat City, Pampanga';
  linkedin: string = 'https://www.linkedin.com/in/ejggonzales/'
  message: string = 'I am a newly graduated Web Developer with a good foundation in both front-end and back-end development. Throughout my academic journey, I have gained hands-on experience in HTML, CSS, JavaScript, and modern frameworks. My passion for coding and web development drives me to continually expand my technical skill set and adapt with the latest web technologies and trends from this ever-changing field.'
}


