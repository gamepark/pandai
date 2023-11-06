import { ItemMove, MaterialMove, RuleMove, isMoveItem } from '@gamepark/rules-api';
import { Memory } from './Memory';
import { PandaiPlayerTurnRule } from './PandaiPlayerTurnRule';
import { RuleId } from './RuleId';

export class CageCardRule extends PandaiPlayerTurnRule {
	getPlayerMoves(): MaterialMove<number, number, number>[] {
		return [];
	}

	onRuleStart(_move: RuleMove) {
		const pandaMove: ItemMove = this.remind(Memory.LastPandaMove);
		if (isMoveItem(pandaMove)) {
			this.memorize(Memory.IncagePanda, pandaMove.itemIndex);
		}
		return [this.rules().startPlayerTurn(RuleId.MovePanda, this.nextPlayer)];
	}
}
