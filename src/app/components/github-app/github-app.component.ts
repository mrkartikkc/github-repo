import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit  {

  public githubUserQuery!:string;
  public githubProfile:any;
  public githubRepos: any;
  public errorMessage: string="";


  constructor(private githubService:GithubService) { }

  public searchUser() {

    this.githubService.getProfile(this.githubUserQuery).subscribe( data => {
      this.githubProfile = data
      console.log(data)})

    this.githubService.getRepos(this.githubUserQuery).subscribe(data => {
      this.githubRepos = data 
      console.log(data)})
  }
    




  ngOnInit(): void {
  }

}
function next(next: any, arg1: (data: any) => void, error: any, arg3: () => void) {
  throw new Error('Function not implemented.');
}

