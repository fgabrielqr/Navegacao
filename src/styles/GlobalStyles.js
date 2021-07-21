import { StyleSheet, Platform } from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.accent,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center',
        color: '#fff'
    },
    title1: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
    },
    screenContainer: {
        flex: 1,
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 20,
        paddingRight: 10,
        // alignItems: 'center',
        // justifyContent: 'flex-start'
        backgroundColor: Colors.accent
    },
    buttonText: {
        color: Colors.buttonText,
        fontSize: 20,
        textAlign: 'center'
    },
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 40 : 0
    },
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 15,
        paddingHorizontal: 45,
        borderRadius: 15,
        marginVertical: 10,
        marginHorizontal: 15
    },
    btn: {
        padding: 0,
        marginVertical: '173%',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },

    superior: {
        padding: 0,
        marginVertical: '159%',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
});