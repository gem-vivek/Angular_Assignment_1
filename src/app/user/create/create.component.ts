import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { userDetails } from 'src/app/userdetails';
import { UsersService } from 'src/app/users.service';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern("^[ a-zA-Z]+$")]),
    gender: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
    mobile: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    technology1: new FormControl(false),
    technology2: new FormControl(false),
    technology3: new FormControl(false),
    technology4: new FormControl(false),
    technology5: new FormControl(false),
    picture: new FormControl(''),
  });
  constructor(private userService: UsersService, private changeDetector: ChangeDetectorRef) {
    this.dataUser = {
      name: '',
      gender: '',
      email: '',
      mobile: 1,
      category: '',
      technology: [],
      picture: ''

    }
  }
  dataUser: userDetails;

  ngOnInit(): void { }
  onSubmit() {
    this.dataUser.technology = [];
    if (this.loginForm.value.technology1) {
      this.dataUser.technology.push('C');
    }
    if (this.loginForm.value.technology2) {
      this.dataUser.technology.push('C++');
    }
    if (this.loginForm.value.technology3) {
      this.dataUser.technology.push('Python');
    }
    if (this.loginForm.value.technology4) {
      this.dataUser.technology.push('Java');
    }
    if (this.loginForm.value.technology5) {
      this.dataUser.technology.push('JavaScript');
    }
    console.log(this.loginForm.value)
    this.dataUser.name = this.loginForm.value.name;
    this.dataUser.email = this.loginForm.value.email;
    this.dataUser.gender = this.loginForm.value.gender;
    this.dataUser.mobile = this.loginForm.value.mobile;
    this.dataUser.category = this.loginForm.value.category;
    this.dataUser.picture = this.profileImage;
  }

  displayStyle = "none";

  openModal() {
    this.displayStyle = "block";

  }
  closeModal() {
    this.displayStyle = "none";
    this.dataUser;
  }

  submitForm() {
    this.userService.userData.push(this.dataUser)
    this.displayStyle = "none";
    this.loginForm.reset();
  }
  get name() {
    return this.loginForm.get('name');
  }
  get gender() {
    return this.loginForm.get('gender');
  }
  get email() {
    return this.loginForm.get('email');
  }
  get mobile() {
    return this.loginForm.get('mobile');
  }
  get category() {
    return this.loginForm.get('category');
  }
  get technologyArray() {
    return this.loginForm.get('technologyArray') as FormArray;
  }

  profileImage: any;
  Imageloaded: boolean = false;

  imageUpload(event: any) {
    var file = event.target.files.length;
    for (let i = 0; i < file; i++) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.profileImage = event.target.result;
        this.changeDetector.detectChanges();
      }
      reader.readAsDataURL(event.target.files[i]);
    }
  }
  handelImageLoad() {
    this.Imageloaded = true;
  }
}
