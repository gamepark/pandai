import { MaterialGameSetup } from '@gamepark/rules-api'
import { PandaiOptions } from './PandaiOptions'
import { PandaiRules } from './PandaiRules'
import { LocationType } from './material/LocationType'
import { MaterialType } from './material/MaterialType'
import { PlayerColor } from './PlayerColor'
import { RuleId } from './rules/RuleId'
import { cards } from './material/PandaiCardType'

/**
 * This class creates a new Game based on the game options
 */
export class PandaiSetup extends MaterialGameSetup<PlayerColor, MaterialType, LocationType, PandaiOptions> {
  Rules = PandaiRules

  setupMaterial(_options: PandaiOptions) {
    this.material(MaterialType.Card).createItems(cards.map(card => ({ id: card, location: { type: LocationType.ForestDeck } })))
    this.material(MaterialType.Card).shuffle()
  }

  start() {
    this.startPlayerTurn(RuleId.PlayerTurn, this.game.players[0])
  }
}