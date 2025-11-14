import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Notifications from '../src/components/sections/Notifications';

export default {
  title: 'Sections/Notifications',
  component: Notifications,
} as Meta<typeof Notifications>;

const Template: StoryFn = (args) => <Notifications {...args} />;

export const Default = Template.bind({});
Default.args = {};
