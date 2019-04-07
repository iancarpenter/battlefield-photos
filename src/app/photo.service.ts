import { Injectable } from '@angular/core';
import { Photo } from './photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private photos: Photo[] = [
    new Photo('Bray-Dunes',
      // tslint:disable-next-line:max-line-length
      'Bray-Dunes was one of the beaches used during Dunkirk evacuation. It’s iconic sand dunes feature in many photos taken during this time.',
      ['../assets/5dune2t.jpg',
       '../assets/5dune2t.jpg',
       '../assets/5dune2t.jpg'
       ]),
    new Photo('Cassel',
      // tslint:disable-next-line:max-line-length
      'The photos show the very picturesque town taken in 2012 which include a heavily scared building, a plaque to the Gloucesters and the Ox and Bucks and finally views of the hill showing the commanding position of the town against the surrounding countryside.',
      ['../assets/cl4t1.jpg', 
       '../assets/cl4t2.jpg',
       '../assets/cl4t3.jpg'
      ]),
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
  }

}
