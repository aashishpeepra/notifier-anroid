import { View, Text } from 'react-native';
import React from 'react';

const Statistics = ({ text, description, bgColor, textColor }) => {
    return <View
        style={{
            display: 'flex',
            paddingHorizontal: 26,
            borderColor: textColor,
            borderWidth: 3,
            borderRadius: 8,
            backgroundColor: bgColor,
            paddingTop: 25,
            paddingBottom: 15
        }}>
        <Text
            style={{
                color: textColor,
                fontSize: 24,
                fontWeight: '600',
                lineHeight: 24,
                marginBottom: 20,
                textAlign: "center"
            }}>
            {text}
        </Text>
        <Text
            style={{
                color: textColor,
                fontSize: 14,
                fontWeight: '400',
                lineHeight: 14,
                textAlign: "center"
            }}>
            {description}
        </Text>
    </View>;
};

export default Statistics;
