import { ItemMove, MaterialMove, isMoveItem } from '@gamepark/rules-api';
import { MaterialType } from '../material/MaterialType';
import { Memory } from './Memory';
import { PandaiPlayerTurnRule } from './PandaiPlayerTurnRule';
import { RuleId } from './RuleId';

export class HatCardRule extends PandaiPlayerTurnRule {
	getPlayerMoves(): MaterialMove[] {
		const moves: MaterialMove[] = [];
		const move = this.remind(Memory.LastPandaMove);
		if (isMoveItem(move) && move.itemType === MaterialType.Panda) {
			if (this.material(MaterialType.Panda).index(move.itemIndex).getItem()!.id > 10) {
				//hat panda, can swap his location with any panda
				moves.push(...this.getNormalPandas().moveItems(move.location));
			} else {
				const hatPandaLocation = this.getHatPanda().getItem()?.location;
				//console.log('hatPandaLocation', hatPandaLocation);
				if (hatPandaLocation) {
					moves.push(
						this.material(MaterialType.Panda).index(move.itemIndex).moveItem(hatPandaLocation)
					);
				}
			}
		}
		moves.push(this.passMove);
		return moves;
	}

	afterItemMove(_move: ItemMove): MaterialMove[] {
		return [this.rules().startPlayerTurn(RuleId.MovePanda, this.nextPlayer)];
	}

	get passMove() {
		const nextPlayer = this.nextPlayer;
		return this.rules().startPlayerTurn(RuleId.MovePanda, nextPlayer);
	}
}
