import { Image, Linking, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'

export default function ProfileScreen() {
    const handleLinkedIn = () => {
        Linking.openURL('https://www.linkedin.com/in/gefri-alan-s-3a866b315/')
            .catch(err => console.error("Couldn't load page", err));
    };

    const handleGitHub = () => {
        Linking.openURL('https://github.com/gerfrimrp')
            .catch(err => console.error("Couldn't load page", err));
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                style={styles.profilePhoto}
                source={require('../../assets/profilephotos.jpg')}
            />
            <Text style={styles.nameText}>Gefri Alans, 26</Text>
            <Text style={styles.locationText}>Bandung, Jawa Barat</Text>

            <Text style={styles.bioText}>I’m an enthusiastic individual making a career switch to software development, with a focus on JavaScript.</Text>

            <View style={styles.socialIcons}>
                <TouchableOpacity onPress={handleLinkedIn}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/linkedin.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleGitHub}>
                    <Image
                        style={styles.logoGit}
                        source={require('../../assets/github.png')}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.workExperience}>
                <Text style={styles.headerTitle}>Work Experience</Text>
                <View style={styles.job}>
                    <Text style={styles.title}>React Native Developer Intern</Text>
                    <Text style={styles.company}>PT. Kawan Kerja (Nov 2024 - Present)</Text>
                </View>
                <View style={styles.job}>
                    <Text style={styles.title}>Front End Developer Intern</Text>
                    <Text style={styles.company}>PT. MyBuild.Id (Oct 2024 - Jan 2025)</Text>
                </View>
            </View>

            <View style={styles.educationSection}>
                <Text style={styles.headerTitle}>Education</Text>
                <View style={styles.job}>
                    <Text style={styles.title}>Full Stack JavaScript Immersive Program</Text>
                    <Text style={styles.company}>Hacktiv8 Indonesia</Text>
                </View>
                <View style={styles.job}>
                    <Text style={styles.title}>Law</Text>
                    <Text style={styles.company}>Universitas Sumatera Utara</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#FBFBFB',
        padding: 20,
        flexGrow: 1,
    },
    profilePhoto: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginTop: 50,
    },
    nameText: {
        fontSize: 25,
        marginTop: 20,
    },
    locationText: {
        fontSize: 15,
        marginTop: 5,
    },
    socialIcons: {
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
        marginTop: 30,
    },
    logo: {
        width: 60,
        height: 60,
    },
    logoGit: {
        width: 50,
        height: 50,
    },
    bioText: {
        fontSize: 15,
        marginTop: 20,
        paddingHorizontal: 20,
        textAlign: 'center',
    },
    workExperience: {
        marginTop: 40,
        width: '100%',
    },
    job: {
        marginBottom: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'semibold',
        paddingHorizontal: 20,
    },
    company: {
        fontSize: 15,
        color: '#555',
        paddingHorizontal: 20,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    educationSection: {
        marginTop: 40,
        width: '100%',
    }
})
