import { Component, OnInit } from '@angular/core';
import { Map, MapId } from '../world/map';
import { MapTile } from '../world/mapTile';
import { MapService } from '../map/map.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {

  private mapService: MapService = new MapService();
  public currentMap: Map;

  constructor() {  }

  ngOnInit() {
    this.currentMap = this.mapService.getMap(MapId.Aftermath);
  }

}
