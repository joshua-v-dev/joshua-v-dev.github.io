import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn: ComponentMeta<typeof Header> = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut: ComponentMeta<typeof Header> = Template.bind({});
LoggedOut.args = {};
