import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css'],
})
export class RegisterationComponent {
  public form!: FormGroup;

  constructor(private ms: MainService) {
    if (ms.get_participant()?.email) {
      window.location.href = '';
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl(''),
      email: new FormControl('', [Validators.email, Validators.required]),
      phone_number: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(13),
      ]),
      organization: new FormControl(''),
      designation: new FormControl(''),
      consent: new FormControl(false),
    });
  }

  register() {
    console.log(this.form);
    localStorage.setItem('P_DATA', JSON.stringify(this.form.value));
    this.ms.register(this.form.value).subscribe((res: any) => {
      if (res.success) {
        localStorage.setItem('P_DATA', JSON.stringify(this.form.value));
      }
    });
  }
}
