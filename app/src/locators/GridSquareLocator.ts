/** @jsxImportSource @emotion/react */
import { ItemLocator, LocationDescription } from '@gamepark/react-game';
import PlayerColor from '@gamepark/pandai/PlayerColor';
import { MaterialType } from '@gamepark/pandai/material/MaterialType';
import { LocationType } from '@gamepark/pandai/material/LocationType';
import { Location } from '@gamepark/rules-api';
import { css } from '@emotion/react';

export class GridSquareLocator extends ItemLocator<PlayerColor, MaterialType, LocationType> {
    parentItemType = MaterialType.Board;
    locationDescription=new GridSquareDescription();

    getPositionOnParent(location: Location) {
        return {
            x: offset + location.x! * squareSize + (location.x! - 1) * gapSize,
            y: offset + location.y! * squareSize + (location.y! - 1) * gapSize,
        };
    }
}

const squareSize = 9.9;
const gapSize = 0.5;
const offset = 4;

class GridSquareDescription extends LocationDescription {
    width = 4.5;
    ratio = 1;
	extraCss=css`background:red`;
}
