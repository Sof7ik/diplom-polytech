import {Button, Divider, Form, Input, Space, Switch, Typography} from "antd";
import formStyles from "../../styles/auth-forms.module.scss";
import pageStyles from "../../styles/login-pages.module.scss";
import {Link} from "react-router-dom";

export default function RegisterPage() {
    console.log(formStyles)

    return (
        <section className={pageStyles["login-page__wrapper"]}>
            <div className="container">
                <div className={formStyles["login-form__wrapper"]}>
                    <Typography.Title level={2}
                                      className={formStyles["loginForm__title"]}>
                        Регистрация
                    </Typography.Title>

                    <Form layout="vertical">
                        <div className={formStyles['form-grid-2']}>
                            <Form.Item label="Имя"
                                       name="first_name"
                                       rules={[{required: true, message: 'Введите имя'}]}>
                                <Input/>
                            </Form.Item>

                            <Form.Item label="Фамилия"
                                       name="last_name"
                                       rules={[{required: true, message: 'Введите фамилию'}]}>
                                <Input/>
                            </Form.Item>
                        </div>

                        <Form.Item label="Email"
                                   name="email"
                                   rules={[
                                       {
                                           required: true,
                                           message: "Введите email"
                                       }
                                   ]}>
                            <Input type="email"/>
                        </Form.Item>

                        <Form.Item label="Пароль"
                                   name="password"
                                   rules={[{required: true, message: 'Введите пароль'}]}>
                            <Input.Password/>
                        </Form.Item>

                        <div className={formStyles['loginForm__role-wrapper']}>
                            <Space>
                                <Typography.Text>
                                    Я учитель
                                </Typography.Text>

                                <Switch defaultChecked={true}/>

                                <Typography.Text>
                                    Я ученик
                                </Typography.Text>
                            </Space>
                        </div>

                        <Form.Item>
                            <Button type="primary"
                                    htmlType="submit"
                                    size="large"
                                    block={true}>
                                Зарегистрироваться
                            </Button>
                        </Form.Item>
                    </Form>

                    <Divider/>

                    <Typography.Text>
                        Уже зарегистрированы? <Link to="/login/">Войти</Link>
                    </Typography.Text>
                </div>
            </div>
        </section>
    )
}