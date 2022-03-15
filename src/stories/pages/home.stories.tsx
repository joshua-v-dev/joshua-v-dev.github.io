// /stories/pages/home.stories.jsx
import React from 'react';
import { ComponentMeta } from '@storybook/react';

import Home from "../../pages/index";


export const HomePage = () => <Home />

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Pages/Home',
  component: HomePage,
} as ComponentMeta<typeof HomePage>;


