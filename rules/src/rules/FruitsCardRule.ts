import { MaterialMove, PlayerTurnRule, RuleMove } from '@gamepark/rules-api';
import { RuleId } from './RuleId';
import { Memory } from './Memory';

export class FruitsCardRule extends PlayerTurnRule {
	getPlayerMoves(): MaterialMove<number, number, number>[] {
		return [];
	}

	onRuleStart(_move: RuleMove) {
        console.log("FruitsCardRule");
		this.memorize(Memory.ExcludedPanda, this.remind(Memory.LastPandaMove).id);
		return [this.rules().startPlayerTurn(RuleId.MovePanda, this.player)];
	}
}
