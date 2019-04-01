import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    this.errorMessage = this.route.snapshot.data['message'];

    this.route.data
    .subscribe(
      (data: Data) => {
        // tslint:disable-next-line:no-string-literal
        this.errorMessage = data['message'];
      }
    );
  }

}
