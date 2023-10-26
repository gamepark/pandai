import { MaterialGameSetup } from '@gamepark/rules-api'
import { PandaiOptions } from './PandaiOptions'
import { PandaiRules } from './PandaiRules'
import { LocationType } from './material/LocationType'
import { MaterialType } from './material/MaterialType'
import { PlayerColor } from './PlayerColor'
import { RuleId } from './rules/RuleId'

/**
 * This class creates a new Game based on the game options
 */
export class PandaiSetup extends MaterialGameSetup<PlayerColor, MaterialType, LocationType, PandaiOptions> {
  Rules = PandaiRules

  setupMaterial(_options: PandaiOptions) {
  }

  start() {
    this.startPlayerTurn(RuleId.PlayerTurn, this.game.players[0])
  }
}