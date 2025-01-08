import CoursesList from "../../../components/courses-list/CoursesList.tsx";
import {Typography} from "antd";

export default function CoursesListPage() {
    return (
        <div className="container">
            <Typography.Title> Все курсы </Typography.Title>

            <CoursesList />
        </div>
    )
}