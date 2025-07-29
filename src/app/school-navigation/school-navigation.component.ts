import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-school-navigation',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './school-navigation.component.html',
  styleUrl: './school-navigation.component.css'
})
export class SchoolNavigationComponent {

}
