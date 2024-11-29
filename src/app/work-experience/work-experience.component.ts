import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  Projects: string[] = ['Developed skills in various programming languages', 'Developed different kinds of website-related outputs', 'Collected and analyzed data using surveys and interviews.', 'Developed a final presentation and report, which was presented to a panel of professors.'];

  Activities: string[] = ['Developed teamwork and leadership skills', 'Developed communication and organizational skills while interacting with other people', 'Helped in organizing certain events and overseeing communications and participant coordination'];

  Leadership: string[] = ['Managed team members during school-related projects', 'Developed strong public speaking, negotiation, and conflict resolution skills', 'Often elected as a class officer'];

  Tutoring: string[] = ['Tutored friends and family members in subjects like mathematics and science', 'Developed personalized lesson plans and study strategies based on individual student needs and learning styles.', 'Strengthened interpersonal and communication skills through regular interaction']
}
