import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, View, Button, SectionList, Text, Platform, SafeAreaView } from 'react-native';

import { PotionsContext } from '../store'
import Potion from '../components/Potion';

const ItemList = ({ title }) => (
    <View style={styles.listItem}>
      <Text style={styles.listTitle}>{title}</Text>
    </View>
);

const BuyPotion = () => { 

    const [counterBlocked, setCounterBlocked] = useState(false);

    const { editPotionsCounter } = useContext(PotionsContext);

    const [listPotions, setListPotions] = useState([]);
    const [listFormatedPotions, setListFormatedPotions] = useState([]);

    useEffect(() => { setList(null); }, []);

    const setList = (data) => {
        const [potions, generateAttack] = editPotionsCounter(data);
        setListPotions(potions)
        setListFormatedPotions(generateAttack)
    }

    const callbackCounter = (index, counter) => { 
        let updateListPotions = listPotions;
        updateListPotions[index].counter = counter;
        setList(updateListPotions);
    }

    const resetCounter = () => {
        let updateListPotions = listPotions.map( potions => { return {...potions, counter: 0}; } );
        setList(updateListPotions);
        setCounterBlocked(false);
    }

    const bestCombination = () => {
        setList(listPotions);
        setCounterBlocked(true);
    }

    return (
        <SafeAreaView style={Platform.OS === 'ios' ? styles.containerIos : styles.container}> 
            
            { 
                listPotions.length > 0 &&
                listPotions?.map((data, index) => {
                    return <Potion 
                                index={index} 
                                colorPotion={data.potion} 
                                count={data.counter}
                                colorCount={data.style == 'lighte' ? '#FFF' : '#000'}
                                callbackCounter={callbackCounter}
                                counterBlocked={counterBlocked}
                            />
                })
            }

            <View style={styles.containerBtn}>
                <Button
                    title="Reset counters"
                    onPress={() => resetCounter() }
                    style={styles.btn}
                />
                <Button
                    title="Buy and compare"
                    onPress={() => bestCombination() }
                    style={styles.btn}
                />
            </View>

            {
                counterBlocked &&
                <View style={styles.containerComparePotions}>
                    <SectionList
                        sections={[{
                            title: 'The best combinations of potions is:',
                            data: listFormatedPotions
                        }]}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({ item }) => <ItemList title={item} />}
                        renderSectionHeader={({ section: { title } }) => (
                            <Text style={styles.listHeader}>{title}</Text>
                        )}
                    />
                </View>
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 10
    },
    containerIos:{
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    containerBtn: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 20,
        marginHorizontal: 30,
        paddingBottom: 30,
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
    },
    btn:{
        borderRadius: 10,
        fontSize: 15,
        fontWeight: 'bold',
    },
    listHeader: {
        fontSize: 16,
        marginTop: 15,
        fontWeight: "bold",
        paddingHorizontal: 20
    },
    listTitle: {
        fontSize: 13
    },
    listItem: {
        paddingHorizontal: 20,
        marginVertical: 8
    }
});

export default BuyPotion;