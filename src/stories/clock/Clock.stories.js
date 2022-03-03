import clock from './Clock.vue'

export default{
    title: 'clock',
    component: clock,
    color:{ control: 'color'},
    backgroundColor: { control: 'backgroundColor'},

    argTypes:{
        hours:{
            control:{type: 'select'},
            options: ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],
        },
        minutes:{
            control:{type: 'select'},
            options: ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25",
            "26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51",
            "52","53","54","55","56","57","58","59"],
        },
        weekDay:{
            control:{type: 'select'},
            options: ["domingo","segunda-feira","terça-feria","quarta-feira","quinta-feira","sexta-feira","sábado"],
        },
        monthDays:{
            control:{type: 'select'},
            options: ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26",
            "27","28","29","30","31"],
        },
        months: {
            control:{type: 'select'},
            options: ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],
        },

        years: {
            control:{type: 'select'},
            options: ["1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","1999","2000","2001","2002","2003","2004",
            "2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020",
            "2021","2022"],
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: {clock},
    template: '<clock v-bind=$props />'
});

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
}