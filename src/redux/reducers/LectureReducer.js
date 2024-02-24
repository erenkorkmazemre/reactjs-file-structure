import {LECTURE_ACTION_TYPES} from "@redux/actions/LectureActions";

const initialState = {
    lectureList: [{}],
};

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case `${LECTURE_ACTION_TYPES.FETCH_LECTURES}_SUCCESS`:
            return {
                ...state,
                lectureList: payload,
            };

        case `${LECTURE_ACTION_TYPES.FETCH_LECTURES}_FAIL`:
            // TODO remove from fix 404 problem!
            return {
                ...state,
                lectureList: [{id:"ERROR"}],
            };

        default:
            return state;
    }
};

export default reducer;
