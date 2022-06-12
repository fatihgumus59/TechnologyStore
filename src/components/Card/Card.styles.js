import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d5d9de',
    padding: 15,
    margin: 10,
    borderRadius: 12,
  },
  inContainer: {
    padding: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 4,
  },
  price: {
    fontSize: 16,
    marginTop: 4,
    borderRadius: 10,
    textAlign: 'left',
    marginTop: 8,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    width: '100%',
    borderRadius: 15,
    resizeMode: 'contain',
  },
  inStock: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'red',
    marginTop: 4,
  },
  stockTrue: {
    color: 'blue',
  },
});
