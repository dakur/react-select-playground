import {OnChangeValue} from 'react-select';
import {CreatableSelectOptionType} from '../CreatableSelectProps';

export function doesOptionAlreadyExist(options: OnChangeValue<CreatableSelectOptionType, true>, searchedOption: string): boolean
{
	if (options === null) {
		return false;
	}

	for (const {value} of options) {
		if (value === searchedOption) {
			return true;
		}
	}

	return false;
}
