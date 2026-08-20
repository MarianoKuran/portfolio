import './style.css'
import Alpine from 'alpinejs'
import servicesForm from './components/services-form.js'
import sendWppMessage from './components/send-wpp-message.js'

Alpine.data('servicesForm', servicesForm)

sendWppMessage()

window.Alpine = Alpine
Alpine.start()

