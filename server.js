const {createServer} = require('http')
const express = require('express')
const compression = require('compression')
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

const normalizePort = (port) => parseInt(port, 10)
const PORT = normalizePort(process.env.PORT || 5000)

const app = express()
const dev = app.get('env') !== 'production'

if (!dev) {
    app.disable('x-powered-by')
    app.use(compression())
    app.use(morgan('common'))

    app.use(express.static(path.resolve(__dirname, 'build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    })
}

if (dev) {
    app.use(morgan('dev'))
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {

       
    const products = req.body.cartProductsArr.map(product => {
        return {
            name: product.title,
            amount: product.count,
            mesure: product.weight,
            summ: product.total
        }
    })

    const emailProducts = products.map(product => {          
        
        return `
            <ul>
                <li>Название: ${product.name}</li>
                <li>Количество: ${product.amount} штук(а) по ${product.mesure}</li>
                <li>Стоимость: ${product.summ}</li>
            </ul>
        `
    })
    
    const htmlEmail = `
    <h3>Контактная информация:</h3>
    <ul>
        <li>Имя: ${req.body.values.name}</li>
        <li>Телефон: ${req.body.values.phone}</li>
        <li>Адрес: улица: ${req.body.values.street}, дом: ${req.body.values.house}, кв: ${req.body.values.flat}.</li>
        <li>Время доставки: ${req.body.values.deliveryTime}</li>
    </ul>
    <h3>Заказ: </h3>
    ${emailProducts}
    <h3>Сумма заказа: ${req.body.cartTotal.cartTotal}</h3>
    `

    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: '',
            pass: ''
        }
    })

    let mailOptions = {
        from: `ogranicfarm.pro`,
        to: '',
        subject: 'Заказ с organicfarm.pro',
        text: `Покупатель ${req.body.values.name} с номером ${req.body.values.phone}, адрес: улица: ${req.body.values.street}, дом: ${req.body.values.house}, кв: ${req.body.values.flat}. Заказ: ${emailProducts}`,
        html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return console.log(err)
        } else {
            res.send({msg:true})
            console.log('Ваш заказ принят')
        }
        
    })
})


const server = createServer(app) 

server.listen(PORT, (err) => {
    if(err) throw err

    console.log(`server listening on port ${PORT}`)
})