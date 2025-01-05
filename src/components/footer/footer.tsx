export default function Footer () {
    const date: number = new Date().getFullYear();
    const developmentStartDate: number = 2024;

    return (
        <footer>
            <div className="footer__wrapper">
                <div className="container">
                    <div className="footer__inner">
                        <p>{developmentStartDate} - {date} © Все права защищены</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}