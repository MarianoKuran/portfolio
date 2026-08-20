export default function sendWppMessage(){
    window.sendMessage = function(message) {
        const phoneNumber = '5493856776615';
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    }
};