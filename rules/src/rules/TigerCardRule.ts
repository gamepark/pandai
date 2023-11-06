import { ItemMove, MaterialMove, RuleMove, isMoveItem } from '@gamepark/rules-api';
import { LocationType } from '../material/LocationType';
import { MaterialType } from '../material/MaterialType';
import { Memory } from './Memory';
import { PandaiPlayerTurnRule } from './PandaiPlayerTurnRule';
import { RuleId } from './RuleId';

export class TigerCardRule extends PandaiPlayerTurnRule {
	getPlayerMoves(): MaterialMove<number, number, number>[] {
		const moves: MaterialMove[] = [];
		this.removeNormalPandaOrChooseNewHat(moves);
		return moves;
	}

	removeNormalPandaOrChooseNewHat(moves: MaterialMove[]) {
		const move: ItemMove = this.remind(Memory.LastPandaMove);
		if (isMoveItem(move) && move.itemType === MaterialType.Panda) {
			if (move.itemType > 10) {
				console.log('hat panda');
				//hat panda
				moves.push(this.rules().startPlayerTurn(RuleId.ChooseNewHatPandaRule, this.player));
			} else {
				this.material(MaterialType.Panda).index(move.itemIndex).moveItem({ type: LocationType.PandaStock, player: this.player });
				moves.push(this.rules().startPlayerTurn(RuleId.MovePanda, this.nextPlayer));
			}
		}
	}
}

export class WhiteTigerCardRule extends TigerCardRule {
	onRuleStart(_move: RuleMove) {
		console.log('WhiteTigerCardRule', _move);
		const moves: MaterialMove[] = [];
		this.removeNormalPandaOrChooseNewHat(moves);
		this.material(MaterialType.ForestCard).id(this.remind(Memory.LastCardDrawn)).moveItem({ type: LocationType.ForestDeck });
		this.material(MaterialType.ForestCard).shuffle();
		return moves;
	}
}
