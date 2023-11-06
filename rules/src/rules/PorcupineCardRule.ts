import { ItemMove, MaterialMove, RuleMove, isMoveItem } from '@gamepark/rules-api';
import { Memory } from './Memory';
import { PandaiPlayerTurnRule } from './PandaiPlayerTurnRule';
import { RuleId } from './RuleId';

export class PorcupineCardRule extends PandaiPlayerTurnRule {
	getPlayerMoves(): MaterialMove<number, number, number>[] {
		return [];
	}

	onRuleStart(move: RuleMove) {
		console.log('PorcupineCardRule', move);
		const pandaMove: ItemMove = this.remind(Memory.LastPandaMove);
		if (isMoveItem(pandaMove)) {
			this.memorize(Memory.MandatoryPanda, pandaMove.itemIndex);
		}
		return [this.rules().startRule(RuleId.MovePanda)];
	}
}
