import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { UserService } from 'src/app/services/user.service'
import { UserRegister } from 'src/app/shared/interfaces/user-register.interface'
import { PasswordsMatchValidator } from 'src/app/shared/validators/password_match_validator'

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  standalone: false,
})
export class RegisterPageComponent implements OnInit {

  registerForm!: FormGroup
  isSubmitted = false
  returnUrl = ''


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(10)]]
    }, {
      validators: PasswordsMatchValidator('password', 'confirmPassword')
    })
    
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl
  }

  get fc() {
    return this.registerForm.controls
  }

  submit() {
    this.isSubmitted = true
    if (this.registerForm.invalid) return

    const fv = this.registerForm.value

    const user: UserRegister = {
      name: fv.name,
      email: fv.email,
      password: fv.password,
      confirmPassword: fv.confirmPassword,
      address: fv.address
    }

    this.userService.register(user).subscribe(_ => {
      this.router.navigateByUrl(this.returnUrl)
    })
  }

}
