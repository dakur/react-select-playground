import React from "react";
import {doesOptionAlreadyExist} from '../helpers/doesOptionAlreadyExist';
import {CreatableSelectProps} from '../CreatableSelectProps';
import {assert} from '../helpers/assert';

export function makeOptionIfCommaPressed<P extends CreatableSelectProps>(CreatableSelect: React.ComponentType<P>): React.ComponentType<P>
{
	return (props) =>
	{
		return (
			<CreatableSelect
				{...props}

				onInputChange={(newValue: string, actionMeta) => {
					let isValueValidAndHasBeenAdded = false;
					if (newValue.endsWith(',')) {
						const newOptionValue = newValue.slice(0, -1); // strip last trailing comma
						if ( ! doesOptionAlreadyExist(props.value, newOptionValue)) {
							const newOption = {label: newOptionValue, value: newOptionValue};

							assert(typeof props.onChange !== 'undefined'); // makeStateful HOC guarantees prop existence
							props.onChange(
								[...props.value, newOption],
								{action: 'create-option', option: newOption}, // see https://react-select.com/advanced#action-meta
							);

							isValueValidAndHasBeenAdded = true;
						}
					}

					assert(typeof props.onInputChange !== 'undefined'); // makeStateful HOC guarantees prop existence

					if (isValueValidAndHasBeenAdded) {
						props.onInputChange('', {action: 'set-value', prevInputValue: actionMeta.prevInputValue});
						return;
					}

					// pass further
					props.onInputChange(newValue, actionMeta);
				}}
			/>
		);
	};
}
