import { HiddenMaterialRules, PositiveSequenceStrategy, hideItemId } from '@gamepark/rules-api';
import { LocationType } from './material/LocationType';
import { MaterialType } from './material/MaterialType';
import { PlayerColor } from './PlayerColor';
import { MovePandaRule } from './rules/MovePandaRule';
import { RuleId } from './rules/RuleId';
import { ChairCardRule } from './rules/ChairCardRule';
import { CageCardRule } from './rules/CageCardRule';
import { PandaiCardRule } from './rules/PandaiCardRule';
import { TigerCardRule, WhiteTigerCardRule } from './rules/TigerCardRule';
import { HatCardRule } from './rules/HatCardRule';
import { FruitsCardRule } from './rules/FruitsCardRule';
import { ChooseCardTypeRule } from './rules/ChooseCardTypeRule';
import { PorcupineCardRule } from './rules/PorcupineCardRule';
import { ChooseNewHatPandaRule } from './rules/ChooseNewHatPandaRule';

/**
 * This class implements the rules of the board game.
 * It must follow Game Park "Rules" API so that the Game Park server can enforce the rules.
 */
export class PandaiRules extends HiddenMaterialRules<PlayerColor, MaterialType, LocationType> {
	rules = {
		[RuleId.MovePanda]: MovePandaRule,
		[RuleId.ChooseNewHatPandaRule]: ChooseNewHatPandaRule,

		[RuleId.ChooseCardType]: ChooseCardTypeRule,
		[RuleId.ChairCardRule]: ChairCardRule,
		[RuleId.PorcupineCardRule]: PorcupineCardRule,
		[RuleId.CageCardRule]: CageCardRule,
		[RuleId.FruitsRule]: FruitsCardRule,
		[RuleId.HatRule]: HatCardRule,
		[RuleId.TigerCardRule]: TigerCardRule,
		[RuleId.WhiteTigerCardRule]: WhiteTigerCardRule,

		[RuleId.BluePandaiRule]: PandaiCardRule,
		[RuleId.YellowPandaiRule]: PandaiCardRule,
		[RuleId.BrownPandaiRule]: PandaiCardRule,
		[RuleId.GreenPandaiRule]: PandaiCardRule,
		[RuleId.PurplePandaiRule]: PandaiCardRule,
		[RuleId.RedPandaiRule]: PandaiCardRule,
	};
	locationsStrategies = {
		[MaterialType.ForestCard]: {
			[LocationType.ForestDeck]: new PositiveSequenceStrategy(),
		},
		[MaterialType.MeadowCard]: {
			[LocationType.MeadowDeck]: new PositiveSequenceStrategy(),
		},
	};
	hidingStrategies = {
		[MaterialType.ForestCard]: {
			[LocationType.ForestDeck]: hideItemId,
		},
		[MaterialType.MeadowCard]: {
			[LocationType.MeadowDeck]: hideItemId,
		},
	};

	getScore(player: PlayerColor) {
		return this.material(MaterialType.PandaiToken).location(LocationType.PandaiTokenEarnedStock).player(player).length
	  }
}
