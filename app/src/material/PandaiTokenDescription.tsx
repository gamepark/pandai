import { RoundTokenDescription } from '@gamepark/react-game';
/*import { MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/pandai/material/MaterialType'
import { LocationType } from '@gamepark/pandai/material/LocationType'
import { css } from '@emotion/react'*/

import card1 from '../images/tokens/token-blue.png';
import card2 from '../images/tokens/token-brown.png';
import card3 from '../images/tokens/token-green.png';
import card4 from '../images/tokens/token-purple.png';
import card5 from '../images/tokens/token-red.png';
import card6 from '../images/tokens/token-yellow.png';
import { PandaiColor as PandaiColor } from '@gamepark/pandai/material/PandaColor';

export class PandaiTokenDescription extends RoundTokenDescription {
    ratio = 1;
    diameter=3;
    width=3;
    images = {
        [PandaiColor.Blue]: card1,
        [PandaiColor.Brown]: card2,
        [PandaiColor.Green]: card3,
        [PandaiColor.Purple]: card4,
        [PandaiColor.Red]: card5,
        [PandaiColor.Yellow]: card6,
    };

   /* getExtraCss(location: Location<PandaColor, LocationType>, { rules }: MaterialContext<PandaColor, MaterialType, LocationType>) {
        return borderCss(rules.material(MaterialType.PandaiToken)[location.id])
      }*/
    
}

export const pandaiTokenDescription = new PandaiTokenDescription();
/*
const borderCss = (color: string) => css`
  border: 0.2em solid ${color}
`
*/