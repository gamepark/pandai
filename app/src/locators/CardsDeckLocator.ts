/** @jsxImportSource @emotion/react */
import { DeckLocator } from '@gamepark/react-game'
import PlayerColor from '@gamepark/pandai/PlayerColor'
import { MaterialType } from '@gamepark/pandai/material/MaterialType'
import { LocationType } from '@gamepark/pandai/material/LocationType'
import { DeckLocationDescription } from './DeckLocationDescription'

export class CardsDeckLocator extends DeckLocator<PlayerColor, MaterialType, LocationType> {
  locationDescription = new DeckLocationDescription()
  coordinates = { x: -58, y: -28.5, z: 0 }
  delta = { x: -0.05, y: -0.05, z: 0.1 }
  hidden = false
}
