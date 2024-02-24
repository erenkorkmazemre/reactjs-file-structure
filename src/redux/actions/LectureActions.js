export const LECTURE_ACTION_TYPES = {
    FETCH_LECTURES: "FETCH_LECTURES",
    CREATE_LECTURES: "CREATE_LECTURES",
  };
  export const fetchLectures = () => {
    return {
      type: LECTURE_ACTION_TYPES.FETCH_LECTURES,
      payload: {
        client: "lecture",
        request: {
          method: "GET",
          url: `/lectures/`,
        },
      },
    };
  };
  
  export const createLecture = ({ name, code }) => {
    return {
      type: LECTURE_ACTION_TYPES.CREATE_LECTURES,
      payload: {
        client: "lecture",
        request: {
          method: "POST",
          url: "/lectures/",
          data: {
            name,
            code,
          },
        },
      },
    };
  };
  