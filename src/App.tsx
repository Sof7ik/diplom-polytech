import Header from "./components/header/header.tsx";
import Footer from "./components/footer/footer.tsx";
import {Route, Routes} from "react-router-dom";

import Mainpage from "./pages/mainpage/MainPage.tsx";
import AboutCoursePage from "./pages/cources/course-info/AboutCourse.tsx";
import CourseLessonsPage from "./pages/cources/course-lessons/CourseLessonsPage.tsx";
import CoursesPageWrapper from "./pages/cources/CoursesPageWrapper.tsx";
import LogInPage from "./pages/login/LogInPage.tsx";
import RegisterPage from "./pages/register/RegisterPage.tsx";
import AboutPage from "./pages/about/AboutPage.tsx";
import CoursesListPage from "./pages/cources/courses-list/CoursesListPage.tsx";
import LessonDetailPage from "./pages/cources/lesson-detail/LessonDetailPage.tsx";
import PersonalPagesLayout from "./pages/personal/PersonalLayout.tsx";
import PersonalMainpage from "./pages/personal/PersonalMainpage.tsx";
import PersonalProfilePage from "./pages/personal/profile/PersonalProfilePage.tsx";

function App() {
    return (
        <>
            <Header/>

            <main>
                <Routes>
                    <Route path="/" element={<Mainpage />} />

                    <Route path="/login/" element={<LogInPage />} />
                    <Route path="/register/" element={<RegisterPage />} />

                    <Route path="/about/" element={ <AboutPage /> } />

                    <Route path="/courses/" element={<CoursesPageWrapper />}>
                        <Route index element={<CoursesListPage />} />

                        <Route path=":code/" element={< CourseLessonsPage />} />
                        <Route path=":code/:chapterId/:lessonId/" element={<LessonDetailPage />}/>
                        <Route path=":code/about/" element={<AboutCoursePage />} />
                    </Route>

                    <Route path="/personal/" element={ <PersonalPagesLayout /> }>
                        <Route index element={<PersonalMainpage />} />

                        <Route path="profile" element={ <PersonalProfilePage /> } />
                    </Route>
                </Routes>
            </main>

            <Footer />
        </>
    )
}

export default App