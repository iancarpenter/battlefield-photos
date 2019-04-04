import { Injectable } from '@angular/core';
import { Photo } from './photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private photos: Photo[] = [
    new Photo('Bray-Dunes',
      'A photo from Bray-Dune',
      '../assets/cl4.jpg'),
    new Photo('Cassel',
      'A photo from the town of Cassel',
      '../assets/5dune2.jpg'),
  ];

  constructor() { }

  getPhotos() {
    // returns a copy of the array rather than the reference to it
    return this.photos.slice();
  }

  getPhotoByIndex(index: number) {
    return this.photos[index];
  }

  getPhotoByName(name: string) {
    return this.getPhotos().find(x => x.name === name);
  }

}
