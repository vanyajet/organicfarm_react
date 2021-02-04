import React from 'react'

function Contact() {
    return (
        <React.Fragment>
        <div className="main">
            <div className="container ">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Свяжитесь с нами!</h2>
                        <hr/>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="contact-info-left">
                                    <h3>Контактные данные</h3>
                                    <p>Если у вас возникли вопросы по продукции, местонахождению наших магазинов или нашей компании - свяжитесь с нами! </p>
                                    <ul>
                                        <li>
                                            <p><i className="fas fa-phone-square"></i>Телефон: <a href="tel:+79053001016" rel="noopener noreferrer">+7(905)300-10-16</a></p>
                                        </li>
                                        <li>
                                            <p><i className="fas fa-envelope"></i>Email: <a href="mailto:organic_farm@gmail.com" rel="noopener noreferrer">organic_farm@gmail.com</a></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="contact-social">
                                    <h3>Социальные сети и мессенджеры</h3>
                                    <p>Напишите нам!</p>
                                    <ul>
                                        <li><a href="https://www.instagram.com/organicfarmsamara/" target="_blank" rel="noopener noreferrer" className='instagram'><i className="fab fa-instagram" ></i></a></li>
                                        <li><a href="https://wa.me/79053001016" target="_blank" rel="noopener noreferrer" className='whatsapp'><i className="fab fa-whatsapp"></i></a></li>
                                        <li><a href="viber://chat?number=79053001016" target="_blank" rel="noopener noreferrer" className='viber'><i className="fab fa-viber"></i></a></li>
                                        <li><a href="https://vk.com/organicfarmsamara" target="_blank" rel="noopener noreferrer" className='vk'><i className="fab fa-vk"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-12">
                        <h2>Наши Магазины</h2>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <p className="shop-text"><i className="fas fa-map-marker-alt"></i> Метро Советская <br/>Павильон № 1</p>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <p className="shop-text"><i className="fas fa-map-marker-alt"></i> Дом молодежи <br/>ул. Аэродромная 16Г</p>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <p className="shop-text"><i className="fas fa-map-marker-alt"></i> Метро Победа <br/>Павильон № 11</p>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <p className="shop-text"><i className="fas fa-map-marker-alt"></i> Метро Безымянка <br/>Павильон № 16</p>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <p className="shop-text"><i className="fas fa-map-marker-alt"></i> Хлебзавод <br/>ул. Победы 166А</p>
                            </div>
                        </div>
                        <div className='shops-map'>
                        <a href="https://yandex.ru/maps/?um=constructor%3A4ac09ec36f886c7f194598a02320584c898a44280e5df467f1160bf5a0507cb6&amp;source=constructorStatic" target="_blank" rel='noopener noreferrer' ><img src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A4ac09ec36f886c7f194598a02320584c898a44280e5df467f1160bf5a0507cb6&amp;width=600&amp;height=263&amp;lang=ru_RU" alt="" style={{border: 0}} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Contact