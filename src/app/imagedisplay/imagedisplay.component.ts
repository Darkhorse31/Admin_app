import { Component, OnInit, Input, } from '@angular/core';
import { ApiService } from '../apiservice/api.service';

@Component({
  selector: 'app-imagedisplay',
  templateUrl: './imagedisplay.component.html',
  styleUrls: ['./imagedisplay.component.scss'],
})
export class ImagedisplayComponent {
   imageDataUrl: string = '';
  @Input() imageData: any = '';
  constructor(private api: ApiService) {}
  ngOnChanges(change:any){
    if(change?.imageData?.currentValue){
      this.imageDataUrl=change?.imageData?.currentValue
  }

  }
}
