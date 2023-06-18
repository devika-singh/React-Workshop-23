import {configureStore, createSlice} from '@reduxjs/toolkit';

const favSlice = createSlice(
{
	name:'fav',
	initialState: {fav: [], totalFav: 0},
	reducers:{
		toggle(state,action){
			const id = action.payload;
			console.log("[" + state.fav + "]" + state.totalFav);
			const isThere = state.fav.findIndex((movieId) => movieId == id);
			console.log(isThere);
			if( isThere === -1) 			{
					state.fav.push(action.payload);
				state.totalFav++;
			}
			else{
				state.fav = state.fav.filter((movieId) => movieId != id);
				state.totalFav--;
		}
	}
}
}
);

export const actions = favSlice.actions;

const store = configureStore({
	reducer:favSlice.reducer
});
export default store;
