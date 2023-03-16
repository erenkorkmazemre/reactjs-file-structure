export const STUDENT_ACTION_TYPES = {
    FETCH_STUDENTS: 'FETCH_STUDENTS',
    CREATE_STUDENTS: 'CREATE_STUDENTS',
};
export const fetchStudents = () => {
    return {
        type: STUDENT_ACTION_TYPES.FETCH_STUDENTS,
        payload: {
            client: 'student',
            request: {
                method: 'GET',
                url: `/students/`
            },
        },
    };
};

export const createStudent = ({
                                  name,
                                  surname
                              }) => {
    return {
        type: STUDENT_ACTION_TYPES.CREATE_STUDENTS,
        payload: {
            client: 'student',
            request: {
                method: 'POST',
                url: '/students/',
                data: {
                    name,
                    surname,
                },
            },
        },
    };
};