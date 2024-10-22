import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'template-driven-form';

  @ViewChild('registerationForm') form : NgForm | undefined;

  OnFormSubmitted(){
    console.log(this.form?.value.firstname);
    console.log(this.form?.value.dob)
    console.log(this.form?.value.country)

  }
  

}
