import { LASTWEEK } from '../shared/lastweek';
import { NEXTWEEK } from '../shared/nextweek';
import { TASKS } from '../shared/tasks';

export const initialState = {
    lastweek: LASTWEEK,
    nextweek: NEXTWEEK,
    tasks: TASKS
};

export const Reducer = (state = initialState, action) => {
    return state;
};