import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'template-driven-form';

  @ViewChild('registerationForm') form : NgForm | undefined;


  firstName : string = "";
  lastName : string =""
  emailAddress : string = "";
  dateofbirth : string = ""
  username: string="";
  streetAddress1: string='';
  streetAddressLine2: string='';
  country: string='';
  city: string='';
  region: string='';
  postalCode: string='';

  // address = {
  //   streetAddress: '',
  //   streetAddressLine2: '',
  //   country: '',
  //   city: '',
  //   region: '',
  //   postalCode: ''
  // };


  //Array to loop gender
  Genders = [
    {id:"check-male", value:"male" , display:"Male"},
    {id:"check-female", value:"female" , display:"Female"},
    {id:"check-other", value:"other" , display:"Prefer Not Say"},
  ]
  OnFormSubmitted(){
    console.log(this.form?.value.firstname);
    console.log(this.form)
    // console.log(this.form?.value.dob)
    // console.log(this.form?.value.country)
    console.log(this.form?.value.address.country)

  }

  // Generate username button logic
  GenerateUsername(){
    // first check fname is greater than 3 so take first 3 letters and append with username
    if(this.firstName.length >=3){
      this.username += this.firstName.slice(0,3);
    }else{
      //if fname is less tahn 3 then append all letter
      this.username += this.username
    }
    // first check lname is greater than 3 so take first 3 letters append with username
    if(this.lastName.length >=3){
      this.username += this.lastName.slice(0,3);
    }else{
      //if lname is less tahn 3 then append all letter
      this.username += this.username
    }

    // get the year from the given date of birth and append that year to usernam
    let dataTime = new Date(this.dateofbirth);
    this.username += dataTime.getFullYear();
    this.username = this.username.toLocaleLowerCase();
    console.log(this.username) 

    // this.form?.setValue({
    //   firstname: this.form.value.firstname,
    //   lastname: this.form.value.lastname,
    //   email: this.form.value.email,
    //   phone: this.form.value.phone,
    //   dob: this.form.value.dob,
    //   gender: this.form.value.gender,
    //   username: this.username,
    //   address: {
    //     streetAddress: this.form?.value.address.streetAddress1,  // Updated to match control name
    //     streetAddressLine2: this.form?.value.address.streetAddressLine2, 
    //     country: this.form.value.address.country,
    //     city: this.form.value.address.city,
    //     region: this.form.value.address.region,
    //     postal: this.form.value.address.postal
    //   }
    // })

    this.form?.form.patchValue({
      username: this.username,

      
      // address:{
      //   country:'USA'
      // }
    })
  }
  

}
