import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    dynamicForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

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

  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.dynamicForm.invalid) {
          return;
      }
      // display form values on success
      alert(JSON.stringify(this.dynamicForm.value, null, 4));
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
}
