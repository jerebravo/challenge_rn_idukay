
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList, Platform } from "react-native";

const DataToScreen = [
    {
        title: "El hechicero Max ha entrado a una tienda y ha comprado un cierto número de pociones para ir a matar a una estrige, entre los tipos de poción compradas estan las siguentes:",
        data: [
            "Poción roja", 
            "Poción azul", 
            "Poción verde", 
            "Poción amarilla", 
            "Poción gris"
        ]
    },
    {
        title: "Al mezclar diferentes tipos de pociones puedes lograr hacer más daño a tu objetivo, las diferentes mezclas y porcentaje de daño que puedes hacer son las siguientes:",
        data: [
            "Una poción causa un 3% de daño.",
            "Dos pociones distintas causan un 5% de daño.",
            "Tres pociónes distintas causan un 10% de daño.",
            "Cuatro pociónes distintas causan un 20% de daño.",
            "Cinco pociónes distintas causan un 25% de daño."
        ]
    },
    {
        title: "El reto consiste en realizar un algoritmo que ayude al brujo a calcular los ataques más óptimos para una cantidad de pociones dadas, da igual el número de ataques y combinaciones que haga mientras se cumpla que:",
        data: [
            "Solo puedes combinar pociones de distinto color.",
            "El resultado debe ser las combinaciones que causen mayor daño."
        ]
    }
];

const Item = ({ title }) => (
    <View style={Platform.OS === 'ios' ? styles.itemIos : styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
);

const Description = () => {
    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={DataToScreen}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item title={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={Platform.OS === 'ios' ? styles.headerIos : styles.header}>{title}</Text>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#FFFFFF',
    },
    item: {
        paddingHorizontal: 20,
        marginVertical: 8
    },
    itemIos: {
        paddingHorizontal: 40,
        marginVertical: 8
    },
    header: {
        fontSize: 16,
        marginTop: 15,
        fontWeight: "bold",
    },
    headerIos: {
        fontSize: 16,
        marginTop: 15,
        fontWeight: "bold",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 13
    }
});

export default Description;