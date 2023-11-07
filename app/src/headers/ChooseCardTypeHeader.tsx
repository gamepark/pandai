/** @jsxImportSource @emotion/react */

import { PandaiRules } from '@gamepark/pandai/PandaiRules';
import { useLegalMoves, usePlayerId, usePlayerName, useRules } from '@gamepark/react-game';
import { MaterialMove } from '@gamepark/rules-api';
import { useTranslation } from 'react-i18next';

export const ChooseCardTypeHeader = () => {
	const { t } = useTranslation(); //===const  translation = useTranslation(); const t=translation.t
	const playerId = usePlayerId();
	const rules = useRules<PandaiRules>()!;
	const legalMoves = useLegalMoves<MaterialMove>()
	const playerName = usePlayerName(rules.game.rule!.player!);
	if (!legalMoves.length) {
		return <>{t('header.turn', { player: playerName })}</>;
	}
	
	if (rules.game.rule?.player === playerId) {
	}
	return <>{t('header.choose.card.type')}</>;
};
