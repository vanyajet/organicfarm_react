import React, {useContext} from 'react'
import { Context } from '../../context'
import { Formik } from 'formik'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'
import axios from 'axios'

function CheckOutModal({ isShowing, hide }) {

  const {cartTotal, cartProductsArr} = useContext(Context)



  return (
    isShowing ?
    <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal-checkout">
        <div className="modal-head">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        
        
        <Formik
          initialValues={{ name: '', phone: '', street:'', house:'', flat:'', deliveryTime:'9:00 - 15:00'  }}
          onSubmit={ 
            async function handleSubmit (values) {
            await axios.post('/api/form', {
              values,
              cartProductsArr,
              cartTotal
            }).then(res => {
              hide()
              alert('Ваш заказ Оформлен! \nПожалуйста ожидайте звонка нашего менеджера')
            })
          }
        }
        >

          {({ values, handleChange, handleBlur, handleSubmit }) => (

            <form onSubmit={handleSubmit} >
              <h4 className='text-left' >Контактные данные</h4>
              <div className="form-group">
                <input name='name' onChange={handleChange} className="form-control" placeholder="Ваше имя:" required/>
              </div>
              <div className="form-group">
                <NumberFormat className='form-control' name='phone' onChange={handleChange} placeholder='Ваш телефон:' allowEmptyFormatting required format="+7 (###) ###-##-##" mask="_"/>
              </div>
              
              <h4 className='text-left' >Адрес доставки</h4>
              <div className="form-group">
                <input type="text" className='form-control' name='street' placeholder='Улица:' required onChange={handleChange}/>
              </div>
              <div className="form-group row mx-0" >
                <input type="text" className='col-md-5 form-control' name='house' placeholder='Дом:' required onChange={handleChange}/>
                <input type="text" className='col-md-5 form-control mx-3' name='flat' placeholder='Квартира:' required onChange={handleChange}/>
              </div>
              <h4 className='text-left' >Время доставки</h4>
              <div className="form-group">
                  <select className="form-control" name='deliveryTime' required onChange={handleChange} defaultValue='9:00 - 15:00' >
                  <option>9:00 - 15:00</option>
                  <option>15:00 - 21:00</option>
                </select>
              </div>
              <button onSubmit={handleSubmit} type="submit" style={{borderRadius: '25px', border: '2px solid', fontWeight: 'bolder'}} className="btn btn-checkout mx-auto">Подтвердить заказ</button>
            </form>
            
          )}
          
        
          </Formik>
      </div>
    </div>
    </React.Fragment>
    : null
  )

}
CheckOutModal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired
}

export default CheckOutModal
