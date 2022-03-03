import Input from './input.vue'

export default{
    title: 'Input',
    component: Input,
    argTypes:{
        backgroundColor: { control: 'color'},
        type:{
            control:{type: 'select'},
            options: ['text', 'password', 'submit'],
        },

        class:{
            control:{type: 'select'},
            options: ['error', false],
        },

        login:{
            control:{type: 'select'},
            options: ['Usuário', 'Senha'],
        },

        icon:{
            control: {type: 'select'},
            options: ['user', 'password', false],
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Input },
    template: '<Input v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    icon: 'user',
    login: 'Usuário',
    type: 'text',
}

export const User = Template.bind({});
User.args = {
    icon: 'user',
    login: 'Usuário',
    type: 'text',
}

export const Password = Template.bind({});
Password.args = {
    icon: 'password',
    login: 'Senha',
    type: 'password',
}

export const Submit = Template.bind({});
Submit.args = {
    icon: false,
    type: 'submit',
    text: 'Continuar'
}