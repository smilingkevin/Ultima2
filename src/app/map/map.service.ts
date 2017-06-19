import { Injectable } from '@angular/core';
import { Map, MapId } from '../world/map';
import { MapTile, MapTileType } from '../world/mapTile';

@Injectable()
export class MapService {
  constructor() {  }

  public getMap(id: MapId): Map {
    let map: Map = new Map();
    let ad1990: string = "EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEBBEEEEECACCEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEBBCCEEECCAACCEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEBEBBCCEECCCBBACEEEEEEEEEEEEEEEEEEEBEEEEEEEEEEEEEEEEEEEEEEEEEEEEBBEBCCEEECJBBCCCECEEEEEEEEEEEEEEEEEEEBEEEEEEEEEEEEEEEEEEEEEEEEBECCEEEEEECCBBBBCCCCEEEEEEEEEEEEEBBEEEEEEBBEEEEEEEEEEEEEEEEEEEECCEECECAAECCABBBBBCCEEEEEEEEEEEEEEBEEEEEEEEEEEEEEEEEEEEBCCEEEEEEEEEEEEBAEECAAABBBCCEEEEEEEEEEEEEEEBEEEEEEAAAAAEEEEEEEEBBBCCCCEEEEECCEEEBEEEACCCBBBCEEECEEEEEEEEEEEEEEEEEAACCAAAEEEEEEBBBBBBBCCCAAEEEEEEEEAEECECCBBCEECCEEEEEEEEEEEEEEEAAAAAAAABBEEEEBBBBBBBBBAAAAAEEEEAAEEEEEECBBCCEECEEEEEEEEEEEEEEEAAAAAABBBBBBBBBEBBBCCCBBBAAAAAAAAAAAAEEBECBKCEEEEEEEEEEEEEEEEEEAAAAABCCBBBBBBBEEEBCCBCCBBBBAAAAAAAAAAAEBECCBCEEEEEEEEEEEECCEEEAAAAABBBCBBBBBBEEEEBBBBBCBBBBBBBBBAAAAAEEEEECBCEEEEEEEEEEECCABEBAAACABBBCCBBBBEEEEEEBBBBCCBBBBBBBBBBEEEEEEEECACEEEEEEEEEECCAAAEAAACCAABBCBBBBEEEEEEEEEBBBCBBBBBBBBBBEEEBBBEECAAEEEEEEEEECCAAAAAAAACAAAABCCBBBEEEEEEEEEEBBCCBBBBBBBBBBEEBBBEEEAAEEEEEEEECCAAAAAAAACCAAABBBCBBBEEEEEEEEEEEBBCCBBBBBBBBBBBBBBBEEAEEEEEEEEECBBEAAAAAAAAAAABBBBBBEEEEEEEEEEBEAAACCBBBBAAABBBBBBBBEEEEEEEEBECCBEEAAAAAAAAAAAABBBBBEEEEEEEEEEBEAAAACBBBAAAAAEEEEEEEEEEEEBEHBEEBBEAAAAAAAAAAAAAABBBBEEEEEEEEEEEEAACACCBBAAAAAAAEAAAEEEEEBBEBBBEEEEAAAABBBAAAAABBBBBBEEEEEEEEEEEEECCAACBBBAAAAAAAAAAEEEEEBEEBGBEEBAABBBBBAAAABBBBBBBBEEEEEEEEEEEEECAAACBBBAAAAAAAAAEEEEEEEEKBBEEEBBBBBBBAAAAAABBBBBBBEEEEEEEEEEEEECCAACBBAAAAAAAAAEEEEEEEEEEEEEEAABBBBBBBAAABBBBBBBBEEEEEEEEEEEEEEECAACBAAAEEEAAAAEEEEEEEEEEAAAAACBBBBBBBBBBCCCCCBBBEEEEEEEEEEEEEEEBAACCALEEEEEEAEEEEEEEEEBBBAACCCCCBBBBBCCCCCCCCCBBEEEEEEEEEEEEEEEBEAAAAEEEEEEEAEEEEEEEEEBBBBAAAAACCCCBBBCCCCCCBBBBEBEEEEEEEEEEEEEBEEBAEEEEEEEEEEEEEEEEEEBBBEEBEEABBBCCCBBCCCCBBBBEEBEEEEEEEEEEEEEEEEBBEEEEEEEEEEEEEEEEEEEEEEBBEAABBBBECCAAACCCBBBEEBEEEEEEEEEEEEEEEEEBEBBEEBBEEEEEEEEEEEEBBEEEEBBBBBBEECAAAAACCBBEEEEEEEEEEEEEEEEEEEEBBBBEEEBBEEEEEEEEEEBBBBBBIBBEEBBBEEAAAAAAAAEEBEEEEEEEEEEEEEEEEEEEBBEEEEEEEEEEEEEEEBBBBBBBBBBBECBCCEABBAAAAEEEEEEEEEEEEEEEEEEEEEEEBEEEEEEEEEEEEEEEEBBBBBBBBBBBECCCEEBBBEAAEEEEEEEEEEEEEEEEEEEEEEEEBCEEEEEEEEEEEEEEEBBBBBBBBBBBEEEEEEEBBEEEEEEEEEEEEEBEEEEEEEEEEEEEACEEEEEEEEEEEEEEEBBBBBBBBBBBCECCEEEBEEEEEEEEEEEEEEEEBEEEEEEEEEEEAAEEEEEEEEEEEEEEEAABBBAAAABBCCCEEEEEEEEEAEEEEEEEEEEEEEEEEEEEEEEEEAECCAEEEEEEEEEEEEAAAAAAAAABBCCEEEEEEEEEAAEEEEEEEEEEEEEEEEEEEEEEEAACAAAAEAAEEEEEEEEEEEAAAABBBCCEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEECCAAAAAAEAAAEEEEEEEEEEEAABBBBBCEEEEEEEEEAEEEEEEEEEEEEEEEEEEEEEEECAAAADDEEDAAEEEEEEEEEEEBBBBBBBCEEEEEEEEAAEEEEEEEEEEEEEEEEEEEEEEECAAADDEEDDDAEEEEEEEEEEEBBBBBBBCEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEECAAADEEDDDDEEEEEEEEEEEEBBBBBBCCEEEEEEEAAEEEEEEEEEEEEEEEEEEEEEEEECAAADDDDDDDEEEEEEEEEEEEBBBBBBCEEEEEEEEEEEAEEEEEEEEEEEEEEEEEEEEEECCAAADDDDDEEEEEEEEEEEEEBBBBBBCEEEEEEEEAEEEEAAEEEEEEEEEEEEEEEEEEEECAAAADDAAEEEEEEEEEEEEEEBBBBCCEEEEEEEEAEAAEEAAEEEEEEEEEEEEEEEEEEECCAAAAAAEEEEEEEEEEEEEEEBBBBCEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEECCAAAAAEEEEEEEEEEEEEEEEBBBCEBEEEEEEEEEEEABEEBEEEEEEEEEEEEEEEEEEEECAAAAAEEEEEEEEEEEEEEEEBBCCEBEEEEEEEEEEBBBBEBAEEEEEEEEEEEEEEEEEEECAAAAAEEEEEEEEEEEEEEEEBBCEEEEEEEEEEEEEBBBBBBBEEEEEEEEEEEEEEEEEEECAAAAEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEBBBBBBBBEEEEEEEEEEEEEEEEEEECAAAAEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEBBBBBOBBCEEEEBEEEEEEEEEEEEEECCAKAEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEBBBKBBBBCEEEBBEEEEEEEEEEEEEEECAAEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEABBBBBBCCEEEEEEEEEEEEEEEEEEEECAAEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEAAEEAAAAEEEEEEEEEEEEEEEEEEEEECAAEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEAAAEEEEEEEEEEEEEEEEEEEEECCAEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEECAEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEECAAEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEAAEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE";

    map.tiles = [];
    let idx: number = 0;
    for (let j = 0; j < 64; j ++) {
      let row: MapTile[] = [];
      for (let i = 0; i < 64; i ++) {
        let code = ad1990.charAt(idx);
        row[i] = this.getTile(code);
        idx++;
      }
      map.tiles[j] = row;
    }

    console.log(map);
    return map;
  }

  private getTile(tileCode: string): MapTile {
    switch (tileCode) {
      case "A":
        return new MapTile(MapTileType.Wall, "Forest");
      case "a":
        return new MapTile(MapTileType.Wall, "Thief");
      case "B":
        return new MapTile(MapTileType.Wall, "Grass");
      case "b":
        return new MapTile(MapTileType.Wall, "Wizard");
      case "c":
        return new MapTile(MapTileType.Wall, "Horse");
      case "C":
        return new MapTile(MapTileType.Wall, "Mountain");
      case "d":
        return new MapTile(MapTileType.Wall, "Ship");
      case "D":
        return new MapTile(MapTileType.Wall, "Swamp");
      case "E":
        return new MapTile(MapTileType.Wall, "Water");
      case "F":
        return new MapTile(MapTileType.Wall, "Empty");
      case "f":
        return new MapTile(MapTileType.Wall, "Rocket");
      case "g":
        return new MapTile(MapTileType.Wall, "Block");
      case "G":
        return new MapTile(MapTileType.Wall, "Castle");
      case "h":
        return new MapTile(MapTileType.Wall, "Bricks");
      case "H":
        return new MapTile(MapTileType.Wall, "Village");
      case "i":
        return new MapTile(MapTileType.Wall, "BlockMiddle");
      case "I":
        return new MapTile(MapTileType.Wall, "Tower");
      case "j":
        return new MapTile(MapTileType.Wall, "BlockA");
      case "J":
        return new MapTile(MapTileType.Wall, "Dungeon");
      case "k":
        return new MapTile(MapTileType.Wall, "BlockB");
      case "K":
        return new MapTile(MapTileType.Wall, "Moongate");
      case "l":
        return new MapTile(MapTileType.Wall, "BlockC");
      case "L":
        return new MapTile(MapTileType.Wall, "Town");
      case "m":
        return new MapTile(MapTileType.Wall, "BlockD");
      case "M":
        return new MapTile(MapTileType.Wall, "Shield");
      case "n":
        return new MapTile(MapTileType.Wall, "BlockE");
      case "N":
        return new MapTile(MapTileType.Wall, "Sword");
      case "o":
        return new MapTile(MapTileType.Wall, "BlockF");
      case "O":
        return new MapTile(MapTileType.Wall, "Sign");
      case "P":
        return new MapTile(MapTileType.Wall, "Fire");
      case "p":
        return new MapTile(MapTileType.Wall, "BlockG");
      case "Q":
        return new MapTile(MapTileType.Wall, "Balroc");
      case "q":
        return new MapTile(MapTileType.Wall, "BlockH");
      case "r":
        return new MapTile(MapTileType.Wall, "Airplane");
      case "R":
        return new MapTile(MapTileType.Wall, "Cleric");
      case "r":
        return new MapTile(MapTileType.Wall, "BlockI");
      case "S":
        return new MapTile(MapTileType.Wall, "Daemon");
      case "s":
        return new MapTile(MapTileType.Wall, "BlockJ");
      case "T":
        return new MapTile(MapTileType.Wall, "Devil");
      case "t":
        return new MapTile(MapTileType.Wall, "BlockK");
      case "U":
        return new MapTile(MapTileType.Wall, "Fighter");
      case "u":
        return new MapTile(MapTileType.Wall, "BlockL");
      case "V":
        return new MapTile(MapTileType.Wall, "Guard");
      case "v":
        return new MapTile(MapTileType.Wall, "BlockM");
      case "W":
        return new MapTile(MapTileType.Wall, "Jester");
      case "w":
        return new MapTile(MapTileType.Wall, "BlockN");
      case "X":
        return new MapTile(MapTileType.Wall, "King");
      case "x":
        return new MapTile(MapTileType.Wall, "BlockO");
      case "Y":
        return new MapTile(MapTileType.Wall, "Merchant");
      case "y":
        return new MapTile(MapTileType.Wall, "BlockP");
      case "Z":
        return new MapTile(MapTileType.Wall, "Orc");
      case "z":
        return new MapTile(MapTileType.Wall, "BlockQ");
      case "0":
        return new MapTile(MapTileType.Wall, "BlockLeft");
      case "1":
        return new MapTile(MapTileType.Wall, "BlockR");
      case "2":
        return new MapTile(MapTileType.Wall, "BlockS");
      case "3":
        return new MapTile(MapTileType.Wall, "BlockT");
      case "4":
        return new MapTile(MapTileType.Wall, "BlockU");
      case "5":
        return new MapTile(MapTileType.Wall, "BlockV");
      case "6":
        return new MapTile(MapTileType.Wall, "BlockW");
      case "7":
        return new MapTile(MapTileType.Wall, "BlockX");
      case "8":
        return new MapTile(MapTileType.Wall, "BlockY");
      case "9":
        return new MapTile(MapTileType.Wall, "BlockZ");
      case "=":
        return new MapTile(MapTileType.Wall, "BlockRight");
     default:
        return null;
    }
  }
}
