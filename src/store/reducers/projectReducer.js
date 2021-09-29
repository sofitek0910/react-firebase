const initState = {
	projects: [
		{id: '1', title: 'This is a test project', content: 'Content Content Content Dummy Data'},
		{id: '2', title: 'This is a test project part 2', content: 'Content Content Content Dummy Data 2'},
		{id: '3', title: 'This is a test project part 3', content: 'Content Content Content Dummy Data 3'},
	]
}

const projectReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_PROJECT':
			return state;
		case 'CREATE_PROJECT_ERROR':
			return state;
		case 'UPDATED_PROJECT':
			return state;
		case 'UPDATED_PROJECT_ERROR':
			return state;
		case 'FETCH_SUCCESS':
			return {
				...state,
			};
		default:
			return state;
	}
}

export default projectReducer