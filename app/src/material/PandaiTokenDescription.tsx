import { RoundTokenDescription } from '@gamepark/react-game';

import card1 from '../images/tokens/token-blue.png';
import card2 from '../images/tokens/token-brown.png';
import card3 from '../images/tokens/token-green.png';
import card4 from '../images/tokens/token-purple.png';
import card5 from '../images/tokens/token-red.png';
import card6 from '../images/tokens/token-yellow.png';
import { PandaColor } from '@gamepark/pandai/material/PandaColor';

export class PandaiTokenDescription extends RoundTokenDescription {
    ratio = 1;
    diameter=4;
    width=1;
    images = {
        [PandaColor.Blue]: card1,
        [PandaColor.Brown]: card2,
        [PandaColor.Green]: card3,
        [PandaColor.Purple]: card4,
        [PandaColor.Red]: card5,
        [PandaColor.Yellow]: card6,
    };
}

export const pandaiTokenDescription = new PandaiTokenDescription();
