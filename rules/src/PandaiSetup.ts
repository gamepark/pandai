import { Location, MaterialGameSetup, listingToList } from '@gamepark/rules-api';
import { PandaiOptions } from './PandaiOptions';
import { PandaiRules } from './PandaiRules';
import { LocationType } from './material/LocationType';
import { MaterialType } from './material/MaterialType';
import { PlayerColor } from './PlayerColor';
import { RuleId } from './rules/RuleId';
import { forestDeckContent, meadowDeckContent } from './material/PandaiCardType';
import { pandaiColors } from './material/PandaiColor';
import { Panda } from './material/Panda';

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
        this.createPandasForColor(
            Panda.Pink,
            Panda.PinkHat,
            { type: LocationType.PinkStartGridSquare, x: 2, y: 1 },
            { type: LocationType.PinkStartGridSquare, x: 1, y: 2 },
            { type: LocationType.PinkStartGridSquare, x: 1, y: 1 }
        );
        this.createPandasForColor(
            Panda.Black,
            Panda.BlackHat,
            { type: LocationType.BlackStartGridSquare, x: 7, y: 1 },
            { type: LocationType.BlackStartGridSquare, x: 8, y: 2 },
            { type: LocationType.BlackStartGridSquare, x: 8, y: 1 }
        );
        this.createPandasForColor(
            Panda.Blue,
            Panda.BlueHat,
            { type: LocationType.BlueStartGridSquare, x: 7, y: 8 },
            { type: LocationType.BlueStartGridSquare, x: 8, y: 7 },
            { type: LocationType.BlueStartGridSquare, x: 8, y: 8 }
        );
        this.createPandasForColor(
            Panda.Orange,
            Panda.OrangeHat,
            { type: LocationType.OrangeStartGridSquare, x: 1, y: 7 },
            { type: LocationType.OrangeStartGridSquare, x: 2, y: 8 },
            { type: LocationType.OrangeStartGridSquare, x: 1, y: 8 }
        );
    }

    createPandasForColor(
        color: Panda,
        coloredHat: Panda,
        locationFirstPanda: Location,
        locationSecondPanda: Location,
        locationHatPanda: Location
    ) {
        this.material(MaterialType.Panda).createItems([
            {
                id: color,
                quantity: 3,
                location: { type: LocationType.PandaStock },
            },
            {
                id: color,
                location: locationFirstPanda,
            },
            {
                id: color,
                location: locationSecondPanda,
            },
            {
                id: coloredHat,
                location: locationHatPanda,
            },
        ]);
    }

    start() {
        this.startPlayerTurn(RuleId.PlayerTurn, this.game.players[0]);
    }
}
