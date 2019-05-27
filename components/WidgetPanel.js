import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { Icon } from 'react-native-elements'
import Filter from './Filter'

function WidgetPanel(props) {
    const [isFilterShow, toggleFilter] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [forceUpdateVariable, forceUpdate] = useState(false);

    const onToggleFilter = () => {
        toggleFilter(!isFilterShow);
    };

    const onGetFilters = (data) => { //Get data from filter
        setSelectedFilters(data);
        forceUpdate(!forceUpdateVariable);
    };


    return (
        <View style={styles.widget}>
            <Icon
                style={styles.icon}
                name='reorder'
                onPress={onToggleFilter}
            />
            <View style={styles.list}>
                <FlatList
                    data={selectedFilters}
                    renderItem={({item}) => <Text>{item}</Text>}
                />
            </View>
            <View style={styles.filter}>
                {isFilterShow && <Filter
                    isShow={true}
                    closeEvent={onToggleFilter}
                    onGetData={onGetFilters}
                    name={`filter_${props.number}`}
                />}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    widget: {
        flex:1,
        backgroundColor: '#F7F7F7',
        minHeight: 100,
        padding: '5%',
        flexDirection: 'row',
        margin: '2%',
    },
    icon: {
        flex:0.3,
        alignItems: 'flex-start',
    },
    list: {
        flex:1,
        backgroundColor: '#ffffff',
        marginLeft: '5%',
    },
    filter: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
});

export default WidgetPanel;
