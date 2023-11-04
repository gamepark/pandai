import { ItemMove, MaterialMove, PlayerTurnRule, RuleMove, isMoveItem } from '@gamepark/rules-api';
import { Memory } from './Memory';
import { RuleId } from './RuleId';

export class PorcupineCardRule extends PlayerTurnRule {
	getPlayerMoves(): MaterialMove<number, number, number>[] {
		return [];
	}

	onRuleStart(move: RuleMove) {
		console.log('PorcupineCardRule', move);
		const pandaMove: ItemMove = this.remind(Memory.LastPandaMove);
		if (isMoveItem(pandaMove)) {
			this.memorize(Memory.MandatoryPanda, pandaMove.itemIndex);
		}
		return [this.rules().startPlayerTurn(RuleId.MovePanda, this.player)];
	}
}
