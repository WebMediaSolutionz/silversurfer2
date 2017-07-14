import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Models
import { Video } from "../../shared/custom-types/classes/video";

@Component({
  moduleId: module.id,
  selector: 'ss2-video',
  templateUrl: 'video.component.html',
  styleUrls: ['video.component.scss']
})
export class VideoComponent implements OnInit {

  private videos: Video[];

  private video: Video;

  private videoRepositary: string = 'http://www.webmediasolutionz.com/projects/internal/fight_pass/public/UPS/89/videos/';

  private src: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.videos = [
      { id: 1, name: 'ufc 190', filename: 'ufc190.mp4'},
      { id: 2, name: 'ufc 195', filename: 'ufc195.mp4'},
      { id: 3, name: 'ufc 199', filename: 'ufc199.mp4'}
    ];

    this.activatedRoute
        .params
        .subscribe((params) => {
          let videoId = parseInt(params['videoId']);
          
          this.videos.forEach((video) => {
            if (video.id === videoId) {
              this.video = video;
              this.src = this.videoRepositary + this.video.filename;
            }
          });
        });
  }

}
