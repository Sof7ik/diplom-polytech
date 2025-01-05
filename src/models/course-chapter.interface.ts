import {ILesson} from "./lessons.interface.ts";

export interface ICourseChapter {
    id: number,
    course_id: number,
    title: string,
    order_num: number,
    created_at: string,
    updated_at: string,
    lessons: ILesson[]
}