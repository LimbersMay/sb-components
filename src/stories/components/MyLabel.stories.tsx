import {MyLabel} from '../../components/MyLabel';
import {Meta, StoryFn} from '@storybook/react';

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    argTypes: {
        size: {control: 'select'},
        color: {control: 'select'},
        fontColor: { control: 'color'}
    }
} satisfies Meta<typeof MyLabel>

const Template: StoryFn<typeof MyLabel> = (args) => <MyLabel {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    label: 'Hello World',
    size: 'normal',
    allCaps: false // true: capitalize all letters
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true
}

export const Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary' // 'primary' | 'secondary' | 'tertiary'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    size: 'h1',
    fontColor: '#5517ac'
}
