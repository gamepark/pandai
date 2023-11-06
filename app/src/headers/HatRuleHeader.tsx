/** @jsxImportSource @emotion/react */

import { useTranslation } from 'react-i18next';

export const HatRuleHeader = () => { 
	const { t } = useTranslation();
	return <>{t('header.card.hat')}</>
};
