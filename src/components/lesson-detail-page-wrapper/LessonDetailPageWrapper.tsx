import LessonDetailTabs from "../LessonDetailTabs/LessonDetailTabs.tsx";

interface IProps {
    courseCode: string | undefined,
    view: string
}

export default function LessonDetailPageWrapper(props: IProps) {
    console.log(props)

    return (
        <LessonDetailTabs/>
    )
}