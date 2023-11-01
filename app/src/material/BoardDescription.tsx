/** @jsxImportSource @emotion/react */
import board from '../images/board.jpg'
import { BoardDescription } from '@gamepark/react-game'
import { LocationType } from '@gamepark/pandai/material/LocationType'
import { BoardRules } from './BoardRules'

class PandaiBoardDescription extends BoardDescription {
  image = board
  height = 56
  width = 56
  staticItem = { location: { type: LocationType.Board } }
 /* locations = nodes.map<Location>(place => ({ type: LocationType.Place, id: place }))
    .concat([
      { type: LocationType.Place, id: RedNode.CraterLake_NorthWest, x: 1 },
      { type: LocationType.Place, id: RedNode.Teotihuacan_SouthWest, x: 1 },
      { type: LocationType.Place, id: RedNode.RapaNui_South, x: 1 }
    ])
    .concat(roads.map(road => ({ type: LocationType.Road, id: road })))*/
  rules = BoardRules
}


export const boardDescription = new PandaiBoardDescription()