import { HiddenMaterialRules, PositiveSequenceStrategy, hideItemId } from '@gamepark/rules-api';
import { LocationType } from './material/LocationType';
import { MaterialType } from './material/MaterialType';
import { PlayerColor } from './PlayerColor';
import { PlayerTurn } from './rules/PlayerTurn';
import { RuleId } from './rules/RuleId';

/**
 * This class implements the rules of the board game.
 * It must follow Game Park "Rules" API so that the Game Park server can enforce the rules.
 */
export class PandaiRules extends HiddenMaterialRules<PlayerColor, MaterialType, LocationType> {
    rules = {
        [RuleId.PlayerTurn]: PlayerTurn,
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
}
