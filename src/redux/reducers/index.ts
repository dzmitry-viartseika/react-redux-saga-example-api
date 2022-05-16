const initialState = {
    vehicles: []
};

export default function reducer(state: any = initialState, action: any) {
    console.log('action.type', action.type);
    switch (action.type) {
        case 'BLOGS_LOADED':
            console.log('BLOGS_LOADED');
            return {
                ...state,
                vehicles: action.payload,
            }
    }
    return state;
}
