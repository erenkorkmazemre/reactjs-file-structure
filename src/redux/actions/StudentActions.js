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
                                  firstName,
                                  lastName,
                                  username,
                                  email,
                                  password,
                                  phone,
                                  address,
                                  projectId,
                                  companyId,
                              }) => {
    return {
        type: STUDENT_ACTION_TYPES.CREATE_STUDENTS,
        payload: {
            client: 'organization',
            request: {
                method: 'POST',
                url: '/users',
                data: {
                    firstName,
                    lastName,
                    userName: username,
                    email,
                    password,
                    phone,
                    address,
                    projectId,
                    companyId,
                    userType: 'USER',
                    projectIdList: [projectId],
                },
            },
        },
    };
};