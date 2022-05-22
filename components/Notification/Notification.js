import React from "react"
import { StyleSheet, Text, View } from 'react-native';

const Notification = ({ icon, heading, description, date }) => {
    return (
        <View style={styles.notification}>
            <View style={styles.upper}>
                <Text style={styles.icon}>{icon}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.heading}>{heading}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    notification: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        borderRadius: 8,
        marginTop: 14,
        marginLeft: 16,
        marginRight: 16,
    },
    upper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    icon: {
        fontSize: 32,
    },
    date: {
        fontSize: 12,
        lineHeight: 16.75,
        color: '#8A8383',
    },
    lower: {
        display: 'flex',
    },
    heading: {
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 32.75,
        color: '#111111',
        marginBottom: 8,
    },
    description: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 19,
        color: '#8A8383',
    },
});

export default Notification;