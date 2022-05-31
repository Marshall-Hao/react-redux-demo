import { createAction,handleActions } from 'redux-actions';



interface ImutationTypes {
    [propName:string] : string
}

interface Istate {
    title: string;
}

interface Iaction {
    readonly type: string,
    payload: any
}

export const mutationTypes:ImutationTypes = {
    QUERY_TITLE: "QUERY_TITLE",
    UPDATE_TITLE: 'UPDATE_TITLE'
}

const initialState: Istate = {
    title: 'fuck that'
}

export const queryTitle = createAction(mutationTypes.QUERY_TITLE);
export const updateTitle = createAction(mutationTypes.UPDATE_TITLE);

export default handleActions({
    [mutationTypes.QUERY_TITLE](state:Istate) {
        return state;
    },
    [mutationTypes.UPDATE_TITLE](state:Istate,action:Iaction) {
        return {
            ...state,
            title: action.payload
        }
    }
}, initialState)