import { ItemMove, Material, PlayerTurnRule, isMoveItem } from '@gamepark/rules-api';
import { MaterialType } from '../material/MaterialType';
import { LocationType } from '../material/LocationType';
import { Memory } from './Memory';

const OFFSET_INDEX = 10;

export abstract class PandaiPlayerTurnRule extends PlayerTurnRule {
	getHatPanda(): Material {
		return this.material(MaterialType.Panda)
			.location(LocationType.GridSquare)
			.id((id: number) => id === OFFSET_INDEX + this.player);
	}

	getNormalPandas(): Material {
		return this.material(MaterialType.Panda)
			.location(LocationType.GridSquare)
			.id((id: number) => id % OFFSET_INDEX === this.player && id < OFFSET_INDEX);
	}

	getAllPandas(): Material {
		return this.material(MaterialType.Panda)
			.location(LocationType.GridSquare)
			.id((id: number) => id % OFFSET_INDEX === this.player);
	}

	isLastPandaMovedWearingHat(){
		const pandaMoved: ItemMove = this.remind(Memory.LastPandaMove);
		return isMoveItem(pandaMoved) && this.material(MaterialType.Panda).index(pandaMoved.itemIndex).getItem()!.id > 10 
	
	}
}
