/** @jsxImportSource @emotion/react */
import board from '../images/board.jpg';
import { BoardDescription } from '@gamepark/react-game';
import { LocationType } from '@gamepark/pandai/material/LocationType';
import { BoardRules } from './BoardRules';

class PandaiBoardDescription extends BoardDescription {
    image = board;
    height = 55;
    width = 55;
    staticItem = { location: { type: LocationType.Board } };
    locations = [...Array(8)].flatMap((_, x) => [...Array(8)].map((_, y) => ({ type: LocationType.GridSquare, x, y }))); //=x:x et y:y _=param ignoré
    rules = BoardRules;
}

export const boardDescription = new PandaiBoardDescription();
