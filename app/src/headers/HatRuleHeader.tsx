/** @jsxImportSource @emotion/react */

import { PlayMoveButton, useLegalMoves } from '@gamepark/react-game';
import { MaterialMove, isEndGame, isStartPlayerTurn } from '@gamepark/rules-api';
import { Trans, useTranslation } from 'react-i18next';

export const HatRuleHeader = () => {
	const { t } = useTranslation();
	const legalMoves = useLegalMoves<MaterialMove>();
	const passMove = legalMoves.find((move) => isStartPlayerTurn(move) || isEndGame(move));

	if (passMove) {
		return (
			<Trans defaults="header.card.hat">
				<PlayMoveButton move={passMove} />
			</Trans>
		);
	}

	return <>{t('header.card.hat')}</>;
};
