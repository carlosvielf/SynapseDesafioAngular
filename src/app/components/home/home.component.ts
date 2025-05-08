import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  termos = Array.from({length: 6}, (_, i) => ({id: i +1}));

  cores = [
    '#E2F4C5',
    '#EEE7DA',
    '#A5DD9B',
    '#C5EBAA',
    '#FFFFDD',
    '#AFC8AD',
  ]

}
