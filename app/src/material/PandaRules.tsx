/** @jsxImportSource @emotion/react */
import { MaterialRulesProps, usePlayerName } from '@gamepark/react-game';
import { useTranslation } from 'react-i18next';

export const PandaRules = ({ item }: MaterialRulesProps) => {
    const { t } = useTranslation();
    const playerName = usePlayerName(item.id!);
    return (
        <>
            <h2>{t('rules.panda.title', { player: playerName })}</h2>
            <p>{t('rules.panda.purpose')}</p>
        </>
    );
};
