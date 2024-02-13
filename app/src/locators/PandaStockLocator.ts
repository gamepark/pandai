/** @jsxImportSource @emotion/react */
import { PileLocator } from '@gamepark/react-game'
import PlayerColor from '@gamepark/pandai/PlayerColor'
import { MaterialType } from '@gamepark/pandai/material/MaterialType'
import { LocationType } from '@gamepark/pandai/material/LocationType'
import { MaterialItem, Coordinates } from '@gamepark/rules-api'

export class PandaStockLocator extends PileLocator<PlayerColor, MaterialType, LocationType> {
	radius = 3

	getCoordinates(item: MaterialItem<PlayerColor, LocationType>): Coordinates {
		switch (item.location.player) {
			case PlayerColor.Blue:
				return { x: -33, y: -10, z: 0 }
			default:
				return { x: 33, y: -10, z: 0 }
		}
	}
}
