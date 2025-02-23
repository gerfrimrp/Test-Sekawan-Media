import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Data')}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Data</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Profile')}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FBFBFB',
    },
    btnContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    button: {
        backgroundColor: '#2D336B',
        paddingVertical: 20,
        width: 200,
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    }
});
