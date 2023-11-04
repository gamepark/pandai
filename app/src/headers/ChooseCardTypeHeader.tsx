/** @jsxImportSource @emotion/react */

import { useTranslation } from 'react-i18next';

export const ChooseCardTypeHeader = () => { 
	const { t } = useTranslation();
	return <>{t('header.choose.card.type')}</>
};
