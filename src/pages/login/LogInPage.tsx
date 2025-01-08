import {Button, Divider, Form, Input, Typography} from "antd";
import formStyles from "../../styles/auth-forms.module.scss";
import pageStyles from "../../styles/login-pages.module.scss";
import type { FormProps } from 'antd';
import {useState} from "react";
import {Link, NavigateFunction, useNavigate} from "react-router-dom";

type FieldType = {
    email?: string;
    password?: string;
};

export default function LogInPage() {
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const navigate: NavigateFunction = useNavigate();

    async function sendAuthForm(values:FormProps<FieldType>): Promise<void> {
        setIsButtonLoading(true);

        console.log("Authing...", values);

        setTimeout(() => {
            setIsButtonLoading(false);
            return navigate("/courses/");
        }, 2000);
    }

    return (
        <section className={pageStyles["login-page__wrapper"]}>
            <div className="container">
                <div className={formStyles["login-form__wrapper"]}>
                   <Typography.Title level={2} className={formStyles["loginForm__title"]}>Вход</Typography.Title>

                    <Form className=""
                          layout="vertical"
                          onFinish={sendAuthForm}>

                        <Form.Item<FieldType>
                            label="Email"
                            name="email"
                            rules={[{
                                required: true,
                                message: "Введите email"
                            }]}
                        >
                            <Input type="email"/>
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Пароль"
                            name="password"
                            rules={[{ required: true, message: 'Введите пароль' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary"
                                    htmlType="submit"
                                    size="large"
                                    block={true}
                                    loading={isButtonLoading}>
                                Войти
                            </Button>
                        </Form.Item>
                    </Form>

                    <div style={{display: "none"}}>
                        <Divider />

                        <Typography.Text strong={true} style={{textAlign: "center", fontSize: "1.8rem"}}>
                            Авторизация через соц. сети
                        </Typography.Text>

                        <ul>
                            <li>
                                SSO: Google
                            </li>
                            <li>
                                SSO: VK
                            </li>
                        </ul>
                    </div>

                    <Divider />

                    <Typography.Text>
                        Нет аккаунта? <Link to="/register/">Регистрация</Link>
                    </Typography.Text>
                </div>
            </div>
        </section>
    )
};