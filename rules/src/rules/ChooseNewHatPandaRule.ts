import { ItemMove, MaterialMove, isMoveItem } from '@gamepark/rules-api';
import { LocationType } from '../material/LocationType';
import { MaterialType } from '../material/MaterialType';
import { Memory } from './Memory';
import { PandaiPlayerTurnRule } from './PandaiPlayerTurnRule';

export class ChooseNewHatPandaRule extends PandaiPlayerTurnRule {
	getPlayerMoves(): MaterialMove<number, number, number>[] {
		const moves: MaterialMove[] = [];

		const move: ItemMove = this.remind(Memory.LastPandaMove);
		if (isMoveItem(move) && move.itemType === MaterialType.Panda) {
			if (move.itemType > 10) {
				this.material(MaterialType.Panda)
					.location(LocationType.GridSquare)
					.player(this.player)
					.id((id: number) => id < 10)
					.getItems()
					.map((move) => move.location)
					.forEach((location) => this.material(MaterialType.Panda).index(move.itemIndex).moveItem(location));
			}
		}
		return moves;
	}
	afterItemMove(_move: ItemMove): MaterialMove[] {
		if (isMoveItem(_move) && _move.itemType === MaterialType.Panda) {
			this.material(MaterialType.Panda).index(_move.itemIndex).moveItem({ type: LocationType.PandaStock, player: this.player });
		}
		return [];
	}
}
