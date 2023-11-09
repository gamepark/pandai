/** @jsxImportSource @emotion/react */
import { LocationDescription } from '@gamepark/react-game';
import { PlayerColor } from '@gamepark/pandai/PlayerColor';
import { MaterialType } from '@gamepark/pandai/material/MaterialType';
import { LocationType } from '@gamepark/pandai/material/LocationType';
import { forestCardDescription } from '../material/PandaiCardDescription';

export class ForestDeckLocationDescription extends LocationDescription<PlayerColor, MaterialType, LocationType> {
    location = { type: LocationType.ForestDeck };
    width = forestCardDescription.width + 1;
    height = forestCardDescription.width / forestCardDescription.ratio + 1;
    borderRadius = forestCardDescription.borderRadius;
    coordinates = { x: -58.5, y: -29, z: 20 }
}
