import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  toHome(){
    document.getElementById('home')?.scrollIntoView({behavior:'smooth'});
  }

  toAbout(){
    const element = document.getElementById('about');
    this.createOffset(element);
  }

  toSkills(){
    const element = document.getElementById('skills');
    this.createOffset(element);
  }

  toWork(){
    const element = document.getElementById('work');
    this.createOffset(element);
  }

  toContact(){
    const element = document.getElementById('contact');
    this.createOffset(element);

  }

  createOffset(element:any){
    const yOffset = -100;
    if(element !==null){
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
       window.scrollTo({top: y, behavior: 'smooth'});
    }
  }
}
