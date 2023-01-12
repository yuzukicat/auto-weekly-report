import { LASTWEEK } from '../state/lastweek';
import { NEXTWEEK } from '../state/nextweek';
import { TASKS } from '../state/tasks';
import { CLOUDSERVICES } from '../state/cloudservices';

export const initialState = {
    lastweek: LASTWEEK,
    nextweek: NEXTWEEK,
    tasks: TASKS,
    cloudservices: CLOUDSERVICES
};

export const Reducer = (state = initialState, action) => {
    return state;
};