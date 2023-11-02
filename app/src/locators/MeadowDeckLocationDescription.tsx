/** @jsxImportSource @emotion/react */
import { LocationDescription } from '@gamepark/react-game';
import { PlayerColor } from '@gamepark/pandai/PlayerColor';
import { MaterialType } from '@gamepark/pandai/material/MaterialType';
import { LocationType } from '@gamepark/pandai/material/LocationType';
import { meadowCardDescription } from '../material/PandaiCardDescription';

export class MeadowDeckLocationDescription extends LocationDescription<PlayerColor, MaterialType, LocationType> { 
    location = { type: LocationType.MeadowDeck };
    width = meadowCardDescription.width + 1;
    height = meadowCardDescription.width / meadowCardDescription.ratio + 1;
    borderRadius = meadowCardDescription.borderRadius;
    coordinates = { x: -58.5, y: -29, z: 20 };
}
