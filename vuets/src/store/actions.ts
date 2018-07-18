import { Commit, Action, ActionTree } from 'vuex';
import * as Types from './types';
import { State } from './interface';
const setId: Action<State, any> = (
    context: { commit: Commit; state: State },
    product: string
) => {
    setTimeout(() => {
        context.commit(Types.SET_ID, product);
        console.log(context.state.user.id);
    }, 1000);
};
const actions: ActionTree<State, any> = {
    setId
};
export default actions;
