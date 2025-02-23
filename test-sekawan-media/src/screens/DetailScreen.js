import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function DetailScreen({ route }) {
    const { id } = route.params;
    const [data, setData] = useState({});
    const [comments, setComments] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const fetchedData = await response.json();
            setData(fetchedData);

            const commentResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
            const fetchedComments = await commentResponse.json();
            setComments(fetchedComments);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const renderComment = ({ item }) => (
        <View style={styles.commentCard}>
            <View style={styles.header}>
                <Image
                    style={styles.profileImageComment}
                    source={require('../../assets/profile.png')} />
                <Text style={styles.commentText}>{item.email}</Text>
            </View>
            <Text>{item.body}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.header}>
                    <Image
                        style={styles.profileImage}
                        source={require('../../assets/profile.png')} />
                    <Text style={styles.title}>People {id}</Text>
                </View>
                <Text>{data.body}</Text>
            </View>

            <View style={styles.commentContainer}>
                <Text style={styles.commentHeader}>Comments</Text>
                <FlatList
                    data={comments}
                    renderItem={renderComment}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FBFBFB',
    },
    card: {
        padding: 20,
        margin: 10,
        backgroundColor: '#D9EAFD',
        borderRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        flex: 1
    },
    commentContainer: {
        flex: 1,
        marginTop: 20,
        padding: 10,
        backgroundColor: '#F5F5F5',
    },
    commentHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    commentCard: {
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
    },
    commentText: {
        fontWeight: 'bold',
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 25,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        // backgroundColor: 'blue'
        marginBottom: 15,
    },
    profileImageComment: {
        width: 30,
        height: 30,
        borderRadius: 25
    }
});
