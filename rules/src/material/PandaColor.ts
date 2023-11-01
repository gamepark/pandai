import { isEnumValue } from '@gamepark/rules-api';

export enum PandaColor {
    Purple = 1,
    Blue,
    Red,
    Green,
    Yellow,
    Brown,
}

export const pandaColors = Object.values(PandaColor).filter<PandaColor>(isEnumValue);
