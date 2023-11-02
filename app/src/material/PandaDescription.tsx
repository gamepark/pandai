/** @jsxImportSource @emotion/react */
import red from '../images/pandas/red-panda.png'
import blue from '../images/pandas/blue-panda.png'
import yellow from '../images/pandas/yellow-panda.png'
import brown from '../images/pandas/brown-panda.png'
import purple from '../images/pandas/purple-panda.png'
import green from '../images/pandas/green-panda.png'
import { TokenDescription } from '@gamepark/react-game'
import { PandaiColor } from '@gamepark/pandai/material/PandaColor';
import { PandaRules } from './PandaRules';

class PandaDescription extends TokenDescription {
    width = 1.44;
    height = 4.77;

    images = {
        [PandaiColor.Red]: red,
        [PandaiColor.Blue]: blue,
        [PandaiColor.Yellow]: yellow,
        [PandaiColor.Brown]: brown,
        [PandaiColor.Purple]: purple,
        [PandaiColor.Green]: green,
    };

    rules = PandaRules;
}

export const pandaDescription = new PandaDescription();
