import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  content:any =[];
  allData:any =[];
  constructor(private userService: UserService,private token: TokenStorageService) { }


  searchCriteria: string = 'firstName';
  searchText: string = '';

  search() {
    // Filter the data based on the selected criteria and text
    this.allData =  this.content;
    this.content = this.allData.filter((person: { [x: string]: string; }) => {
      return person[this.searchCriteria].toLowerCase().includes(this.searchText.toLowerCase());
    });
  }
  clearSearch() {
    // Clear the search criteria and text
    this.searchCriteria = 'firstName';
    this.searchText = '';
    // Also, refresh the filtered data if needed
    this.content = this.token.getUser;
    window.location.reload();
  }
  removeUser(userId: string) {
    this.token.deleteUser(userId).subscribe({
      next: data => {
        console.log(data);
        
        this.content = data;
      },
      error: err => {
        console.log(err);
        this.content = JSON.parse(err.error).message;
      }
    });;
    window.location.reload();
  }

  openUpdateForm(user: any) {
  }
  ngOnInit(): void {
    this.token.getUsers().subscribe({
      next: data => {
        console.log(data);
        
        this.content = data;
      },
      error: err => {
        console.log(err);
        this.content = JSON.parse(err.error).message;
      }
    });
  }
}
