import {useDispatch, useSelector} from 'react-redux';
import useMount from "@hooks/useMount";
import {createStudent, fetchStudents} from "@redux/actions/StudentActions";

export const useStudent = () => {
    const dispatch = useDispatch();
    const studentList = useSelector((state) => state.student.studentList);

    const fetchAllStudents = async () => {
        await dispatch(fetchStudents());
    };

    const createStudents = async (payload) => {
        await dispatch(createStudent({...payload}));
    };

    useMount(() => {
        fetchAllStudents();
    });

    return {fetchAllStudents, studentList, createStudents};
};


