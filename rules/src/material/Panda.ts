import { isEnumValue } from '@gamepark/rules-api';
import PlayerColor from '../PlayerColor';

export enum Panda {
    Blue = PlayerColor.Blue,
    BlueHat = 10 + PlayerColor.Blue,
    Orange = PlayerColor.Orange,
    OrangeHat = 10 + PlayerColor.Orange,
    Pink = PlayerColor.Pink,
    PinkHat = 10 + PlayerColor.Pink,
    Black = PlayerColor.Black,
    BlackHat = 10 + PlayerColor.Black,
}

export const pandas = Object.values(Panda).filter<Panda>(isEnumValue);
