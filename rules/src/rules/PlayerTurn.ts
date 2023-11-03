import { ItemMove, MaterialMove, PlayerTurnRule, isMoveItem } from '@gamepark/rules-api';
import { MaterialType } from '../material/MaterialType';
import { LocationType } from '../material/LocationType';
import { RuleId } from './RuleId';

export class PlayerTurn extends PlayerTurnRule {
    getPlayerMoves() {
        return this.material(MaterialType.Panda)
            .location(LocationType.GridSquare)
            .id((id: number) => id % 10 === this.player)
            .moveItems({ type: LocationType.GridSquare, x: 3, y: 3 });
    }

    afterItemMove(move: ItemMove): MaterialMove[] {
        const moves: MaterialMove[] = [];
        if (isMoveItem(move) && move.itemType === MaterialType.Panda) {
            moves.push(
                this.material(MaterialType.ForestCard).location(LocationType.ForestDeck).deck().dealOne(move.location)
            );
            moves.push(this.rules().startRule(RuleId.PlayerTurn));
            moves.push(this.rules().startPlayerTurn(RuleId.PlayerTurn, this.nextPlayer));
        }

        return moves;
    }
}
