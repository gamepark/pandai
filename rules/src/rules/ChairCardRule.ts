import { MaterialMove, PlayerTurnRule } from '@gamepark/rules-api';
import { RuleId } from './RuleId';

export class ChairCardRule extends PlayerTurnRule {
	getPlayerMoves(): MaterialMove<number, number, number>[] {
		return [];
	}

	onRuleStart() {
		return [this.rules().startPlayerTurn(RuleId.MovePanda, this.nextPlayer)];
	}
}
