import { Link, useLocation } from 'react-router-dom';
import styles from "./breadcrubms.module.scss";

interface IBreadcrumbs {
    [key: string]: string
}

const breadcrumbsMap: IBreadcrumbs = {
    '/': 'Главная',
    'login': 'Вход',
    'sigin': 'Регистрация',
    'about': 'О нас',
    'courses': 'Курсы',
    'vichislitelnaya-geomeriya': 'Вычислительная геометрия',
    'chapter-1': 'Глава 1',
    'lesson-1': 'Урок 1',
};


export default function Breadcrumbs() {
    const location = useLocation();
    const paths = location.pathname.split('/').filter(x => x); // Разделяем путь и убираем пустые элементы

    console.log("location.pathname", location.pathname)

    console.log(paths)

    return (
        <nav aria-label="Breadcrumb" className={styles.breadcrumbs__wrapper}>
            <ol>
                {paths.map((path, index) => {
                    const to:string = `/${paths.slice(0, index + 1).join('/')}`; // Создаем путь для каждой крошки
                    const title:string = breadcrumbsMap[path] || path; // Получаем название из объекта или используем путь

                    return (
                        <li key={to}>
                            <Link to={to}>{title}</Link>
                            {index < paths.length - 1 && ' > '} {/* Добавляем разделитель */}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};