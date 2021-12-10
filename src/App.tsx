import React from 'react';
import CreatableSelect from 'react-select/creatable';
import {prepareSelectForDecorating} from './hoc/prepareSelectForDecorating';
import {makeOptionIfCommaPressed} from './hoc/makeOptionIfCommaPressed';
import {makeStateful} from './hoc/makeStateful';

function App() {
	const options = [
		// name => nickname
		{label: <span>John Doe 1</span>, value: 'john.doe1'},
		{label: <span>John Doe 2</span>, value: 'john.doe2'},
		{label: <span>John Doe 3</span>, value: 'john.doe3'},
		{label: <span>John Doe 4</span>, value: 'john.doe4'},
	];
	const selected = options[0];


	let Select = prepareSelectForDecorating(CreatableSelect);
	Select = makeOptionIfCommaPressed(Select);
	Select = makeStateful(Select);

	return <Select
		options={options}
		defaultValue={selected}
		isMulti={true}
	/>;
}

export default App;
