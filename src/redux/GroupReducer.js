const initialState = {
	groups: [
		{
			name: "єВибух",
			password: "555",
			id: "1",
			avatar:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Outline_of_Ukraine.svg/1200px-Outline_of_Ukraine.svg.png",
			news: [
				{
					newsSource: "Lachen",
					id: "2",
				},
			],
		},
	],
	allGroups: [
		{
			name: "UA",
			password: "1111",
			id: Math.random().toString(),
		},
		{
			name: "Kozak",
			password: "2222",
			id: Math.random().toString(),
		},
	],
};

const GroupReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CREATE_GROUP": {
			const {name, avatar} = action;
			return {
				...state,
				groups: [...state.groups, {name, id: Math.random().toString(), avatar}],
			};
		}
		case "DELETE_NEWS_SOURCE": {
			const {id, groupId} = action;

			const foundGroup = state.groups.find((group) => group.id === groupId);

			return {
				...state,
				groups: state.groups.map((group) => {
					if (group.id !== foundGroup.id) {
						return state;
					} else {
						return {
							...group,
							news: group.news.filter((newsSource) => newsSource.id !== id),
						};
					}
				}),
			};
		}
		case "USER_GROUPS": {
			const {name, id, avatar} = action.data;
		}
		case "ADD_NEWS": {
			const {value, groupId} = action;
			const foundGroup = state.groups.find((group) => group.id === groupId);
			let newsData = {newsSource: value, id: Math.random().toString()};

			if (value === undefined) {
				return state;
			}
			if (
				foundGroup?.news.find((newsSource) => newsSource.newsSource === value)
			) {
				return state;
			} else {
				return {
					...state,
					groups: state.groups.map((group) => {
						if (group.id !== foundGroup.id) {
							return group;
						} else {
							return {
								...group,
								news: [...group.news, newsData],
							};
						}
					}),
				};
			}
		}
		case "CHANGE_GROUP_SETTINGS": {
			const {name, groupId, password} = action;

			const gp = state.groups.find(({id}) => id === groupId);

			let settings = {};
			if (name) {
				settings.name = name;
			}
			if (password) {
				settings.password = password;
			}

			if (gp === undefined) {
				return state;
			}
			return {
				...state,
				groups: state.groups.map((group) => {
					if (group.id !== gp.id) {
						return group;
					} else {
						return {
							...group,
							...settings,
						};
					}
				}),
			};
		}

		default:
			return state;
	}
};

export default GroupReducer;
