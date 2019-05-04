import { StyleSheet, View, Modal, Text, TouchableHighlight } from 'react-native';
import React from 'react';

export const dataTypes = {
    CONTEXT: 'CONTEXTS',
    DIMENTIONS: 'DIMENTIONS',
    FILTERS: 'FILTERS',
    SORT: 'SORT',
};

export function Filter(props) {

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.isShow}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 22}}>
                <View>
                    <Text>Hello World!</Text>

                    <TouchableHighlight
                        onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}>
                        <Text>Hide Modal</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    filter: {

    },
});

export default Filter;
