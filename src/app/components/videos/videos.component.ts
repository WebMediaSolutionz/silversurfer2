import { Component, OnInit } from '@angular/core';

// Models
import { Video } from "../../shared/custom-types/classes/video";

@Component({
  moduleId: module.id,
  selector: 'ss2-videos',
  templateUrl: 'videos.component.html',
  styleUrls: ['videos.component.scss']
})
export class VideosComponent implements OnInit {

  private videos: Video[];

  private videoPath: string = '/video/';

  private title: string = 'Videos';

  constructor() { }

  ngOnInit() {
    this.videos = [
      { id: 1, name: 'ufc 190', filename: 'ufc190.mp4'},
      { id: 2, name: 'ufc 195', filename: 'ufc195.mp4'},
      { id: 3, name: 'ufc 199', filename: 'ufc199.mp4'}
    ];
  }

}
