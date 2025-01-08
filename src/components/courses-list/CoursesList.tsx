import {Link} from "react-router-dom";
import styles from "./courses-list.module.scss";
import {courses} from "../../data/courses.ts";
import {Typography} from "antd";

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

                            <p className={styles["courseItem__title"]}>
                                {course.title}
                            </p>

                            <Typography.Text className={styles["courseItem__description"]}>
                                {course.description}
                            </Typography.Text>
                        </Link>
                    </div>

                    <Link to={`${course.code}/about/`}
                                     className={styles["courseItem__about-link"]}>
                        О курсе
                    </Link>
                </li>
            ))}
        </ul>
    )
}