const initialState = {
	isLoggedIn: false,
	username: "",
	city: "",
	lat: null,
	lng: null,
};

const UserReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ISLOGGEDIN": {
			const {username, id, lat, lng, city} = action;
			return {
				...state,
				isLoggedIn: true,
				username,
				city,
				id,
				lat,
				lng,
			};
		}
		default:
			return state;
	}
};

export default UserReducer;
