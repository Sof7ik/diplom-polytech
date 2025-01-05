import {courses} from "../../../data/courses.ts";
import {useParams} from "react-router-dom";
import {ICourse} from "../../../models/course.interface.ts";

export default function AboutCoursePage() {
    const params = useParams();
    const courseCode: string |undefined = params.code;

    const course: ICourse = courses.filter(element => {
        return element.code === courseCode
    })[0];
    
    return (
        <div className="container">
            <h1>О курсе "{course.title}"</h1>

            <div>
                {course.description}
            </div>
        </div>
    )
}