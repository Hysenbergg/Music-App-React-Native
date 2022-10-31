import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    inner_container: {
        flex: 1,
        marginLeft: 5,
        marginTop: 12,
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    info_container: {
        flex: 1,
        marginTop: 3,
        flexDirection: 'row',
    },
    year: {
        marginLeft: 5,
        fontWeight: 'bold',
        color: 'gray',
    },
    artist: {
        marginLeft: 2,
        fontSize: 15,
    },
    content_container: {
        flexDirection: 'row',
    },
    soldOut_container: {
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 5,
    },
    soldOut_info: {
        color: 'red',
    },
});