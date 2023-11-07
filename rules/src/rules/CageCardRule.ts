import { MaterialMove, RuleMove } from '@gamepark/rules-api';
import { Memory } from './Memory';
import { PandaiPlayerTurnRule } from './PandaiPlayerTurnRule';
import { RuleId } from './RuleId';

export class CageCardRule extends PandaiPlayerTurnRule {
	getPlayerMoves(): MaterialMove<number, number, number>[] {
		return [];
	}

	onRuleStart(_move: RuleMove) {
		this.memorize(Memory.IncagePanda, this.remind(Memory.LastPandaMove).itemIndex, this.player);
		console.log("memorize IncagePanda",  this.remind(Memory.IncagePanda, this.player));
		return [this.rules().startPlayerTurn(RuleId.MovePanda, this.nextPlayer)];
	}
}
