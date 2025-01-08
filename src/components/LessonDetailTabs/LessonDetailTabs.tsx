import {Splitter, Tabs, Typography} from "antd";
import {useState} from "react";

export default function LessonDetailTabs() {
    const [activeTab, setActiveTab] = useState('content');

    const tabsList = [
        {
            key: 'content',
            label: 'Текст урока',
        },
        {
            key: 'code_editor',
            label: 'Редактор кода',
        },
    ];

    function onTabChange(activeKey: string) {
        setActiveTab(activeKey)
    }

    return (
        <>
            <Tabs activeKey={activeTab} items={tabsList} onChange={onTabChange} />

            {
                activeTab === "content" &&
                <div>
                    <Typography.Title>Детали урока</Typography.Title>
                </div>
            }


            {
                activeTab === "code_editor" &&
                <Splitter style={{ height: 200, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                    <Splitter.Panel defaultSize="40%" min="20%" max="70%">
                        <div>
                            Редактор кода
                        </div>
                    </Splitter.Panel>
                    <Splitter.Panel>
                        <div> Предпросмотр результата </div>
                    </Splitter.Panel>
                </Splitter>
            }
        </>
    )
}