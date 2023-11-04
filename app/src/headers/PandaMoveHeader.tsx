/** @jsxImportSource @emotion/react */

import { useTranslation } from 'react-i18next';

export const PandaMoveHeader = () => { 
	const { t } = useTranslation();
	return <>{t('header.panda.move')}</>
};



