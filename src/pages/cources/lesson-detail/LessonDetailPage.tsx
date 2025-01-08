import {lessons} from "../../../data/lessons.ts";
import {useParams} from "react-router-dom";
import {ILesson} from "../../../models/lessons.interface.ts";
import {Typography} from "antd";
import LessonDetailPageWrapper from "../../../components/LessonDetailTabs/LessonDetailTabs.tsx";

export default function LessonDetailPage() {
    const params = useParams();

    const chapterParam: string | undefined = params.chapterId;
    const lessonParam: string | undefined = params.lessonId;

    const chapterId: number = Number(chapterParam?.split("-")[1]);
    const lessonId: number = Number(lessonParam?.split("-")[1]);

    const lesson: ILesson = lessons.filter(lesson => {
        return lesson.chapter_id === chapterId && lesson.id === lessonId
    })[0];

    return (
        <div className="container">
            <Typography.Title>
                {lesson.title}
            </Typography.Title>

            <LessonDetailPageWrapper />
        </div>
    )
}