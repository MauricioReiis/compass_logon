import Title from './Title.vue'

export default{
    title: 'Title',
    component: Title,
    color:{ control: 'color'},
    fontSize: { control: 'fontSize'},
    backgroundColor: { control: 'color'},

    argTypes:{
        apply:{
            control:{type: 'select'},
            options: ["firstTitle",
            "titleContent",
            "salutationTitle",
            "numberClock",
            "degreesCelsius",
            "erro401",
          ],
        },

        type:{
            control:{type: 'select'},
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Title },
    template: '<Title v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    text: 'Default title',
    type: 'h1'
};

export const firstTitle = Template.bind({});
firstTitle.args = {
    apply: 'firstTitle',
    text: 'Default title',
    type: 'h2',
};

export const titleContent = Template.bind({});
titleContent.args = {
    apply: 'titleContent',
    text: 'Default title',
    type: 'h1',
};

export const salutationTitle = Template.bind({});
salutationTitle.args = {
    apply: 'salutationTitle',
    text: 'Default title',
    type: 'h1',
};

export const numberClock = Template.bind({});
numberClock.args = {
    apply: 'numberClock',
    text: 'Default title',
    type: 'h1',
};

export const degreesCelsius = Template.bind({});
degreesCelsius.args = {
    apply: 'degreesCelsius',
    text: 'Default title',
    type: 'h3',
};

export const erro401 = Template.bind({});
erro401.args = {
    apply: 'erro401',
    text: 'Default title',
    type: 'h3',
};