import { MaterialType } from '@gamepark/pandai/material/MaterialType'
import { MaterialDescription } from '@gamepark/react-game'
import { boardDescription } from './BoardDescription';
import { pandaDescription } from './PandaDescription';
import { pandaiCardDescription } from './PandaiCardDescription';

export const Material: Partial<Record<MaterialType, MaterialDescription>> = {
    [MaterialType.Board]: boardDescription,
    [MaterialType.Panda]: pandaDescription,
    [MaterialType.Card]: pandaiCardDescription,
};
