import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildFormComponent } from "../child-form/child-form.component";

@Component({
  selector: 'app-my-first-component',
  imports: [FormsModule, ChildFormComponent],
  templateUrl: './my-first-component.component.html',
  styleUrl: './my-first-component.component.css'
})
export class MyFirstComponentComponent {

  title: string = 'My First Component';
  checkBoxValue: boolean = false;
  // checkBoxValue1!: boolean;
  checkBoxValue2: boolean = false;

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

  handleClick() {
    alert('See ! you just click the magic button');
  }
 
  handleCheckBox(e: Event): void {

    const target = e.target as HTMLInputElement;
    this.checkBoxValue = target.checked;
  }
}
