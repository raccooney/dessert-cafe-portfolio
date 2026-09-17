import './DessertCafe.css';

function DessertCafe() {
    return (
        <>
        <header className='site-header'>
            <h1>CAFEDOYS</h1>
            <nav>
                <a href="#menu">MENU</a>
                <a href="#location">LOCATION</a>
                <a href="#contact">CONTACT</a>
            </nav>
        </header>

        <section id="hero" className="hero">
            <div className='hero-text'>
                <p className='hero-label'>COFFEE & DESSERT</p>
                <h2>
                    A SWEET
                    <br />
                    MOMENT.
                </h2>

                <p className='hero-description'>
                    한 잔의 커피와 한 조각의 여유.
                </p>

                <a href="#menu">EXPLORE MENU</a>
            </div>

            <div className='hero-image'></div>
        </section>

        <section id="menu" className="menu">
            <div className='signature'>
                <div className='signature-image'>

                </div>

                <div className='signature-text'>
                    <p>SIGNATURE</p>
                    <h2>DOYS SIGNATURE CAKE</h2>
                    <p>
                        부드러운 크림과 계절 과일로 완성한
                        CAFEDOYS의 시그니처 케이크.
                    </p>
                    <span>8,500</span>
                </div>
            </div>

            <div className='menu-board'>
                <div className='menu-column'>
                    <h3>COFFEE</h3>
                    <div className='menu-item'>
                        <span>Americano</span>
                        <span>4,500</span>
                    </div>
                    <div className='menu-item'>
                        <span>Cafe Latte</span>
                        <span>5,000</span>
                    </div>
                    <div className='menu-item'>
                        <span>Flat White</span>
                        <span>5,500</span>
                    </div>
                </div>

                <div className='menu-column'>
                    <h3>DESSERT</h3>
                    <div className='menu-item'>
                        <span>Tiramisu</span>
                        <span>7,500</span>
                    </div>
                    <div className='menu-item'>
                        <span>Cheesecake</span>
                        <span>7,000</span>
                    </div>
                    <div className='menu-item'>
                        <span>Financier</span>
                        <span>3,800</span>
                    </div>
                </div>
            </div>
        </section>

        <section id="location" className="location">
            <div className='location-text'>
                <p className='section-label'>LOCATION</p>

                <h2>COME AND STAY A WHILE.</h2>

                <p>
                    서울 OO구 OO길 OO
                    <br />
                    OO역 O번 출구에서 300m
                </p>

                <p>
                    MON - SUN
                    <br />
                    10:00 - 21:00
                </p>
            </div>

            <div className='location-image'></div>
        </section>

        <section id="contact" className="contact">
            <p className='section-label'>CONTACT</p>

            <h2>LET'S SHARE A SWEET MOMENT.</h2>

            <div className='contact-info'>
                <a href='tel:000-0000-0000'>000-0000-0000</a>
                <a href='instagram.dm'>INSTAGRAM DM</a>
            </div>
        </section>

        <footer className='footer'>
            <p>© 2026 CAFEDOYS</p>
            <p>COFFEE · DESSERT · GOOD DAY</p>
        </footer>
        </>
    )
}

export default DessertCafe;
