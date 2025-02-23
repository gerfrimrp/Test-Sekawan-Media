import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';

export default function DataScreen({ navigation }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    const fetchData = async () => {
        if (loading) return;
        setLoading(true);

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`);
            const fetchedData = await response.json();
            setData(fetchedData);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [page]);

    const detail = (id) => {
        navigation.navigate('Detail', { id });
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => detail(item.id)}
            style={styles.itemCard}>
            <View style={styles.header}>
                <Image
                    style={styles.profileImage}
                    source={require('../../assets/profile.png')} />
                <Text style={styles.title}>
                    People {item.id}
                </Text>
            </View>
            <Text>{item.body}</Text>
        </TouchableOpacity>
    );

    const previous = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    const next = () => {
        setPage(page + 1)
    }

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            )}
            <View style={styles.pagination}>
                <TouchableOpacity
                    onPress={previous}
                    disabled={page === 1}
                >
                    <Text style={[styles.button, page === 1 && styles.disabledButton]}>Previous</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={next}
                    disabled={data.length === 0}
                >
                    <Text style={[styles.button, data.length === 0 && styles.disabledButton]}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FBFBFB',
    },
    itemCard: {
        padding: 10,
        margin: 15,
        borderBottomColor: '#ccc',
        borderRadius: 15,
        backgroundColor: '#D9EAFD',
    },
    title: {
        flex: 1,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    button: {
        fontSize: 18,
        width: 120,
        textAlign: 'center',
        borderRadius: 4,
        padding: 10,
        marginHorizontal: 10,
        color: '#fff',
        backgroundColor: '#2D336B',
    },
    disabledButton: {
        color: '#ccc',
        backgroundColor: '#f0f0f0',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 25,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        // backgroundColor: 'blue'
        marginBottom: 15,
    }
});
