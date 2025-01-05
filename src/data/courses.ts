import {ICourse} from "../models/course.interface.ts";

export const courses: ICourse[] = [
    {
        title: 'Вычислительная геометрия',
        isSubscribed: true,
        id: 1,
        code: 'vichislitelnaya-geomeriya',
        description: 'Описание курса "Вычислительная геометрия"',
        imageSrc: 'https://img.freepik.com/free-vector/abstract-concept-illustration_114360-1200.jpg?w=2000',
    },
    {
        title: 'Компьютерная графика',
        isSubscribed: true,
        id: 2,
        code: 'kompyuternaya-grafika',
        description: 'Описание курса "Компьютераня графика"',
        imageSrc: 'https://img.freepik.com/free-vector/abstract-concept-illustration_114340-1200.jpg?w=2000',
    },
]