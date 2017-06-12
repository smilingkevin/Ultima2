import { MapTile } from './mapTile';

export enum MapType { Exterior, Interior }

export enum MapId { BC1423, AD1990, Aftermath, Jupiter, Legends, Mars, Mercury, Neptune, Pangea, PlanetX, 
    Pluto, Saturn, Uranus, Venus, BaradinsTown, CastleBarataria, CastleBritish, ComputerCamp, LeJester, 
    NewJester, NewSanAntonio, PiratesHarbor, PortBonifice, Shadowguard, Tommersville, TowneBasko, TowneLinda, 
    TowneMakler, TowneMary, VillageOfThePreppies }

export class Map {
    public mapId: MapId;
    public mapType: MapType;
    public tiles: MapTile[][];
    public name: string = '';
}
