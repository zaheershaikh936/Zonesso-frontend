/* eslint-disable prettier/prettier */
import React from 'react';
import { Text } from 'react-native';

type HeadingProps = {
    title: string,
    style: Array<any>
}
export default function Heading({ title , style}:HeadingProps) {
    return (
        <Text style={style}>{ title }</Text>
    );
}
