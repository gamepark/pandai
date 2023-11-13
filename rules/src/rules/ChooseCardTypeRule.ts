import { ItemMove, Location, MaterialMove } from '@gamepark/rules-api'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { Memory } from './Memory'
import { PandaiPlayerTurnRule } from './PandaiPlayerTurnRule'
import { cardRuleAssoc } from './RuleId'

export class ChooseCardTypeRule extends PandaiPlayerTurnRule {
	getPlayerMoves(): MaterialMove<number, number, number>[] {
		const moves: MaterialMove[] = []

		if (this.material(MaterialType.ForestCard).location(LocationType.ForestDeck).getItems().length > 0) {
			moves.push(this.material(MaterialType.ForestCard).location(LocationType.ForestDeck).deck().dealOne(this.remind(Memory.LastPandaMove).location))
		}
		if (this.material(MaterialType.MeadowCard).location(LocationType.MeadowDeck).getItems().length > 0) {
			moves.push(this.material(MaterialType.MeadowCard).location(LocationType.MeadowDeck).deck().dealOne(this.remind(Memory.LastPandaMove).location))
		}
		return moves
	}

	afterItemMove(_move: ItemMove): MaterialMove[] {
		//console.log('ChooseCardType');
		const moves: MaterialMove[] = []
		const card = this.getCardOnSquare(this.remind(Memory.LastPandaMove).location)
		this.memorize(Memory.LastCardDrawn, card)
		//console.log("card",card);

		moves.push(this.rules().startRule(cardRuleAssoc[card?.id]))
		//moves.push(this.rules().startPlayerTurn(RuleId.PlayerTurn, this.nextPlayer));

		return moves
	}

	getCardOnSquare(location: Location) {
		return (
			this.material(MaterialType.ForestCard)
				.location(LocationType.GridSquare)
				.filter((c) => c.location.x === location.x && c.location.y === location.y)
				.getItem() ||
			this.material(MaterialType.MeadowCard)
				.location(LocationType.GridSquare)
				.filter((c) => c.location.x === location.x && c.location.y === location.y)
				.getItem()
		)
	}
}
