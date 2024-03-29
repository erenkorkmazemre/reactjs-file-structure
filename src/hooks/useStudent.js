import {useDispatch, useSelector} from 'react-redux';
import useMount from "@hooks/useMount";
import {createStudent, fetchStudents} from "@redux/actions/StudentActions";

export const useStudent = () => {
    const dispatch = useDispatch();
    const studentList = useSelector((state) => state.student.studentList);

    const fetchAllStudents = () => {
        dispatch(fetchStudents());
        console.log("2")
    };

    const createStudents = (payload) => {
        dispatch(createStudent({...payload}));
        console.log("1")
    };

    useMount(() => {
        fetchAllStudents();
        console.log("4")
    });

    return {fetchAllStudents, studentList, createStudents};
};


