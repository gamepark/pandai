/** @jsxImportSource @emotion/react */
import { LocationDescription } from '@gamepark/react-game';
import { PlayerColor } from '@gamepark/pandai/PlayerColor';
import { MaterialType } from '@gamepark/pandai/material/MaterialType';
import { LocationType } from '@gamepark/pandai/material/LocationType';
import { pandaiCardDescription } from '../material/PandaiCardDescription';

export class DeckLocationDescription extends LocationDescription<PlayerColor, MaterialType, LocationType> {
    location = { type: LocationType.ForestDeck };
    width = pandaiCardDescription.width + 1;
    height = pandaiCardDescription.width / pandaiCardDescription.ratio + 1;
    borderRadius = pandaiCardDescription.borderRadius;
    coordinates = { x: -58.5, y: -29, z: 20 };
}
