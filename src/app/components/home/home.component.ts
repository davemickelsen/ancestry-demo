import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  config = {
    class: 'modal-dialog-centered'
  };
  registerForm: FormGroup;
  submitted = false;
  modalVisible: boolean;

  constructor(private formBuilder: FormBuilder) { }

  toggleModal(): void {
    this.modalVisible = !this.modalVisible;
    if (!this.modalVisible) {
      this.submitted = false;
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    else {
      this.modalVisible = false;
    }
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
