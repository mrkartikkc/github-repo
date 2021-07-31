import { CLIENT_SECRET } from '../login/loginin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CLIENT_ID } from '../login/loginin';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService  {

  constructor(private httpClient: HttpClient) { }

  public getProfile(searchQuery: string): Observable<any>{
    return this.httpClient.get<any>
    (`https://api.github.com/users/${searchQuery}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
     
  }


  public getRepos(searchQuery: string): Observable<any[]>{
    return this.httpClient.get<any>
    (`https://api.github.com/users/${searchQuery}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`) 
  }


}


