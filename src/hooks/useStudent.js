import {useDispatch, useSelector} from 'react-redux';
import useMount from "@hooks/useMount";
import {fetchStudents} from "@redux/actions/StudentActions";

export const useStudent = () => {
    const dispatch = useDispatch();
    const studentList = useSelector((state) => state.student.studentList);

    const fetchAllStudents = () => {
        dispatch(fetchStudents());
        console.log(studentList)
    };

    useMount(() => {
        fetchAllStudents();
    });

    return {fetchAllStudents, studentList};
};
