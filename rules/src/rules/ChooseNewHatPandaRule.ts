import { ItemMove, MaterialMove, isSelectItem } from '@gamepark/rules-api'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { PandaiPlayerTurnRule } from './PandaiPlayerTurnRule'
import { RuleId } from './RuleId'

export class ChooseNewHatPandaRule extends PandaiPlayerTurnRule {
	getPlayerMoves(): MaterialMove<number, number, number>[] {
		return this.getNormalPandas().selectItems()
	}
	
	afterItemMove(_move: ItemMove): MaterialMove[] {
		const moves :MaterialMove[]=[]
		if (isSelectItem(_move) && _move.itemType === MaterialType.Panda) {
			const selectedPanda= this.material(MaterialType.Panda).index(_move.itemIndex)
			moves.push(this.getHatPanda().moveItem(selectedPanda.getItem()!.location!))
			moves.push(selectedPanda.moveItem({ type: LocationType.PandaStock, player: this.player }));
			moves.push(this.rules().startPlayerTurn(RuleId.MovePanda, this.nextPlayer));
		}
		return moves;
	}
}
