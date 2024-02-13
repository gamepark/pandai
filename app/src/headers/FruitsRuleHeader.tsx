/** @jsxImportSource @emotion/react */

import { useTranslation } from 'react-i18next';

export const FruitsRuleHeader = () => {
	const { t } = useTranslation();
	return <>{t('header.fruits.move')}</>;
};
