import { Material, PlayerTurnRule } from '@gamepark/rules-api';
import { MaterialType } from '../material/MaterialType';
import { LocationType } from '../material/LocationType';

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
}
