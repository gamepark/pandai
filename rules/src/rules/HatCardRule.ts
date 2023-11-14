import { ItemMove, MaterialMove, isMoveItem, isSelectItem } from '@gamepark/rules-api';
import { MaterialType } from '../material/MaterialType';
import { Memory } from './Memory';
import { PandaiPlayerTurnRule } from './PandaiPlayerTurnRule';
import { RuleId } from './RuleId';

export class HatCardRule extends PandaiPlayerTurnRule {
	/**
	 * @param _move _move comes with the new location and not the old one
	 * @returns
	 */
	beforeItemMove(_move: ItemMove): MaterialMove[] {
		return [];
	}

	getPlayerMoves(): MaterialMove[] {
		const moves: MaterialMove[] = [];
		const move = this.remind(Memory.LastPandaMove);
		if (isMoveItem(move) && move.itemType === MaterialType.Panda) {
			//console.log("last panda move", move, this.material(MaterialType.Panda).index(move.itemIndex).getItem())
			if (this.material(MaterialType.Panda).index(move.itemIndex).getItem()!.id > 10) {
				//hat panda, can swap his location with any panda
				moves.push(...this.getNormalPandas().selectItems());
			} else {
				moves.push(this.getHatPanda().selectItem());
			}
		}
		moves.push(this.passMove);
		return moves;
	}

	afterItemMove(selectMove: ItemMove): MaterialMove[] {
		const moves: MaterialMove[] = [];
		if (isSelectItem(selectMove) && selectMove.itemType === MaterialType.Panda) {
			const pandaMoved = this.material(MaterialType.Panda).index(this.remind(Memory.LastPandaMove).itemIndex);
			const selectedPanda = this.material(MaterialType.Panda).index(selectMove.itemIndex);
			//console.log('HatCardRule', pandaMoved.getItem()!.location, "=>",selectedPanda.getItem()?.location)
			//console.log( selectedPanda.getItem()!.location, "=>",pandaMoved.getItem()?.location, "|")
			moves.push(pandaMoved.moveItem(selectedPanda.getItem()?.location!));
			moves.push(selectedPanda.moveItem(pandaMoved.getItem()?.location!));
		}
		moves.push(this.rules().startPlayerTurn(RuleId.MovePanda, this.nextPlayer));
		return moves;
	}

	get passMove() {
		const nextPlayer = this.nextPlayer;
		return this.rules().startPlayerTurn(RuleId.MovePanda, nextPlayer);
	}
}
