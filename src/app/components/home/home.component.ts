import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  // -------------------------------------------------------------------- 
  imports: [
    HeaderComponent
  ],
  // ---- Para utilizar o componente header deve-se realizar a importação 
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
