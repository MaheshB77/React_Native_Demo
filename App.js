import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.demoText}>Mahesh</Text>
            <Text style={styles.demoText1}>Mahesh</Text>
            <Button
                // onPress={onPressLearnMore}
                title="Press me"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green"
    },
    demoText: {
        fontSize: 30,
        backgroundColor: "white",
        width: 200,
        textAlign: "center"
    },
    demoText1: {
        fontSize: 30,
        backgroundColor: "yellow",
        width: 200,
        textAlign: "center",
        borderRadius: 10,
        marginTop: 5
    }
});
