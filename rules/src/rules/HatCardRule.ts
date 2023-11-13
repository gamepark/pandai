import { ItemMove, MaterialMove, isMoveItem } from '@gamepark/rules-api';
import { MaterialType } from '../material/MaterialType';
import { Memory } from './Memory';
import { PandaiPlayerTurnRule } from './PandaiPlayerTurnRule';
import { RuleId } from './RuleId';

export class HatCardRule extends PandaiPlayerTurnRule {
	/**
	 *
	 * @param _move _move comes with the new location and not the old one
	 * @returns
	 */
	beforeItemMove(_move: ItemMove): MaterialMove[] {
		if (isMoveItem(_move)) {
			const itemToMove = this.material(MaterialType.Panda).index(_move.itemIndex).getItem();
			this.memorize(Memory.PandaLocationBeforeSwap, itemToMove?.location);
			//console.log("PandaLocationBeforeSwap", itemToMove?.location)
			this.memorize(
				Memory.OtherPandaToSwapIndex,
				this.getAllPandas()
					.location(({ type, x, y }) => type === _move.location.type && x === _move.location.x && y === _move.location.y)
					.getIndex()
			);
			//console.log("OtherPandaToSwapIndex",this.remind(Memory.OtherPandaToSwapIndex))
		}
		return [];
	}

	getPlayerMoves(): MaterialMove[] {
		const moves: MaterialMove[] = [];
		const move = this.remind(Memory.LastPandaMove);
		if (isMoveItem(move) && move.itemType === MaterialType.Panda) {
			//console.log("last panda move", move, this.material(MaterialType.Panda).index(move.itemIndex).getItem())
			if (this.material(MaterialType.Panda).index(move.itemIndex).getItem()!.id > 10) {
				//hat panda, can swap his location with any panda
				moves.push(...this.getNormalPandas().moveItems(move.location));
			} else {
				moves.push(this.material(MaterialType.Panda).index(move.itemIndex).moveItem(this.getHatPanda().getItem()?.location!));
			}
		}
		moves.push(this.passMove);
		return moves;
	}

	afterItemMove(move: ItemMove): MaterialMove[] {
		const moves: MaterialMove[] = [];
		if (isMoveItem(move) && move.itemType === MaterialType.Panda) {
			const destination = this.remind(Memory.PandaLocationBeforeSwap);
			const pandaToMoveIndex = this.remind(Memory.OtherPandaToSwapIndex);
			if (destination && pandaToMoveIndex !== -1) moves.push(this.getAllPandas().index(pandaToMoveIndex).moveItem(destination));
		}
		this.forget(Memory.OtherPandaToSwapIndex);
		this.forget(Memory.PandaLocationBeforeSwap);

		moves.push(this.rules().startPlayerTurn(RuleId.MovePanda, this.nextPlayer));
		return moves;
	}

	get passMove() {
		const nextPlayer = this.nextPlayer;
		return this.rules().startPlayerTurn(RuleId.MovePanda, nextPlayer);
	}
}
