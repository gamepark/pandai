import { MaterialMove, RuleMove } from '@gamepark/rules-api';
import { Memory } from './Memory';
import { PandaiPlayerTurnRule } from './PandaiPlayerTurnRule';
import { RuleId } from './RuleId';

export class FruitsCardRule extends PandaiPlayerTurnRule {
	getPlayerMoves(): MaterialMove<number, number, number>[] {
		return [];
	}

	onRuleStart(_move: RuleMove) {
        console.log("FruitsCardRule excludes", this.remind(Memory.LastPandaMove).itemIndex);
		this.memorize(Memory.ExcludedPanda, this.remind(Memory.LastPandaMove).itemIndex);
		return [this.rules().startPlayerTurn(RuleId.MovePanda, this.player)];
	}
}
