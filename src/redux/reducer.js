import { LASTWEEK } from '../state/lastweek';
import { NEXTWEEK } from '../state/nextweek';
import { TASKS } from '../state/tasks';

export const initialState = {
    lastweek: LASTWEEK,
    nextweek: NEXTWEEK,
    tasks: TASKS
};

export const Reducer = (state = initialState, action) => {
    return state;
};