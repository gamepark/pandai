import { MaterialGameSetup, listingToList } from '@gamepark/rules-api';
import { PandaiOptions } from './PandaiOptions';
import { PandaiRules } from './PandaiRules';
import { LocationType } from './material/LocationType';
import { MaterialType } from './material/MaterialType';
import { PlayerColor } from './PlayerColor';
import { RuleId } from './rules/RuleId';
import { forestDeckContent, meadowDeckContent } from './material/PandaiCardType';
import { pandaiColors } from './material/PandaColor';

/**
 * This class creates a new Game based on the game options
 */
export class PandaiSetup extends MaterialGameSetup<PlayerColor, MaterialType, LocationType, PandaiOptions> {
    Rules = PandaiRules;

    setupMaterial(_options: PandaiOptions) {
        this.material(MaterialType.ForestCard).createItems(
            listingToList(forestDeckContent).map((card) => ({ id: card, location: { type: LocationType.ForestDeck } }))
        );
        this.material(MaterialType.ForestCard).shuffle();

        this.material(MaterialType.MeadowCard).createItems(
            listingToList(meadowDeckContent).map((card) => ({ id: card, location: { type: LocationType.MeadowDeck } }))
        );
        this.material(MaterialType.MeadowCard).shuffle();

        this.material(MaterialType.PandaiToken).createItems(
            pandaiColors.map((card) => ({ id: card, quantity: 4, location: { type: LocationType.PandaiTokenStock } }))
        );
    }

    start() {
        this.startPlayerTurn(RuleId.PlayerTurn, this.game.players[0]);
    }
}
