import ChaptersLessonsList from "../../../components/chapters-lessons-list/ChaptersLessonsList.tsx";
import {useParams} from "react-router-dom";
import chaptersAndLessons, {objectForTreeInterface} from "../../../modifiers/chaptersAndLessons.ts";
import {Typography} from "antd";

export default function CourseLessonsPage() {
    const params = useParams();
    const courseCode: string | undefined = params.code;

    const course: objectForTreeInterface = chaptersAndLessons.filter(course => {
        return course.course_code === courseCode
    })[0];

    return (
        <div className="container">
            <Typography.Title>
                Курс &#171;{course.course_title}&#187;
            </Typography.Title>

            <ChaptersLessonsList courseCode={courseCode} />
        </div>
    )
}