import MyButton from './Button.vue';

export default {
  title: 'Example/Button',
  component: MyButton,

  // DEFININDO O ARGUMENTO QUE MEU COMPONENTE VAI RECEBER
  argTypes: {
    color: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

// É AQUI QUE A MAGIA ACONTECE

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props" />',
});

// AQUI ELE TA CRIANDO VARIAS SUB ARQUIVOS 

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
