import * as Types from './types';
import { State } from './interface';
const mutations = {
    [Types.SET_USER_NAME](state: State, username: string) {
        state.user.username = username;
    },
    [Types.SET_ID](state: State, id: string) {
        state.user.id = id;
    }
};
export default mutations;
