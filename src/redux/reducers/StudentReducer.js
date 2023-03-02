import {STUDENT_ACTION_TYPES} from "@redux/actions/StudentActions";

const initialState = {
    studentList: [],
};

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case `${STUDENT_ACTION_TYPES.FETCH_STUDENTS}_SUCCESS`:
            return {
                ...state,
                studentList: payload,
            };

        case `${STUDENT_ACTION_TYPES.FETCH_STUDENTS}_FAIL`:
            // TODO remove from fix 404 problem!
            return {
                ...state,
                studentList: [],
            };

        default:
            return state;
    }
};

export default reducer;
