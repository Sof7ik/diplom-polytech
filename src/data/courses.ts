import {ICourse} from "../models/course.interface.ts";

export const courses: ICourse[] = [
    {
        title: 'Вычислительная геометрия',
        isSubscribed: true,
        id: 1,
        code: 'vichislitelnaya-geomeriya',
        description: 'Описание курса "Вычислительная геометрия"',
        imageSrc: 'https://placehold.co/300x200',
    },
    {
        title: 'Компьютерная графика',
        isSubscribed: true,
        id: 2,
        code: 'kompyuternaya-grafika',
        description: 'Описание курса "Компьютераня графика"',
        imageSrc: 'https://placehold.co/300x600',
    },
]