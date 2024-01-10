import { ItemMove, Location, MaterialItem, MaterialMove, XYCoordinates, isMoveItem } from '@gamepark/rules-api';
import { startLocations } from '../PandaiSetup';
import { LocationType } from '../material/LocationType';
import { MaterialType } from '../material/MaterialType';
import { Memory } from './Memory';
import { PandaiPlayerTurnRule } from './PandaiPlayerTurnRule';
import { RuleId, cardRuleAssoc } from './RuleId';

export class MovePandaRule extends PandaiPlayerTurnRule {
	/*onRuleStart(move: RuleMove) {
		if (move.type === RuleMoveType.StartPlayerTurn) {
		  this.memorize(Memory.IncagePanda, 1)
		}
		return []
	  }*/

	getPlayerMoves() {
		const moves: MaterialMove[] = [];

		this.getMoveablePandaIndexes().forEach((pandaIndex) => {
			console.log('PANDA', pandaIndex, this.getAllPandas().index(pandaIndex).getItem());
			moves.push(
				...this.getAdjacentSquares(this.getAllPandas().index(pandaIndex).getItem()!).map((adj) => this.getAllPandas().index(pandaIndex).moveItem(adj))
			);
		});
		if(moves.length===0){
			moves.push(this.rules().startPlayerTurn(RuleId.MovePanda, this.nextPlayer))
		}
		return moves;
	}

	getAdjacentSquares(panda: MaterialItem): Location[] {
		return this.getValidSquares([
			{ type: LocationType.GridSquare, x: panda.location.x! - 1, y: panda.location.y! - 1 },
			{ type: LocationType.GridSquare, x: panda.location.x!, y: panda.location.y! - 1 },
			{ type: LocationType.GridSquare, x: panda.location.x! + 1, y: panda.location.y! - 1 },

			{ type: LocationType.GridSquare, x: panda.location.x! - 1, y: panda.location.y! },
			{ type: LocationType.GridSquare, x: panda.location.x! + 1, y: panda.location.y },

			{ type: LocationType.GridSquare, x: panda.location.x! - 1, y: panda.location.y! + 1 },
			{ type: LocationType.GridSquare, x: panda.location.x!, y: panda.location.y! + 1 },
			{ type: LocationType.GridSquare, x: panda.location.x! + 1, y: panda.location.y! + 1 },
		]);
	}

	getValidSquares(locations: Location[]) {
		const inGrid = locations.filter((loc) => loc.x! >= 0 && loc.y! >= 0 && loc.x! < 8 && loc.y! < 8);
		const notStartSquare = inGrid.filter(
			(loc) =>
				!Object.values(startLocations)
					.flatMap((s) => s)
					.some((start: XYCoordinates) => start.x === loc.x && start.y === loc.y)
		);
		const myPandaLocations = this.getAllPandas()
			.getItems()
			.map((p) => p.location);
		const notContainingMyPanda = notStartSquare.filter((loc) => !myPandaLocations.some((myPandaLoc) => myPandaLoc.x === loc.x && myPandaLoc.y === loc.y));
		return notContainingMyPanda;
	}

	afterItemMove(move: ItemMove): MaterialMove[] {
		const moves: MaterialMove[] = [];
		if (isMoveItem(move) && move.itemType === MaterialType.Panda) {
			moves.push(...this.removeExistingPandas(move.location));
			this.memorize(Memory.LastPandaMove, move);
			if (this.squareHasNoCard(move.location)) {
				//console.log("tirage de carte")
				//moves.push(this.material(MaterialType.ForestCard).location(LocationType.ForestDeck).deck().dealOne(move.location));
				moves.push(this.rules().startRule(RuleId.ChooseCardType));
			} else {
				const card = this.getCardOnSquare(move.location);
				this.memorize(Memory.LastCardDrawn, card);
				moves.push(this.rules().startRule(cardRuleAssoc[card?.id]));
			}

			//nothing else here than Memory managing. Everything should be pushed as a move

			if (move.itemIndex !== this.remind(Memory.IncagePanda)) this.forget(Memory.IncagePanda, this.player);
		}

		return moves;
	}

	removeExistingPandas(moveLocation: Location) {
		console.log("removeExistingPandas", this.material(MaterialType.Panda)
		.location(({ type, x, y }) => type === LocationType.GridSquare && x === moveLocation.x && y === moveLocation.y)
		.id((id: number) => id % 10 !== this.player)
		.getItems().length)

		return this.material(MaterialType.Panda)
			.location(({ type, x, y }) => type === LocationType.GridSquare && x === moveLocation.x && y === moveLocation.y)
			.id((id: number) => id % 10 !== this.player)
			.moveItems((item) => ({ type: LocationType.PandaStock, player: item.id % 10 }));
	}

	squareHasNoCard(location: Location) {
		return (
			this.material(MaterialType.ForestCard)
				.location(LocationType.GridSquare)
				.filter((c) => c.location.x === location.x && c.location.y === location.y)
				.getQuantity() === 0 &&
			this.material(MaterialType.MeadowCard)
				.location(LocationType.GridSquare)
				.filter((c) => c.location.x === location.x && c.location.y === location.y)
				.getQuantity() === 0
		);
	}

	getCardOnSquare(location: Location) {
		return (
			this.material(MaterialType.ForestCard)
				.location(LocationType.GridSquare)
				.filter((c) => c.location.x === location.x && c.location.y === location.y)
				.getItem() ||
			this.material(MaterialType.MeadowCard)
				.location(LocationType.GridSquare)
				.filter((c) => c.location.x === location.x && c.location.y === location.y)
				.getItem()
		);
	}

	getMoveablePandaIndexes() {
		return this.withoutInCagePanda(this.getAllPandas().getIndexes());
	}

	withoutInCagePanda(pandaIndexes: number[]) {
		const inCagePanda = this.remind(Memory.IncagePanda, this.player);
		console.log('inCagePanda panda', inCagePanda);
		console.log(
			'withoutInCagePanda',
			pandaIndexes.filter((i) => i !== inCagePanda)
		);
		return pandaIndexes.filter((i) => i !== inCagePanda);
	}
}
