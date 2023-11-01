import { CardDescription } from '@gamepark/react-game';

//import backMeadow from '../images/cards/MeadowBack.jpg';
import backForest from '../images/cards/forestBack.jpg';
import card1 from '../images/cards/card1.jpg';
import card2 from '../images/cards/card2.jpg';
import card3 from '../images/cards/card3.jpg';
import card4 from '../images/cards/card4.jpg';
import card5 from '../images/cards/card5.jpg';
import card6 from '../images/cards/card6.jpg';
import card7 from '../images/cards/card7.jpg';
import card8 from '../images/cards/card8.jpg';
import card9 from '../images/cards/card9.jpg';
import card10 from '../images/cards/card10.jpg';
import card11 from '../images/cards/card11.jpg';
import card12 from '../images/cards/card12.jpg';
import card13 from '../images/cards/card13.jpg';
import { PandaiCardType } from '@gamepark/pandai/material/PandaiCardType';

export class PandaiCardDescription extends CardDescription {
    backImage = backForest;
    //ratio = 5 / 7;
    //width = 8.8;
    images = {
        [PandaiCardType.CHAIR]: card1,
        [PandaiCardType.PORCUPINE]: card2,
        [PandaiCardType.FRUITS]: card3,
        [PandaiCardType.CAGE]: card4,
        [PandaiCardType.TIGER]: card5,
        [PandaiCardType.WHITE_TIGER]: card6,
        [PandaiCardType.GREEN_PANDAI]: card7,
        [PandaiCardType.YELLOW_PANDAI]: card8,
        [PandaiCardType.PURPLE_PANDAI]: card9,
        [PandaiCardType.BROWN_PANDAI]: card10,
        [PandaiCardType.BLUE_PANDAI]: card11,
        [PandaiCardType.RED_PANDAI]: card12,
        [PandaiCardType.HAT]: card13,
    };
}

export const pandaiCardDescription = new PandaiCardDescription();
