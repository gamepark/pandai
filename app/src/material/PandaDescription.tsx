/** @jsxImportSource @emotion/react */
import black from '../images/pandas/black-panda.png';
import blackHat from '../images/pandas/black-hat-panda.png';
import blue from '../images/pandas/blue-panda.png';
import blueHat from '../images/pandas/blue-hat-panda.png';
import orange from '../images/pandas/orange-panda.png';
import orangeHat from '../images/pandas/orange-hat-panda.png';
import pink from '../images/pandas/pink-panda.png';
import pinkHat from '../images/pandas/pink-hat-panda.png';
import { TokenDescription } from '@gamepark/react-game';
import { PandaRules } from './PandaRules';
import { Panda } from '@gamepark/pandai/material/Panda';

class PandaDescription extends TokenDescription {
    width = 2.6;
    height = 2.8;

    images = {
        [Panda.Black]: black,
        [Panda.BlackHat]: blackHat,
        [Panda.Blue]: blue,
        [Panda.BlueHat]: blueHat,
        [Panda.Orange]: orange,
        [Panda.OrangeHat]: orangeHat,
        [Panda.Pink]: pink,
        [Panda.PinkHat]: pinkHat,
    };

    rules = PandaRules;
}

export const pandaDescription = new PandaDescription();
