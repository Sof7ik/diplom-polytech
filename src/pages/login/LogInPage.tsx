import {Button, Divider, Form, Input, Typography} from "antd";
import formStyles from "../../styles/auth-forms.module.scss";
import pageStyles from "../../styles/login-pages.module.scss";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import users from "../../data/users.json";
import {IUser} from "../../models/users.interface.ts";
// import {AuthContext, IAuthContext, IUserContext} from "../../context/auth.context.ts";
import {IUserContext, useUserContext} from "../../components/AuthContextProvider.tsx";
import {getRandomNumber} from "../../modifiers/utils.ts";
import { v4 as uuidv4 } from 'uuid';

type FieldType = {
    email?: string;
    password?: string;
};

interface IAuthError {
    title: string,
    message: string,
}

export default function LogInPage() {
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const [authErrors, setAuthErrors] = useState<IAuthError[]>([]);
    const navigate = useNavigate();

    const { setUser } = useUserContext();

    async function sendAuthForm(values: FieldType): Promise<void> {
        setIsButtonLoading(true);
        console.log("Authing...", values);

        const randomLoginTimeout: number = getRandomNumber(500, 2000);

        setTimeout(() => {
            const foundUser: IUser[] = users.filter(user => {
                return user.email === values.email && user.password === values.password
            });
            console.log("найденный пользователь", foundUser);

            if (!foundUser.length) {
                setAuthErrors([
                    ...authErrors,
                    {
                        title: "Пользователь не найден",
                        message: "Проверьте правильность логина и пароля"
                    }
                ])
                return;
            }

            const loginUserObject: IUserContext = {
                id: foundUser[0].id,
                token: uuidv4(),
                role: foundUser[0].role,
                fio: foundUser[0].fio,
            }

            setUser(loginUserObject);

            setIsButtonLoading(false);

            return navigate("/courses/");
        }, randomLoginTimeout);
    }

    console.log("authErrors", authErrors);

    // пользователь не авторизован
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
                            <Input type="email" autoComplete="email"/>
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Пароль"
                            name="password"
                            rules={[{ required: true, message: 'Введите пароль' }]}
                        >
                            <Input.Password autoComplete="password" />
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

                        {
                            authErrors.length > 0 &&
                            <div className="auth-errors">
                                {authErrors.map((errorObject: IAuthError, index: number) => {
                                    return <Typography.Text key={`${errorObject.title}_${index}`} type="danger">
                                        {errorObject.title}
                                    </Typography.Text>
                                })}
                            </div>
                        }
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