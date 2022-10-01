import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  

  constructor(
  ) {}

  ngOnInit(): void {
  }

  onSubmit(data: any) { 
    console.log(data.name);
    console.log(data.email);
    console.log(data.phoneNumber);
    console.log(data.message);
  }

}
