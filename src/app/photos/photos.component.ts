import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Photo } from '../photo.model';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  battlefield: string;

  // photos: Photo[];
  photo: Photo;


  constructor(private route: ActivatedRoute,
              private photoService: PhotoService) { }

  ngOnInit() {
    const paramName: string = 'name';

    this.route.params
    .subscribe(
      (params: Params) => {
        this.battlefield = params[paramName];
        console.log('the battlefield is: ' + this.battlefield  );
        this.photo = this.photoService.getPhotoByName(this.battlefield);
        console.log('value returned from getPhotoByName is ' + this.photo.name);
      }
    );
  }

}
