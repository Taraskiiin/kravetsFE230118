import usersList from './initData.json'
import {store} from '../store'


describe('User slice', () => {
    it('should return initial state', () => {
        const expected = {userList: usersList, selectedUser: null};
        const state = store.getState().user

        expect(state).toEqual(expected)
    })
})