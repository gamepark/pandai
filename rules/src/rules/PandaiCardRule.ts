import { ItemMove, MaterialMove, PlayerTurnRule, RuleMove, isMoveItem } from '@gamepark/rules-api';
import { LocationType } from '../material/LocationType';
import { MaterialType } from '../material/MaterialType';
import { Memory } from './Memory';
import { RuleId } from './RuleId';

export class PandaiCardRule extends PlayerTurnRule {
	getPlayerMoves(): MaterialMove<number, number, number>[] {
		return [];
	}

	onRuleStart(_move: RuleMove) {
		console.log("PandaiCardRule", _move);
		//check if last moved panda has a hat and token has not already been taken
		const pandaMoved: ItemMove = this.remind(Memory.LastPandaMove);
		const pandaiCard: ItemMove = this.remind(Memory.LastCardDrawn);
		const existingToken = this.material(MaterialType.PandaiToken).location(LocationType.PandaiTokenEarnedStock).player(this.player).id(pandaiCard.itemType).getItem();
		if (isMoveItem(pandaMoved) && pandaMoved.itemType > 10 && !existingToken) {
			this.material(MaterialType.PandaiToken).location(LocationType.PandaiTokenStock).moveItem({type:LocationType.PandaiTokenEarnedStock, player:this.player});
			this.material(MaterialType.Panda).location(LocationType.PandaStock).player(this.player).moveItem({...pandaMoved.location, player:this.player});
		}
		return [this.rules().startPlayerTurn(RuleId.MovePanda, this.nextPlayer)];
	}
}

export class YellowPandaiRule extends PandaiCardRule{}
export class PurplePandaiRule extends PandaiCardRule{}
export class RedPandaiRule extends PandaiCardRule{}
export class BluePandaiRule extends PandaiCardRule{}
export class GreenPandaiRule extends PandaiCardRule{}
export class BrownPandaiRule extends PandaiCardRule{}
