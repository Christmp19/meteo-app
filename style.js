import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        margin: 20,
    },
    title: {
        fontSize: 22,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 5,
        padding: 15,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },
    viewSearch: {
        flex: 1,
        justifyContent: 'start',
        alignItems: 'center',
        marginVertical: 50,
    },
    textinputSearch: {
        height: 50,
        width: '80%',
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 20,
        color: 'blue',
        textTransform: 'capitalize',
        fontSize: 16
    },
    viewAbout: {
        margin: 20,
        flex: 1,
    },
    titleAbout: {
        fontSize: 22,
        marginBottom: 20,
        color: 'blue'
    },
    activeTabLabel: {
        fontSize: 12,
        fontWeight: '500',
        color: 'white',
    },
    inactiveTabLabel: {
        fontSize: 12,
        fontWeight: '500',
        color: 'gray',
    },
    viewList: {
        flex: 1,
        marginVertical: 30,
        marginHorizontal: 20,
        height: '100vh',
    },
    textList: {
        fontSize: 18,
        color: 'blue'
    },
    header: {
        backgroundColor: 'blue',
    },
    headerTitle: {
        color: 'white',
    },
    color: {
        color: 'blue',
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    date: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    temperature: {
        fontSize: 14,
    },
    weather: {
        fontSize: 14,
        fontStyle: 'italic',
    },
    textResult: {
        fontSize: 18,
        color: 'blue',
        textTransform: 'capitalize',
        marginBottom: 20
    },
})