import React from 'react';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';

const Product = ({ navigation }) => <WebView source={{ uri: navigation.state.params.product.url }} />;

Product.navigationOptions = ({ navigation }) => ({ title: navigation.state.params.product.title });

Product.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired
};

export default Product;
