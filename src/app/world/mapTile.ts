export enum MapTileType { Door, Item, Land, Mob, Vehicle, Wall, Water }

export class MapTile {
    public tileType: MapTileType;
    public tileName: string;
    public cssClass: string;

    constructor(type: MapTileType, name: string) {
        this.tileType = type;
        this.tileName = name;
        this.cssClass = "tile" + name;
    }
}