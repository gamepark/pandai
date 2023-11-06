import { ItemMove, MaterialMove, isMoveItem } from '@gamepark/rules-api';
import { LocationType } from '../material/LocationType';
import { MaterialType } from '../material/MaterialType';
import { PandaiPlayerTurnRule } from './PandaiPlayerTurnRule';

export class ChooseNewHatPandaRule extends PandaiPlayerTurnRule {
	getPlayerMoves(): MaterialMove<number, number, number>[] {
		const hatPanda = this.getHatPanda();
		return this.material(MaterialType.Panda)
			.location(LocationType.GridSquare)
			.id(this.player)
			.getItems()
			.map((item) => hatPanda.moveItem(item.location));
	}
	afterItemMove(_move: ItemMove): MaterialMove[] {
		if (isMoveItem(_move) && _move.itemType === MaterialType.Panda) {
			this.material(MaterialType.Panda).index(_move.itemIndex).moveItem({ type: LocationType.PandaStock, player: this.player });
		}
		return [];
	}
}
