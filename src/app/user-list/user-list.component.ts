import { Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material';
import { User } from "../Models/data-model";
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  dataSource:MatTableDataSource<User>;
  displayedColumns: string[] = ['username', 'email', 'phone', 'address'];

  constructor(private userService:UserService) {
    
  }

  ngOnInit() {
    this.userService.getUserList().subscribe(
      data => {
        this.dataSource = new MatTableDataSource<User>(data);
      }
    );
  }

}
