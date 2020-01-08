import {
	Field,
	Label,
	UrlInput,
} from '@rocket.chat/fuselage';
import React from 'react';

import { useAbsoluteUrl } from '../../../../contexts/ServerContext';
import { ResetSettingButton } from '../ResetSettingButton';

export function RelativeUrlSettingInput({
	_id,
	label,
	value,
	placeholder,
	readonly,
	autocomplete,
	disabled,
	hasResetButton,
	onChangeValue,
	onResetButtonClick,
}) {
	const getAbsoluteUrl = useAbsoluteUrl();

	const handleChange = (event) => {
		onChangeValue && onChangeValue(event.currentTarget.value);
	};

	return <>
		<Field.Row>
			<Label htmlFor={_id} text={label} title={_id} />
			{hasResetButton && <ResetSettingButton data-qa-reset-setting-id={_id} onClick={onResetButtonClick} />}
		</Field.Row>
		<UrlInput
			data-qa-setting-id={_id}
			id={_id}
			value={getAbsoluteUrl(value)}
			placeholder={placeholder}
			disabled={disabled}
			readOnly={readonly}
			autoComplete={autocomplete === false ? 'off' : undefined}
			onChange={handleChange}
		/>
	</>;
}
