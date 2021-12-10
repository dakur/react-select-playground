import React from "react";
import {CreatableSelectProps} from '../CreatableSelectProps';

/*
 * This prepares Select component to being decorated by higher-order components.
 */
export function prepareSelectForDecorating<P extends CreatableSelectProps>(CreatableSelect: React.ComponentType<P>): React.ComponentType<P>
{
	return (props) =>
	{
		return (
			<CreatableSelect
				{...props}
			/>
		);
	};
}
