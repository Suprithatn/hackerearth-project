import { HttpClient } from '@angular/common/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userId: string;
  singleUserDetail:any;
  error = null;
  
  constructor(private route:ActivatedRoute, private http:HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params) => {
        this.userId = params['id'];
        this.http.get('https://api.github.com/users/'+this.userId).subscribe(
          userDetail => {
            this.singleUserDetail = userDetail;
            this.error = null;
          },
          error => {
            this.error = error.message;
          }
        );
      }
    );
  }

  

}


