import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import api from '../services/api';

class Main extends Component {
  static navigationOptions = {
    title: 'Riéquite Neitive Mermão'
  };

  state = {
    productsInfo: {},
    docs: [],
    page: 1
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);
    const { docs, ...productsInfo } = response.data;
    const { docs: currentDocs } = this.state;
    this.setState({ docs: [...currentDocs, ...docs], productsInfo, page });
  };

  loadMoreProducts = () => {
    const { productsInfo, page } = this.state;
    if (page === productsInfo.page) return;

    this.loadProducts(page + 1);
  };

  renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <TouchableOpacity
        style={styles.productButton}
        onPress={() => {
          const { navigation } = this.props;
          navigation.navigate('Product', { product: item });
        }}
      >
        <Text style={styles.productButtonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    const { docs } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.list}
          data={docs}
          keyExtractor={({ _id: id }) => id}
          renderItem={this.renderItem}
          onEndReached={this.loadMoreProducts}
          onEndReachedThreshold={0.1}
        />
      </View>
    );
  }
}

Main.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  list: {
    padding: 20
  },
  productContainer: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  productDescription: {
    fontSize: 16,
    color: '#999',
    marginTop: 5,
    lineHeight: 24
  },
  productButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#DA552F',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  productButtonText: {
    fontSize: 16,
    color: '#DA552F',
    fontWeight: 'bold'
  }
});

export default Main;
