import { PandaiCardType } from '../material/PandaiCardType';

export enum RuleId {
	MovePanda,
	ChooseCardType,
	PorcupineCardRule,
	ChairCardRule,
	CageCardRule,
	TigerCardRule,
	WhiteTigerCardRule,
	FruitsRule,
	HatRule,
	YellowPandaiRule,
	PurplePandaiRule,
	RedPandaiRule,
	BluePandaiRule,
	GreenPandaiRule,
	BrownPandaiRule,
	ChooseNewHatPandaRule,
}

export const cardRuleAssoc: Record<PandaiCardType, RuleId> = {
	[PandaiCardType.CHAIR]: RuleId.ChairCardRule,
	[PandaiCardType.PORCUPINE]: RuleId.PorcupineCardRule,
	[PandaiCardType.FRUITS]: RuleId.FruitsRule,
	[PandaiCardType.CAGE]: RuleId.CageCardRule,
	[PandaiCardType.TIGER]: RuleId.TigerCardRule,
	[PandaiCardType.WHITE_TIGER]: RuleId.WhiteTigerCardRule,
	[PandaiCardType.GREEN_PANDAI]: RuleId.GreenPandaiRule,
	[PandaiCardType.YELLOW_PANDAI]: RuleId.YellowPandaiRule,
	[PandaiCardType.PURPLE_PANDAI]: RuleId.PurplePandaiRule,
	[PandaiCardType.BROWN_PANDAI]: RuleId.BrownPandaiRule,
	[PandaiCardType.BLUE_PANDAI]: RuleId.BluePandaiRule,
	[PandaiCardType.RED_PANDAI]: RuleId.RedPandaiRule,
	[PandaiCardType.HAT]: RuleId.HatRule,
};
