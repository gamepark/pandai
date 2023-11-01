import { LocationType } from '@gamepark/pandai/material/LocationType';
import { MaterialType } from '@gamepark/pandai/material/MaterialType';
import { PlayerColor } from '@gamepark/pandai/PlayerColor';
import { ItemLocator } from '@gamepark/react-game';
import { CardsDeckLocator } from './CardsDeckLocator';
import { PandaiTokenStockLocator } from './PandaiTokenStockLocator';

export const Locators: Partial<Record<LocationType, ItemLocator<PlayerColor, MaterialType, LocationType>>> = {
    [LocationType.ForestDeck]: new CardsDeckLocator(),
    [LocationType.PandaiTokenStock]: new PandaiTokenStockLocator(),
};
