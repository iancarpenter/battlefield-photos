import { Injectable } from '@angular/core';
import { Photo } from './photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private photos: Photo[] = [
    new Photo('bray-dunes',
      // tslint:disable-next-line:max-line-length
      'Bray-Dunes was one of the beaches used during Dunkirk evacuation. It’s iconic sand dunes feature in many photos taken during this time.',
      ['../assets/5dune2t.jpg',
       '../assets/5dune2t.jpg',
       '../assets/5dune2t.jpg',
       '../assets/5dune2n.jpg', 
       '../assets/5dune3n.jpg', 
       '../assets/5dune4n.jpg']),
    new Photo('cassel',
      'A photo from the town of Cassel',
      ['../assets/cl4.jpg']),
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
    return this.getPhotos().find(x => {
      return x.name === name;
    });
    // return this.getPhotos().filter(x => x.name === name);

  }

}
