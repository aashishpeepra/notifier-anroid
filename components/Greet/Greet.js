import { StyleSheet, View, Text, Image } from "react-native"
import React from "react";

const Greet = () => {
    return (
        <View style={styles.greet}>
            <View style={styles.textbox}>
                <Text style={styles.text}>Good Afternoon 👋</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    greet: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: 16
    },
    textBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    text: {
        alignSelf: "flex-start",
        fontSize: 20,
        lineHeight: 27,
        fontWeight: "700"
    }
})

export default Greet;