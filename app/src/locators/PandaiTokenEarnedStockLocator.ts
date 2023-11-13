/** @jsxImportSource @emotion/react */
import PlayerColor from '@gamepark/pandai/PlayerColor'
import { LocationType } from '@gamepark/pandai/material/LocationType'
import { MaterialType } from '@gamepark/pandai/material/MaterialType'
import { LineLocator } from '@gamepark/react-game'

export class PandaiTokenEarnedStockLocator extends LineLocator<PlayerColor, MaterialType, LocationType> {
	coordinates = { x: -33, y: 9, z: 0 }
	delta = { x: -0.05, y: 3, z: 0.1 }
}
