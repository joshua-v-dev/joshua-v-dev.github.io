// // LoginForm.stories.ts|tsx
// 
// import { ComponentStory, ComponentMeta, ComponentStoryFn } from '@storybook/react';
// 
// import { within, userEvent } from '@storybook/testing-library';
// import {  JSXElementConstructor,  } from 'react';
// 
// import  {LoginForm}  from './LoginForm';
// 
// export default {
//     component: LoginForm,
//     parameters: {
//         layout: 'fullscreen',
//     }
// } as  LoginForm<typeof >;
// 
// const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;
// 
// export const EmptyForm : ComponentStory<typeof Template> = Template.bind({});
// 
// export const FilledForm = Template.bind({});
// FilledForm.play = async ({ canvasElement }: JSXElementConstructor<Props>) => {
//   // Starts querying the component from its root element
//   const canvas = within(canvasElement);
// 
//   await userEvent.type(canvas.getByTestId('email'), 'email@provider.com', {
//     delay: 100,
//   });
//   await userEvent.type(canvas.getByTestId('password'), 'a-random-password', {
//     delay: 100,
//   });
// 
//   // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
//   await userEvent.click(canvas.getByRole('button'));
// };
export{}