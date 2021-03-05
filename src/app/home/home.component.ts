import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toContact(){
   const element = document.getElementById('contact');
    const yOffset = -100;
    if(element !==null){
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
       window.scrollTo({top: y, behavior: 'smooth'});
  }
}

}
