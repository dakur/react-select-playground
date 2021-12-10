import React, {useState} from "react";
import {OnChangeValue} from 'react-select';
import {CreatableSelectOptionType, CreatableSelectProps} from '../CreatableSelectProps';
import {assert} from '../helpers/assert';

/*
 * Provides state and state change functions for all other HOCs.
 * This shall be the only source of truth about what selected options
 * and input value is.
 */
export function makeStateful<P extends CreatableSelectProps>(CreatableSelect: React.ComponentType<P>): React.ComponentType<P>
{
	return (props) =>
	{
		//const defaultValue = props.defaultValue as CreatableSelectOptionType[];
		assert(typeof props.defaultValue !== 'undefined');
		const [selectedOptions, updateOptions] = useState<OnChangeValue<CreatableSelectOptionType, true>>(props.defaultValue); // what is selected
		const [inputValue, setInputValue] = useState<string>(''); // what is typed

		return (
			<CreatableSelect
				{...props}

				value={selectedOptions}
				onChange={(newOptions) => updateOptions(newOptions)}
				inputValue={inputValue}
				onInputChange={(newValue: string) => setInputValue(newValue)}
			/>
		);
	};
}
