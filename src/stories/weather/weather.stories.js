import weather from './weather.vue'

export default{
    title: 'weather',
    component: weather,
    argTypes:{
        color:{ control: 'color'},
        backgroundColor: { control: 'color'},
        
        state:{
            control:{type: 'select'},
            options: ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'],
        },

        icon:{
            control:{type: 'select'},
            options: ['cloudy', 'cloud', 'thunder', 'storm', 'raining', 'sun'],
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { weather },
    template: '<weather v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
}