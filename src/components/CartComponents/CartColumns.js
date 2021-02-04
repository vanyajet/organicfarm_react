import React from 'react'

function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block my-3">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase font-weight-bold">Продукты</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase font-weight-bold">Название</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase font-weight-bold">Цена, <span className='mr-1 rub'>Р</span></p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase font-weight-bold">Количество</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase font-weight-bold">Удалить</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase font-weight-bold">Стоимость, <span className='mr-1 rub'>Р</span></p>
                </div>
            </div>
        </div>
    )
}

export default CartColumns