import { MaterialGameSetup, XYCoordinates, listingToList } from '@gamepark/rules-api';
import { PandaiOptions } from './PandaiOptions';
import { PandaiRules } from './PandaiRules';
import { PlayerColor } from './PlayerColor';
import { LocationType } from './material/LocationType';
import { MaterialType } from './material/MaterialType';
import { forestDeckContent, meadowDeckContent } from './material/PandaiCardType';
import { pandaiColors } from './material/PandaiColor';
import { RuleId } from './rules/RuleId';

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

        this.createPandas();
    }

    createPandas() {
        for (const player of this.players) {
            this.createPandasForColor(player);
        }
    }

    createPandasForColor(color: PlayerColor) {
        this.material(MaterialType.Panda).createItem({
            id: color,
            quantity: 3,
            location: { type: LocationType.PandaStock, player: color },
        });

        this.material(MaterialType.Panda).createItems(
            startLocations[color].map((c, index) => ({
                id: index === 0 ? color + 10 : color, //the first one is the hat panda
                location: { type: LocationType.GridSquare, ...c },
            })) //equivalent à c.x c.y destructuration
        );
    }

    start() {
        this.startPlayerTurn(RuleId.PlayerTurn, this.game.players[0]);
    }
}

const startLocations: Record<PlayerColor, XYCoordinates[]> = {
    [PlayerColor.Blue]: [
        { x: 7, y: 7 },
        { x: 6, y: 7 },
        { x: 7, y: 6 },
    ],
    [PlayerColor.Black]: [
        { x: 7, y: 0 },
        { x: 6, y: 0 },
        { x: 7, y: 1 },
    ],
    [PlayerColor.Orange]: [
        { x: 0, y: 7 },
        { x: 1, y: 7 },
        { x: 0, y: 6 },
    ],
    [PlayerColor.Pink]: [
        { x: 0, y: 0 },
        { x: 0, y: 1 },
        { x: 1, y: 0 },
    ],
};
