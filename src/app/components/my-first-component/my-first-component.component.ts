import { Component } from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  imports: [],
  templateUrl: './my-first-component.component.html',
  styleUrl: './my-first-component.component.css'
})
export class MyFirstComponentComponent {

  title: string = 'My First Component';

  user: any = {
    name: 'Shahid',
    age: 24
  }

  constructor() {
    setTimeout(() => {

      this.user = {
        name: 'SHAHID',
        age: 24
      }
    }, 2000)
  }

}
