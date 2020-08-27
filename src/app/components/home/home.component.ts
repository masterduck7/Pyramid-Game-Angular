import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { TranslateService } from '@ngx-translate/core';
import '@clr/icons';
import '@clr/icons/shapes/all-shapes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private titleService:Title,  public translate: TranslateService) {
    this.titleService.setTitle("Pyramid Game");
    translate.addLangs(['en', 'es']);
    let lang:string = localStorage.getItem('pyramid_lang')
    if (lang) {
      translate.setDefaultLang(lang);
    } else {
      translate.setDefaultLang('en');
      localStorage.setItem('pyramid_lang', 'en');
    }
    
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('pyramid_lang', lang);
  }

  ngOnInit(): void {
  }

}
