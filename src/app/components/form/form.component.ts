import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    dynamicForm: FormGroup;
    submitted = false;
    modalError:boolean = false;

    constructor(private formBuilder: FormBuilder, private route: Router, public translate: TranslateService) {
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

    ngOnInit() {
        this.dynamicForm = this.formBuilder.group({
            mode: [null, Validators.required],  
            height: [null, Validators.required],
            numberPlayers: ['', Validators.required],
            players: new FormArray([])
        });
    }

    // convenience getters for easy access to form fields
    get f() { return this.dynamicForm.controls; }
    get t() { return this.f.players as FormArray; }
    get h() { return this.f.height; }
    get m() { return this.f.mode; }

    onChangeTickets(e) {
        const numberPlayers = e.target.value || 0;
        if (this.t.length < numberPlayers) {
            for (let i = this.t.length; i < numberPlayers; i++) {
                this.t.push(this.formBuilder.group({
                    name: ['', Validators.required]
                }));
            }
        } else {
            for (let i = this.t.length; i >= numberPlayers; i--) {
                this.t.removeAt(i);
            }
        }
    }

    checkRepeatedPlayers() {
        let checkPlayers:string[] = [];
        let result:string = "";
        this.f.players.value.forEach(player => {
            if (checkPlayers.includes(player.name)) {
                result = 'error';
            }else{
                checkPlayers.push(player.name)
            }
        });
        return result;
    }

    onSubmit() {
        this.submitted = true;
        // Check is any name is repeated
        let test:string = this.checkRepeatedPlayers();
        if (test === 'error') {
            this.modalError = true;
            return;
        }
        // stop here if form is invalid
        if (this.dynamicForm.invalid) {
            return;
        }
        // Save Game data in Local Storage
        localStorage.setItem('pyramid_height',this.f.height.value)
        localStorage.setItem('pyramid_mode',this.f.mode.value)
        localStorage.setItem('pyramid_users',JSON.stringify(this.f.players.value))
        this.route.navigate(['/game']);
    }

    onReset() {
        // reset whole form back to initial state
        this.submitted = false;
        this.dynamicForm.reset();
        this.t.clear();
    }

    onClear() {
        // clear errors and reset ticket fields
        this.submitted = false;
        this.t.reset();
        this.h.reset();
        this.m.reset();
    }

    closeModalError() {
        this.modalError = false;
    }
}
