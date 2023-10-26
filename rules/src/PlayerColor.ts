import { isEnumValue } from '@gamepark/rules-api';

export enum PlayerColor {
    Blue = 1,
    Orange,
    Pink,
    Black,
}

export const playerColors = Object.values(PlayerColor).filter(isEnumValue);
