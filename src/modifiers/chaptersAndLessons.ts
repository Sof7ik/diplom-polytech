import {chapters} from "../data/chapters.ts";
import {lessons} from "../data/lessons.ts";
import {courses} from "../data/courses.ts";
import {ICourseChapter} from "../models/course-chapter.interface.ts";

export interface objectForTreeInterface {
    course_title: string,
    course_id: number,
    course_code: string,
    tree: ICourseChapter[]
}

const chaptersAndLessons: objectForTreeInterface[] = [];

courses.forEach(course => {
    const objectForTree: objectForTreeInterface = {
        course_title: course.title,
        course_id: course.id,
        course_code: course.code,
        tree: []
    }

    const chaptersForCourse: ICourseChapter[] = chapters.filter((chapter) => {
        return chapter.course_id === course.id
    });

    const chaptersWithLessons: ICourseChapter[] = chaptersForCourse.map(chapter => {
        Object.defineProperty(chapter, "lessons", {value: [], enumerable: false});

        return chapter;
    })

    // console.log("Главы курса", chaptersWithLessons);

    const lessonsForCourse = lessons.filter((lesson) => {
        return lesson.course_id === course.id;
    })

    // console.log("Уроки курса", lessonsForCourse);

    lessonsForCourse.forEach(lesson => {
        const lessonChapterId = lesson.chapter_id;

        const chapter: ICourseChapter = chaptersWithLessons.filter(chapter => {
            return chapter.id === lessonChapterId;
        })[0];

        chapter.lessons.push(lesson);
    })

    // console.log("Главы курса после добавления уроков", chaptersWithLessons);

    objectForTree.tree = chaptersWithLessons;

    chaptersAndLessons.push(objectForTree);
})

export default chaptersAndLessons;