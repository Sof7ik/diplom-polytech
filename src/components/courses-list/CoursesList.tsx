import {Link} from "react-router-dom";
import styles from "./courses-list.module.css";
import {courses} from "../../data/courses.ts";

export default function CoursesList() {
    return (
        <ul className={styles.courses__list}>
            {courses.map((course) => (
                <li key={course.code}
                    className={`${styles['course-item__wrapper']}`}>
                    <div>
                        <Link to={`/courses/${course.code}/`}
                              className={styles['course-item__link']}>
                            <img src={course.imageSrc}
                                 alt={course.title}
                                 className={styles['course-item__image']}/>

                            <h2>{course.title}</h2>
                            <p>{course.description}</p>
                        </Link>
                    </div>

                    <Link to={`${course.code}/about/`}>О курсе</Link>
                </li>
            ))}
        </ul>
    )
}