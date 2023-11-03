/** @jsxImportSource @emotion/react */
import { ItemLocator, LocationDescription } from '@gamepark/react-game';
import PlayerColor from '@gamepark/pandai/PlayerColor';
import { MaterialType } from '@gamepark/pandai/material/MaterialType';
import { LocationType } from '@gamepark/pandai/material/LocationType';
import { Location } from '@gamepark/rules-api';
import { css } from '@emotion/react';

export class GridSquareLocator extends ItemLocator<PlayerColor, MaterialType, LocationType> {
    parentItemType = MaterialType.Board;
    locationDescription = new GridSquareDescription();

    getPositionOnParent(location: Location) {
        return {
            x: offset + location.x! * squareSize + location.x! * gapSize,
            y: offset + location.y! * squareSize + location.y! * gapSize,
        };
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
