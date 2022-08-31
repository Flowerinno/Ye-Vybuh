const initialState = {
	groups: [],
	allGroups: [],
	newsSources: [],
	groupDetails: {},
	accidents: [],
};

const GroupReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_GROUP_DETAILS": {
			if (state.groupDetails === null && undefined) {
				return state;
			} else {
				return {
					...state,
					groupDetails: action.data,
				};
			}
		}
		case "SET_SOURCES": {
			return {
				...state,
				newsSources: action.data,
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
		case "SET_ALL_GROUPS": {
			return {
				...state,
				allGroups: action.data,
			};
		}
		case "SET_USER_GROUPS": {
			return {
				...state,
				groups: action.data,
			};
		}
		case "SET_ACCIDENTS": {
			return {
				...state,
				accidents: action.data,
			};
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
