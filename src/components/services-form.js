export default () => ({
    icons: [
        {type:'active', icon:'fa-solid fa-circle-dot text-2xl text-blue-500', color:'text-blue-500'},
        {type:'inactive', icon:'fa-regular fa-circle text-2xl text-gray-300', color:'text-gray-300'},
        {type:'completed', icon:'fa-regular fa-circle-check text-2xl text-blue-500', color:'text-blue-500'},
    ],
    sections:[
        {id: 1, title:'¿Qué tipo de solución estás buscando?', description:'Solución',visible:true, state:'active', icon: null},
        {id: 2, title:'¿En qué rubro o industria trabajás?', description:'Tu rubro o industria',visible:false, state:'inactive', icon: null},
        {id: 3, title:'¿Cuál es tu objetivo principal hoy?', description:'Objetivo',visible:false, state:'inactive', icon: null},
    ],
    activeSection: null,
    responses: {
        response_1: {sectionId: 1, value: null},
        response_2: {sectionId: 2, value: null},
        response_3: {sectionId: 3, value: null},
    },
    finalMessage: null,

    init() {
        this.activeSection = this.getActiveSection();
        this.setIcons(this.sections);
        this.selectedOption = null;
    },

    getActiveSection() {
        return this.sections.find(section => section.visible && section.state === 'active');
    },

    setActiveSection(section){
        this.sections.forEach(sec => {
            sec.visible = false;
            sec.state = 'inactive';

            if (sec.id == section.id) {
                sec.visible = true;
                sec.state = 'active';
                this.activeSection = sec;
            }
        });

        this.checkCompletedSections();
    },

    checkCompletedSections(){
        this.sections.forEach(section => {
            if(section.id == 1 && this.responses.response_1.value){
                section.state = 'completed';
            } else if(section.id == 2 && this.responses.response_2.value){
                section.state = 'completed';
            } else if(section.id == 3 && this.responses.response_3.value){
                section.state = 'completed';
            }
        });
        this.setIcons(this.sections);
    },

    setIcons(sections){
        sections.forEach(section => {
            const icon = this.icons.find(icon => icon.type === section.state);
            section.icon = icon ? icon.icon : '';
        });
    },

    getIconBarColor(section){
        const icon = this.icons.find(icon => icon.type === section.state);
        return icon ? icon.color : '';
    },

    nextSection(){
        const findingSection = this.activeSection.id + 1;
        
        const nextSection = this.sections.find(section => section.id === findingSection);
        if(nextSection){
            this.setActiveSection(nextSection);
        }
    },

    confirmResponse(){
        Object.values(this.responses).forEach(response => {
            if(response.value == null) return;
        });

        this.nextSection();
    },

    activeSendMessageButton(){
        const active = Object.values(this.responses).every(response => response.value !== null);
        
        if (active) {
            let message = `¡Hola! Estoy interesado en una solución de ${this.responses.response_1.value}.`;

            if (this.responses.response_1.value == 'Consulta General') {
                message = `¡Hola! Quiero hacer una consulta general.`;
            }

            if (this.responses.response_2.value == 'Otro') {
                message += ``;
            } else {
                message += `para el rubro de ${this.responses.response_2.value}.`;
            }

            message += ` Mi objetivo principal es ${this.responses.response_3.value}.`;

            this.finalMessage = message;
        }

        return active;
    },

    sendMessage(){
        window.sendMessage(this.finalMessage);
    }
});