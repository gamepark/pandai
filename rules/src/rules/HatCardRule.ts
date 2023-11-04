import { ItemMove, MaterialMove, PlayerTurnRule, isMoveItem } from '@gamepark/rules-api';
import { LocationType } from '../material/LocationType';
import { MaterialType } from '../material/MaterialType';
import { Memory } from './Memory';
import { RuleId } from './RuleId';

export class HatCardRule extends PlayerTurnRule {
	getPlayerMoves(): MaterialMove[] {
		const moves: MaterialMove[] = [];
		const move = this.remind(Memory.LastPandaMove);
		if (isMoveItem(move) && move.itemType === MaterialType.Panda) {
			if (this.material(MaterialType.Panda).index(move.itemIndex).getItem()!.id > 10) {
				//hat panda, can swap his location with any panda
				moves.push(...this.material(MaterialType.Panda).player(this.player).location(LocationType.GridSquare).moveItems(move.location));
			} else {
				const hatPandaLocation = this.material(MaterialType.Panda)
					.player(this.player)
					.id((id: number) => id > 10)
					.getItem()?.location;

				if (hatPandaLocation) {
					moves.push(
						this.material(MaterialType.Panda).player(this.player).location(LocationType.GridSquare).index(move.itemIndex).moveItem(hatPandaLocation)
					);
				}
			}
		}
		return moves;
	}

	afterItemMove(_move: ItemMove): MaterialMove[] {
		return [this.rules().startPlayerTurn(RuleId.MovePanda, this.nextPlayer)];
	}
}
