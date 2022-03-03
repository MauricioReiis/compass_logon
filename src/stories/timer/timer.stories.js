import timer from './timer.vue'

export default{
    title: 'timer',
    component: timer,
    color:{ control: 'color'},
    fontSize: { control: 'fontSize'},
    backgroundColor: { control: 'backgroundColor'},
};

const Template = (args, { argTypes }) =>({
    props: Object.keys(argTypes),
    components: { timer },
    template: '<timer v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
}