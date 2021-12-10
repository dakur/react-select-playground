import {ReactNode} from 'react';
import {CreatableProps} from 'react-select/creatable';

export interface CreatableSelectOptionType
{
	label: ReactNode,
	value: string,
}
export interface CreatableSelectProps extends CreatableProps<CreatableSelectOptionType, true, {options: CreatableSelectOptionType[], label: 'irrelevant'}>
{}
