import { ItemMove, Location, Material, MaterialItem, MaterialMove, XYCoordinates, isMoveItem } from '@gamepark/rules-api';
import { LocationType } from '../material/LocationType';
import { MaterialType } from '../material/MaterialType';
//import { RuleId } from './RuleId';
//import { PandaiCardType } from '../material/PandaiCardType';
import { startLocations } from '../PandaiSetup';
import { Memory } from './Memory';
import { PandaiPlayerTurnRule } from './PandaiPlayerTurnRule';
import { RuleId, cardRuleAssoc } from './RuleId';
//import { startLocations } from '../PandaiSetup';

export class PandaMoveRule extends PandaiPlayerTurnRule {
	getPlayerMoves() {
		const moves: MaterialMove[] = [];

		//if nothing specified, we take all the panda of my color
		let myPandasStock: Material = this.material(MaterialType.Panda)
			.location(LocationType.GridSquare)
			.id((id: number) => id % 10 === this.player);

		const mandatoryPanda = this.remind(Memory.MandatoryPanda);
		console.log('mandatory', mandatoryPanda);
		if (mandatoryPanda) {
			myPandasStock = myPandasStock.index(mandatoryPanda);
		}
		const excludedPanda = this.remind(Memory.ExcludedPanda);
		const inCagePanda = this.remind(Memory.IncagePanda);
		console.log('excluded panda', excludedPanda);

		const myPandasIndexes = myPandasStock.getIndexes().filter((index) => index !== excludedPanda && index !== inCagePanda);

		myPandasIndexes.forEach((pandaIndex) => {
			console.log('panda', pandaIndex);
			const adjacent = this.getAdjacentSquares(myPandasStock.index(pandaIndex).getItem()!);
			adjacent.forEach((adj) => {
				console.log('square', adj);
				moves.push(myPandasStock.index(pandaIndex).moveItem(adj));
			});
		});

		//moves.push(
		/*	this.material(MaterialType.Panda)
			.location(LocationType.GridSquare)
			.id((id: number) => id % 10 === this.player)
			.moveItems({ type: LocationType.GridSquare, x: 3, y: 3 });*/
		//);

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
		const notStartSquare = inGrid.filter((loc) => !startLocations[this.player].some((start: XYCoordinates) => start.x === loc.x && start.y === loc.y));
		return notStartSquare;
	}

	afterItemMove(move: ItemMove): MaterialMove[] {
		console.log('PandaMoveRule');
		const moves: MaterialMove[] = [];
		if (isMoveItem(move) && move.itemType === MaterialType.Panda) {
			moves.push(...this.removeExistingPandas(move.location));
			if (this.squareHasNoCard(move.location)) {
				//console.log("tirage de carte")
				this.memorize(Memory.LastPandaMove, move);
				//moves.push(this.material(MaterialType.ForestCard).location(LocationType.ForestDeck).deck().dealOne(move.location));
				moves.push(this.rules().startRule(RuleId.ChooseCardType));
			} else {
				const card = this.getCardOnSquare(move.location);
				moves.push(this.rules().startRule(cardRuleAssoc[card?.id]));
				//moves.push(this.forget(Memory.MandatoryPanda))
				//moves.push(this.rules().startPlayerTurn(RuleId.PlayerTurn, this.nextPlayer));
			}

			//nothing else here than Memory managing. Everything should be pushed as a move
			if (move.itemIndex == this.remind(Memory.ExcludedPanda)) this.forget(Memory.ExcludedPanda);
			if (move.itemIndex == this.remind(Memory.MandatoryPanda)) this.forget(Memory.MandatoryPanda);
		}

		return moves;
	}

	//todo meilleure facon d’écrire ca ?
	removeExistingPandas(moveLocation: Location) {
		return this.material(MaterialType.Panda)
			.location(({ type, x, y }) => type === LocationType.GridSquare && x === moveLocation.x && y === moveLocation.y)
			.id((id: number) => id % 10 !== this.player)
			.moveItems((item) => ({ type: LocationType.PandaStock, player: item.id % 10 }));

		for (const player of this.game.players) {
			if (player !== this.player) {
				const otherPandas = this.material(MaterialType.Panda)
					.location(LocationType.GridSquare)
					.id((id: number) => id % 10 === player)
					.filter((c) => c.location.x === moveLocation.x && c.location.y === moveLocation.y);
				if (otherPandas.getQuantity() !== 0) {
					otherPandas.moveItem({ type: LocationType.PandaStock, player: player });
				}
			}
		}
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
}
