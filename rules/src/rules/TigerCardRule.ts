import { ItemMove, MaterialMove, RuleMove, isMoveItem } from '@gamepark/rules-api'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { Memory } from './Memory'
import { PandaiPlayerTurnRule } from './PandaiPlayerTurnRule'
import { RuleId } from './RuleId'
import { PandaiCardType } from '../material/PandaiCardType'

export class TigerCardRule extends PandaiPlayerTurnRule {
	onRuleStart(_move: RuleMove) {
		console.log('TigerCardRule', _move)
		const moves: MaterialMove[] = []

		const move: ItemMove = this.remind(Memory.LastPandaMove)
		if (isMoveItem(move) && move.itemType === MaterialType.Panda) {
			if (this.isLastPandaMovedWearingHat()) {
				console.log('hat panda')
				//hat panda
				moves.push(this.rules().startRule(RuleId.ChooseNewHatPandaRule))
			} else {
				moves.push(this.material(MaterialType.Panda).index(move.itemIndex).moveItem({ type: LocationType.PandaStock, player: this.player }))
				if (this.onlyOnePlayerHasPanda()) {
					moves.push(this.rules().endGame())
				} else {
					moves.push(this.rules().startPlayerTurn(RuleId.MovePanda, this.nextPlayer))
				}
			}
		}
		return moves
	}

	getPlayerMoves(): MaterialMove<number, number, number>[] {
		return []
	}

	onlyOnePlayerHasPanda(): boolean {
		return this.rules().game.players.reduce((acc, p) => acc != this.getAllPandas(p).length > 0, false)
	}
}

export class WhiteTigerCardRule extends TigerCardRule {
	onRuleStart(_move: RuleMove) {
		console.log('WhiteTigerCardRule', _move)
		const moves: MaterialMove[] = []
		moves.push(this.material(MaterialType.ForestCard).id(PandaiCardType.WHITE_TIGER).moveItem({ type: LocationType.ForestDeck }))
		this.material(MaterialType.ForestCard).shuffle()
		moves.push(...super.onRuleStart(_move))
		return moves
	}
}
