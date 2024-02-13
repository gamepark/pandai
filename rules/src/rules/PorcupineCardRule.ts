import { Memory } from './Memory';
import { MovePandaRule } from './MovePandaRule';

export class PorcupineCardRule extends MovePandaRule {
	getMoveablePandaIndexes() {
		console.log("remind porcupine", this.remind(Memory.LastPandaMove).itemIndex)
		return [this.remind(Memory.LastPandaMove).itemIndex];
	}
}
