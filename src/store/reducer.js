	const initialState ={
		totalprice:0,
		burger:0,
		salat:0,
		cheese:0,
		chips:0,
		drink:0,
		modalcondition:false,
		swap:true
		}
	
	const reducer = (state = initialState, action) =>{
		if(action.type === 'INCREMENT' ) {
			
			if(action.check === 'Beef burger' && state.burger < 2) {
				return{
					...state, 
					burger: state.burger+1,
					totalprice: state.totalprice + action.add,
				}
			}

			if(action.check === 'Salat' && state.salat < 2) {
				return{
					...state, 
					salat: state.salat + 1,
					totalprice: state.totalprice + action.add,
				}
			}
			if(action.check === 'Cheese' && state.cheese < 2) {
				return{
					...state, 
					cheese: state.cheese + 1,
					totalprice: state.totalprice + action.add,
				}
			}
			if(action.check === 'Chips' && state.chips < 1) {
				return{
					...state, 
					chips: state.chips + 1,
					totalprice: state.totalprice + action.add,
				}
			}
				if(action.check === 'Soft Drink' && state.drink < 1) {
				return{
					...state, 
					drink: state.drink + 1,
					totalprice: state.totalprice + action.add,
				}
			}

		}
    
        

        if(action.type === 'SWAPCONDITION' ) {
        	return{
        		...state,
        		modalcondition: action.use
        	}
        }

          if(action.type === 'CLOSE' ) {
        	return{
        		...state,
        		modalcondition:false
        	}
        }
		return state
	};
	
export default reducer;