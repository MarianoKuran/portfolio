import './style.css'
import Alpine from 'alpinejs'
import servicesForm from './components/servicesSection/services-form.js'
import clientsReviewsCarrousel from './components/servicesSection/clients-reviews-carrousel.js'
import sendWppMessage from './components/send-wpp-message.js'

Alpine.data('servicesForm', servicesForm)
Alpine.data('clientsReviewsCarrousel', clientsReviewsCarrousel)

sendWppMessage()

window.Alpine = Alpine
Alpine.start()