/** @jsxImportSource @emotion/react */
import { DeckLocator } from '@gamepark/react-game'
import PlayerColor from '@gamepark/pandai/PlayerColor'
import { MaterialType } from '@gamepark/pandai/material/MaterialType'
import { LocationType } from '@gamepark/pandai/material/LocationType'
import { ForestDeckLocationDescription } from './ForestDeckLocationDescription';

export class ForestDeckLocator extends DeckLocator<PlayerColor, MaterialType, LocationType> {
    locationDescription = new ForestDeckLocationDescription();
    coordinates = { x: -32, y: -26, z: 0 }
    delta = { x: -0.05, y: -0.05, z: 0.1 };
}
