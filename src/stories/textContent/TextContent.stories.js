import TextContent from './TextContent.vue';

export default {
  title: 'textContent',
  component: TextContent,

  argTypes: {
    color: { control: 'color' },
    apply: {
      control: { type: 'select' },
      options: ['greetingParagraph', 
      'loginText', 
      'errorMessage', 
      'textDay', 
      'textCity', 
      'paragraphContent', 
      'textFooterContent', 
      'refreshText', 
      'seconds', 
      'continueText', 
      'unauthorized', 
      'redirecting',
      ]
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TextContent },
  template: '<TextContent v-bind="$props" />',
});

export const Primary = Template.bind({});
  Primary.args = {
   text: 'default text'
};

export const greeting = Template.bind({});
greeting.args = {
    apply: 'greetingParagraph',
    text: 'default text'
};

export const login = Template.bind({});
login.args = {
  apply: 'loginText',
  text: 'default text'
}

export const errorMessage = Template.bind({});
errorMessage.args = {
  apply: 'errorMessage',
  text: 'default text'
}

export const textDay = Template.bind({});
textDay.args = {
  apply: 'textDay',
  text: 'default text'
}

export const textCity = Template.bind({});
textCity.args = {
  apply: 'textDay',
  text: 'default text'
}

export const paragraphContent = Template.bind({});
paragraphContent.args = {
  apply: 'textDay',
  text: 'default text'
}

export const textFooterContent = Template.bind({});
textFooterContent.args = {
  apply: 'textDay',
  text: 'default text'
}

export const refreshText = Template.bind({});
refreshText.args = {
  apply: 'textDay',
  text: 'default text'
}

export const secondsText = Template.bind({});
secondsText.args = {
  apply: 'seconds',
  text: 'default text'
}

export const continueText = Template.bind({});
continueText.args = {
  apply: 'continueText',
  text: 'default text'
}

export const unauthorized = Template.bind({});
unauthorized.args = {
  apply: 'unauthorized',
  text: 'default text'
}

export const redirecting = Template.bind({});
redirecting.args = {
  apply: 'redirecting',
  text: 'default text'
}