import { Memory } from './Memory';
import { MovePandaRule } from './MovePandaRule';

export class FruitsCardRule extends MovePandaRule {
	getMoveablePandaIndexes() {
		console.log("LastPandaMove", this.remind(Memory.LastPandaMove))
		return this.withoutInCagePanda(
			this.getAllPandas()
				.getIndexes()
				.filter((i) => i !== this.remind(Memory.LastPandaMove).itemIndex)
		);
	}
}
