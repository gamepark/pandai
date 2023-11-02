/** @jsxImportSource @emotion/react */
import { PileLocator } from '@gamepark/react-game'
import PlayerColor from '@gamepark/pandai/PlayerColor'
import { MaterialType } from '@gamepark/pandai/material/MaterialType'
import { LocationType } from '@gamepark/pandai/material/LocationType'

export class PandaStockLocator  extends PileLocator<PlayerColor, MaterialType, LocationType> {
    coordinates = { x: -33, y: -10, z: 0 }
    radius=3;
}
