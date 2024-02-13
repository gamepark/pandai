/** @jsxImportSource @emotion/react */
import { PileLocator } from '@gamepark/react-game'
import PlayerColor from '@gamepark/pandai/PlayerColor'
import { MaterialType } from '@gamepark/pandai/material/MaterialType'
import { LocationType } from '@gamepark/pandai/material/LocationType'

export class PandaiTokenStockLocator extends PileLocator<PlayerColor, MaterialType, LocationType> {
  coordinates = { x: -33, y: -0, z: 0 }
  radius=4;
  //coordinates = { x: -58, y: -28.5, z: 0 }
  //delta = { x: -0.05, y: -0.05, z: 0.1 }
  //hidden = false
}
