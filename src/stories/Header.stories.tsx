
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  {Header}  from './Header';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;


const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn: ComponentMeta<typeof Header> = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut: ComponentMeta<typeof Header> = Template.bind({});
LoggedOut.args = {};


