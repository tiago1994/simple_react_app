const Reducer = (state, action) => {
    var newState = state;
    switch (action.type) {
        case 'CHANGE_ACTIVE':
            return {
                ...state,
                counters: newState.counters.map((c) => {
                    if (c.id == action.payload) {
                        c.active = true;
                    } else {
                        c.active = false;
                    }
                    return c;
                })
            };
        case 'ADD_NEW':
            return {
                ...state,
                adding: true
            };
        case 'STOP_NEW':
            return {
                ...state,
                adding: false,
                newCard: {
                    title: '',
                    count: ''
                }
            };
        case 'SAVE_NEW':
            const new_item = newState.counters.concat(
                {
                    id: Math.floor(Math.random() * 999),
                    title: state.newCard.title,
                    count: state.newCard.count,
                    active: state.counters.length>0?false:true
                }
            );

            return {
                ...state,
                adding: false,
                counters: new_item,
                newCard: {
                    title: '',
                    count: ''
                }
            };
        case 'SET_COUNTERS':
            return {
                ...state,
                counters: action.payload
            };
        case 'REMOVE_ACTIVE':
            var remove = newState.counters.filter(counter => !counter.active);
            remove.map((r, k) => {
                if (k == 0) {
                    r.active = true;
                }
                return r;
            })
            return {
                ...state,
                counters: remove
            };
        case 'ADD_TITLE':
            return {
                ...state,
                newCard: {
                    ...state.newCard,
                    title: action.payload
                }
            }
        case 'ADD_COUNT':
            return {
                ...state,
                newCard: {
                    ...state.newCard,
                    count: action.payload
                }
            }
        case 'EDIT_CARD':
            var edit_card = state.counters.map((c) => {
                if(c.id == action.payload.id){
                    c.title = action.payload.title;
                    c.count = action.payload.count;
                }

                return c;
            })
            return {
                ...state,
                counters: edit_card
            }
        default:
            return state;
    }
};

export default Reducer;