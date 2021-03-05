import { Component, OnInit } from '@angular/core';
import {  FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formData!:FormGroup;

  constructor(private contact: ContactService) { }



  ngOnInit() {
    this.formData = new FormGroup({
      'Fullname': new FormControl(null, [Validators.required]),
      'Email': new FormControl(null, [Validators.required, Validators.email]),
      'Comment': new FormControl(null, [Validators.required])
    });
  }

  onSubmit(formData:any){
    console.log(FormData)
   this.contact.postMessage(formData)
    .subscribe(response => {
     location.href = 'https://mailthis.to/confirm'
     console.log(response);
     }, error => {
     console.warn(error.responseText)
      console.log({ error })
     });
     this.formData.reset();

    }



}
