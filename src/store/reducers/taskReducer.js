const initState = {
	tasks: [
		{id: '1', title: 'This is a test task', description: 'Content Content Content Dummy Data'},
		{id: '2', title: 'This is a test task part 2', description: 'Content Content Content Dummy Data 2'},
		{id: '3', title: 'This is a test task part 3', description: 'Content Content Content Dummy Data 3'},
	]
}

const taskReducer = (state = initState, action) => {
	return state;
}

export default taskReducer