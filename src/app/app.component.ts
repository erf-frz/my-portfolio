import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {



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

  ngAfterViewInit(){
     document.addEventListener('DOMContentLoaded', nav);
    function nav(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar');
    burger?.addEventListener('click', ()=>{
        nav?.classList.toggle('show');
    })
}
  }

  // displayMenu(){
  //   let menuIcon = document.getElementsByClassName('bx-menu');
  //   let navList = document.getElementById('nav-list');
  //   if(navList){
  //     if(navList.style.display === 'none'){
  //       navList.style.display = 'inline-block';
  //       // menuIcon.classList.remove('bx-menu');
  //       // menuIcon.classList.add('bx-x');
  //     }else if(navList.style.display = 'inline-block'){
  //       navList.style.display = 'none';
  //     }
  //   }
  // }


}
