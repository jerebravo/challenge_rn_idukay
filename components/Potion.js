import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Potion = (props) => {
    const { index, colorPotion, count, callbackCounter, counterBlocked, colorCount } = props;

    const changeCounter = (updateCount) => {
        callbackCounter(index, updateCount);
    }

    return (
        <View key={`container_${index}`} style={styles.container}>
            <Button
                key={`btn_decrement_${index}`}
                title="-"
                onPress={() => changeCounter(count-1)}
                style={styles.btnCounter}
                disabled={count == 0 || counterBlocked}
            />
            <View   key={`view_potion_${index}`} 
                    style={{...styles.poisons, backgroundColor: colorPotion}} >
                <Text key={`counter_${index}`} style={{...styles.counter, color: colorCount}}>{count}</Text>
            </View> 
            <Button
                key={`btn_increment_${index}`}
                title="+"
                onPress={() => changeCounter(count+1)}
                style={styles.btnCounter}
                disabled={counterBlocked}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'row',
        maxHeight: 100,
    },
    poisons: {
        width: 100,
        height: 70,
        margin: 20,
        borderRadius: 20,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    counter:{
        fontSize: 30,
        fontWeight: 'bold',
    },
    btnCounter:{
        borderRadius: 10,
    }
});

export default Potion;