import bugType from '../assets/types/bug.png';
import darkType from '../assets/types/dark.png';
import dragonType from '../assets/types/dragon.png';
import electricType from '../assets/types/electric.png';
import fairyType from '../assets/types/fairy.png';
import fightingType from '../assets/types/fighting.png';
import fireType from '../assets/types/fire.png';
import flyingType from '../assets/types/flying.png';
import ghostType from '../assets/types/ghost.png';
import grassType from '../assets/types/grass.png';
import groundType from '../assets/types/ground.png';
import iceType from '../assets/types/ice.png';
import normalType from '../assets/types/normal.png';
import poisonType from '../assets/types/poison.png';
import psychicType from '../assets/types/psychic.png';
import rockType from '../assets/types/rock.png';
import steelType from '../assets/types/steel.png';
import waterType from '../assets/types/water.png';

export function returnTypeIcons(type) {

    let img = null;

    switch (type) {
        case 'Bug':
            img = bugType;
        break;

        case 'Dark':
            img = darkType;
        break;

        case 'Dragon':
            img = dragonType;
        break;

        case 'Electric':
            img = electricType; 
        break;

        case 'Fairy':
            img = fairyType;
        break;

        case 'Fighting':
            img = fightingType;
        break;
        
        case 'Fire':
            img =  fireType;
        break;

        case 'Flying':
            img = flyingType;
        break;

        case 'Ghost':
            img = ghostType;
        break;

        case 'Grass':
            img = grassType;
        break;

        case 'Ground':
            img = groundType;
        break;

        case 'Ice':
            img = iceType;
        break;
        
        case 'Normal':
            img = normalType;
        break;

        case 'Poison':
            img = poisonType;
        break;

        case 'Psychic':
            img = psychicType;
        break;

        case 'Rock':
            img = rockType;
        break;

        case 'Steel':
            img = steelType;
        break;

        case 'Water':
            img = waterType;
        break;

        default: 
            img = darkType;
        break;
      }

      return img;

    
}

