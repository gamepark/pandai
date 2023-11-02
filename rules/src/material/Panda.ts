import { isEnumValue } from '@gamepark/rules-api';

export enum Panda{
	Blue = 1,
	BlueHat,
    Orange,
    OrangeHat,
    Pink,
    PinkHat,
    Black,
    BlackHat,
}

export const pandas = Object.values(Panda).filter<Panda>(isEnumValue);