import { ItemMove, MaterialItem, MaterialMove, RuleMove, isMoveItem } from '@gamepark/rules-api'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { Memory } from './Memory'
import { PandaiPlayerTurnRule } from './PandaiPlayerTurnRule'
import { RuleId } from './RuleId'
import { PandaiColor } from '../material/PandaiColor'
import { PandaiCardType } from '../material/PandaiCardType'

export class PandaiCardRule extends PandaiPlayerTurnRule {
	getPlayerMoves(): MaterialMove<number, number, number>[] {
		return []
	}

	onRuleStart(_move: RuleMove) {
		console.log('PandaiCardRule', _move)
		const moves = []
		//check if last moved panda has a hat and token has not already been taken
		const pandaMoved: ItemMove = this.remind(Memory.LastPandaMove)
		const pandaiCard: MaterialItem = this.remind(Memory.LastCardDrawn)
		const pandaiColor = cardAndPandaiColorMatches[pandaiCard.id]
		const existingTokenQty = this.material(MaterialType.PandaiToken)
			.location(LocationType.PandaiTokenEarnedStock)
			.player(this.player)
			.id(pandaiColor)
			.getQuantity()

		if (isMoveItem(pandaMoved) && this.isLastPandaMovedWearingHat() && existingTokenQty === 0) {
			moves.push(
				this.material(MaterialType.PandaiToken)
					.location(LocationType.PandaiTokenStock)
					.id(pandaiColor)
					.limit(1)
					.moveItem({ type: LocationType.PandaiTokenEarnedStock, player: this.player })
			)
			moves.push(
				this.material(MaterialType.Panda)
					.location(LocationType.PandaStock)
					.player(this.player)
					.moveItem({ ...pandaMoved.location, player: this.player })
			)
		}
		if (this.material(MaterialType.PandaiToken).location(LocationType.PandaiTokenEarnedStock).player(this.player).getQuantity() === 4) {
			moves.push(this.rules().endGame())
		} else {
			moves.push(this.rules().startPlayerTurn(RuleId.MovePanda, this.nextPlayer))
		}
		return moves
	}
}

export const cardAndPandaiColorMatches = {
	[PandaiCardType.BLUE_PANDAI]: PandaiColor.Blue,
	[PandaiCardType.BROWN_PANDAI]: PandaiColor.Brown,
	[PandaiCardType.GREEN_PANDAI]: PandaiColor.Green,
	[PandaiCardType.YELLOW_PANDAI]: PandaiColor.Yellow,
	[PandaiCardType.PURPLE_PANDAI]: PandaiColor.Purple,
	[PandaiCardType.RED_PANDAI]: PandaiColor.Red
}

export class YellowPandaiRule extends PandaiCardRule {}
export class PurplePandaiRule extends PandaiCardRule {}
export class RedPandaiRule extends PandaiCardRule {}
export class BluePandaiRule extends PandaiCardRule {}
export class GreenPandaiRule extends PandaiCardRule {}
export class BrownPandaiRule extends PandaiCardRule {}
