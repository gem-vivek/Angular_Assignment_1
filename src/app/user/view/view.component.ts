import { Component, OnInit } from '@angular/core';
import { userDetails } from 'src/app/userdetails';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  userDataFromCreate: userDetails[] = [];

  constructor(private usersService: UsersService) {
    this.userDataFromCreate = this.usersService.userData;
    console.warn(this.userDataFromCreate);
  }
  ngOnInit(): void {
  }
}
