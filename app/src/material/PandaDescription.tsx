/** @jsxImportSource @emotion/react */
import black from '../images/pandas/red-panda.png';
import blackHat from '../images/pandas/red-panda.png';
import blue from '../images/pandas/blue-panda.png';
import blueHat from '../images/pandas/blue-panda.png';
import orange from '../images/pandas/yellow-panda.png';
import orangeHat from '../images/pandas/yellow-panda.png';
import pink from '../images/pandas/brown-panda.png';
import pinkHat from '../images/pandas/brown-panda.png';
import { TokenDescription } from '@gamepark/react-game';
import { PandaRules } from './PandaRules';
import { Panda } from '@gamepark/pandai/material/Panda';

class PandaDescription extends TokenDescription {
    width = 2.9;
    height = 4.77;

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
