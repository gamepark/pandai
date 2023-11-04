import { MaterialMove, PlayerTurnRule, RuleMove } from '@gamepark/rules-api';
import { RuleId } from './RuleId';
import { MaterialType } from '../material/MaterialType';
import { Memory } from './Memory';
import { LocationType } from '../material/LocationType';

export class TigerCardRule extends PlayerTurnRule {
	getPlayerMoves(): MaterialMove<number, number, number>[] {
		return [];
	}

	onRuleStart(_move: RuleMove) {
		console.log('TigerCardRule', _move);
		return [this.rules().startPlayerTurn(RuleId.MovePanda, this.nextPlayer)];
	}
}

export class WhiteTigerCardRule extends TigerCardRule {
	onRuleStart(_move: RuleMove) {
		//super.onRuleStart();
		console.log('WhiteTigerCardRule',_move);
		this.material(MaterialType.ForestCard).id(this.remind(Memory.LastCardDrawn)).moveItem({type:LocationType.ForestDeck})
		this.material(MaterialType.ForestCard).shuffle();
		return [this.rules().startPlayerTurn(RuleId.MovePanda, this.nextPlayer)];
	}
}
