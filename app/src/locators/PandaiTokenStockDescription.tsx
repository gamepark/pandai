/** @jsxImportSource @emotion/react */
import { PlayerColor } from '@gamepark/pandai/PlayerColor'
import { LocationType } from '@gamepark/pandai/material/LocationType'
import { MaterialType } from '@gamepark/pandai/material/MaterialType'
import { LocationDescription } from '@gamepark/react-game'
import { pandaiTokenDescription } from '../material/PandaiTokenDescription'

export class PandaiTokenStockDescription extends LocationDescription<PlayerColor, MaterialType, LocationType> {
    location = { type: LocationType.PandaiTokenStock };
    width = pandaiTokenDescription.width + 1;
    height = pandaiTokenDescription.width / pandaiTokenDescription.ratio + 1;
    //borderRadius = pandaiTokenDescription.borderRadius;
    coordinates = { x: -58.5, y: -29, z: 20 };
}
