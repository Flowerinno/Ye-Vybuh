const initialState = {
	groups: [],
	allGroups: [],
	newsSource: [],
};

const GroupReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CREATEGROUP": {
			const {name, avatar} = action;
			return {
				...state,
				groups: [
					...state.groups,
					{name, id: Math.random().toString(), avatar, members: 1},
				],
			};
		}
		case "FINDGROUP": {
			const {name, password, id} = action;

			const foundGroup = state.allGroups.find((group) => group.id === id);

			return {
				...state,
				groups: [...state.groups, foundGroup],
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
		case "FETCHNEWSSOURCE": {
			return {
				...state,
				newsSource: action.data,
			};
		}
		case "CHANGEGROUPSETTINGS": {
			const {name, password, groupId} = action;

			const foundGroup = state.groups.find((group) => group.id === groupId);

			let data = {};
			if (name) {
				data.name = name;
			}
			if (password) {
				data.password = password;
			}
			return {
				...state,
				groups: state.groups.map((group) => {
					if (group.id !== foundGroup.id) {
						return state;
					} else {
						return {
							...group,
							...data,
						};
					}
				}),
			};
		}
		case "FETCHALLGROUPS": {
			return {
				...state,
				allGroups: action.data,
			};
		}
		case "FETCHUSERGROUPS": {
			return {
				...state,
				groups: action.data,
			};
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
