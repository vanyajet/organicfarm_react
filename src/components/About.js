import React from 'react'
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'

function About() {
    return (
        <React.Fragment>
        <div className="main">
            <div className="container ">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Любимые овощи</h2>
                        <hr/>
                        <p className='about-text' >
                        Квалифицированный персонал постоянно наблюдает за процессом роста и созревания, проводя еженедельные анализы плодов на содержание азота и прочих микроэлементов, не допуская превышения безопасного уровня.
                        Содержание в продуктах <a className='pdk' href="https://soeks.ru/informaciya/normy_pdk" target="_blank" rel='noopener noreferrer'>ПДК нитратов</a>
                        <b> в 10 раз ниже нормы! </b>
                        У нашего курьера есть нитрат тестер, зачем верить на слово!
                        Полностью автоматизированные теплицы позволяют доверить процессы питания растения специализированному компьютеру, который также держит под контролем освещение и микроклимат обеспечивая идеальную атмосферу для развития.
                        Мы собираем и доставляем наши продукты в один и тот же день!
                        Овощи которые Вы заказываете сейчас на завтра <b>еще растут!</b>
                        </p>
                        <p className='about-text'>
                        Мы вкладываем душу, тепло и силы в уход за всеми нашими растениями, выращивая на 100% органические плоды.
                        Надеемся вы оцените наши усилия и причину того что наша продукция дороже чем у других.</p>
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
                        <a href="https://yandex.ru/maps/?um=constructor%3A4ac09ec36f886c7f194598a02320584c898a44280e5df467f1160bf5a0507cb6&amp;source=constructorStatic" target="_blank" rel='noopener noreferrer' ><img src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A4ac09ec36f886c7f194598a02320584c898a44280e5df467f1160bf5a0507cb6&amp;width=600&amp;height=263&amp;lang=ru_RU"  alt="Карта Магазинов Organic Farm" style={{border: 0}} /></a>
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-12">
                        <h2>Наши Сертификаты</h2>
                        <hr/>
                    </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <ReactFancyBox
                                image='img/cert/cert-cucumber1.jpg'
                                defaultThumbnailWidth='315'
                                defaultThumbnailHeight='445'
                            />
                            <h3 className="cert-title">Сертификат соответствия Огурец Самарское Качество.</h3>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <ReactFancyBox
                                image='img/cert/cert-cucumber2.jpg'
                                defaultThumbnailWidth='315'
                                defaultThumbnailHeight='445'
                            />
                            <h3 className="cert-title">Сертификат соответствия Огурец ГОСТ.</h3>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <ReactFancyBox
                                image='img/cert/cert-tomato1.jpg'
                                defaultThumbnailWidth='315'
                                defaultThumbnailHeight='445'
                            />
                            <h3 className="cert-title">Сертификат соответствия Томат Самарское Качество.</h3>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <ReactFancyBox
                                image='img/cert/cert-tomato2.jpg'
                                defaultThumbnailWidth='315'
                                defaultThumbnailHeight='445'
                            />
                            <h3 className="cert-title">Сертификат соответствия Томат ГОСТ.</h3>
                        </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default About