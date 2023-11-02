import { MaterialType } from '@gamepark/pandai/material/MaterialType'
import { MaterialDescription } from '@gamepark/react-game'
import { boardDescription } from './BoardDescription';
import { pandaDescription } from './PandaDescription';
import { forestCardDescription, meadowCardDescription } from './PandaiCardDescription';
import { pandaiTokenDescription } from './PandaiTokenDescription';

export const Material: Partial<Record<MaterialType, MaterialDescription>> = {
    [MaterialType.Board]: boardDescription,
    [MaterialType.Panda]: pandaDescription,
    [MaterialType.ForestCard]: forestCardDescription,
    [MaterialType.MeadowCard]: meadowCardDescription,
    [MaterialType.PandaiToken]: pandaiTokenDescription,
};
