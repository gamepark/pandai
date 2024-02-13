import { isEnumValue } from '@gamepark/rules-api';

export enum PandaiColor {
    Purple = 1,
    Blue,
    Red,
    Green,
    Yellow,
    Brown,
}

export const pandaiColors = Object.values(PandaiColor).filter<PandaiColor>(isEnumValue);
