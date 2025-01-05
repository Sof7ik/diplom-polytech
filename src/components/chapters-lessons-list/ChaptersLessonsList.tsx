import chaptersAndLessons, {objectForTreeInterface} from "../../modifiers/chaptersAndLessons.ts";
import styles from "./chapters-lessons-list.module.scss";
import {Link} from "react-router-dom";

interface IProps {
    courseCode: string | undefined
}

export default function ChaptersLessonsList(props: IProps) {
    const course: objectForTreeInterface = chaptersAndLessons.filter(course => {
        return course.course_code === props.courseCode
    })[0];

    console.log("course", course)

    return (
        <>
            <Link to={`about/`}>О курсе</Link>

            <ul className={styles.chapters__list}>
                {course.tree.map((chapter) => (
                    <li key={chapter.id} className={styles.chapter__item}>
                        <div className={styles['chapter__title-wrapper']}>
                            <h2 className={styles.chapter__title}>{chapter.title}</h2>
                        </div>

                        {chapter.lessons.length &&
                            <ul className={styles['chapter__lessons-list']}>
                                {chapter.lessons.map((lesson) => (
                                    <li key={lesson.id} className={styles.lesson__item}>
                                        <Link to={`chapter-${chapter.id}/lesson-${lesson.id}/`}>
                                            <h3 className={styles.lesson__title}>{lesson.title}</h3>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        }
                    </li>
                ))}
            </ul>
        </>


    );
}