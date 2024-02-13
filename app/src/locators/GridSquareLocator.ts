/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PlayerColor from '@gamepark/pandai/PlayerColor';
import { LocationType } from '@gamepark/pandai/material/LocationType';
import { MaterialType } from '@gamepark/pandai/material/MaterialType';
import { ItemContext, ItemLocator, LocationDescription, MaterialContext } from '@gamepark/react-game';
import { Coordinates, Location, MaterialItem } from '@gamepark/rules-api';

export class GridSquareLocator extends ItemLocator<PlayerColor, MaterialType, LocationType> {
	parentItemType = MaterialType.Board;
	locationDescription = new GridSquareDescription();

	/*
	 * Used to position items and drag and drop locations. No z position possible here.
	 * 	@see getPosition
	 */
	getPositionOnParent(location: Location, _context: MaterialContext) {
		return {
			x: offset + location.x! * squareSize + location.x! * gapSize,
			y: offset + location.y! * squareSize + location.y! * gapSize,
		};
	}
	/*
	Positions items only.
	Adds x and y positions to what’s returned by getPositionOnParent
	*/
	getPosition(_item: MaterialItem<PlayerColor, LocationType>, context: ItemContext<PlayerColor, MaterialType, LocationType>): Coordinates {
		return this.getCorners(_item, context);
	}

	getCorners(_item: MaterialItem, context: ItemContext): Coordinates {
		if (context.type === MaterialType.Panda) {
			//console.log("displayindex",context,item )
			return { x: context.index % 2 === 0 ? 1 : -1, y: context.index < 2 ? -1 : 1, z: 0.2 };
		} else {
			return { x: 0, y: 0, z: 0.1 };
		}
	}
}

const squareSize = 10;
const gapSize = 0.21;
const offset = squareSize + 4.3;

class GridSquareDescription extends LocationDescription {
	width = 5;
	ratio = 1;
	extraCss = css`background:rgba(100,100,100,.1);`;
}
