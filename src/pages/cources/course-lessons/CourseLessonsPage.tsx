import ChaptersLessonsList from "../../../components/chapters-lessons-list/ChaptersLessonsList.tsx";
import {useParams} from "react-router-dom";

export default function CourseLessonsPage() {
    const params = useParams();
    const courseCode: string | undefined = params.code;

    return (
        <div className="container">
            <h1>Список уроков</h1>

            <ChaptersLessonsList courseCode={courseCode} />
        </div>
    )
}