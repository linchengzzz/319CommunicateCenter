import { State } from './interface';
const getters = {
    userName: (state: State) => state.user.username + 'zcl',
    userId: (state: State) => state.user.id
};
export default getters;
