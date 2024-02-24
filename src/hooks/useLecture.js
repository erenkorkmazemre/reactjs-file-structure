import {useDispatch, useSelector} from 'react-redux';
import useMount from "@hooks/useMount";
import { fetchLectures, createLecture } from '@redux/actions/LectureActions';

export const useLecture = () => {
    const dispatch = useDispatch();
    const lectureList = useSelector((state) => state.lecture.lectureList);

    const fetchAllLectures = async () => {
        await dispatch(fetchLectures());
    };

    const createLectures = async (payload) => {
        await dispatch(createLecture({...payload}));
    };

    useMount(() => {
        fetchAllLectures();
    });

    return {fetchAllLectures, lectureList, createLectures};
};


