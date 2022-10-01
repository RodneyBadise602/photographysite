import { Component, OnInit } from '@angular/core';
import { Photo } from '../objects/photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})

export class PhotoComponent implements OnInit {

  Photos: Photo[] = [
    { title: 'Image 1' , urlLink: '' },
    { title: 'Image 2' , urlLink: '' },
    { title: 'Image 3' , urlLink: '' },
    { title: 'Image 4' , urlLink: '' },
    { title: 'Image 5' , urlLink: '' },
    { title: 'Image 6' , urlLink: '' },
    { title: 'Image 7' , urlLink: '' },
    { title: 'Image 8' , urlLink: '' },
    { title: 'Image 9' , urlLink: '' },
    { title: 'Image 10' , urlLink: '' },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
