import { LocationType } from '@gamepark/pandai/material/LocationType';
import { MaterialType } from '@gamepark/pandai/material/MaterialType';
import { PlayerColor } from '@gamepark/pandai/PlayerColor';
import { ItemLocator } from '@gamepark/react-game';
import { ForestDeckLocator as ForestDeckLocator } from './ForestDeckLocator';
import { PandaiTokenStockLocator } from './PandaiTokenStockLocator';
import { MeadowDeckLocator } from './MeadowDeckLocator';

export const Locators: Partial<Record<LocationType, ItemLocator<PlayerColor, MaterialType, LocationType>>> = {
    [LocationType.ForestDeck]: new ForestDeckLocator(),
    [LocationType.MeadowDeck]: new MeadowDeckLocator(),
    [LocationType.PandaiTokenStock]: new PandaiTokenStockLocator(),
};
