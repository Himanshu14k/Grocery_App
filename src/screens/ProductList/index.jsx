import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomHeader from '../../components/customHeader';
import styles from './style';
import appImages from '../../theme/images';
import Spacer from '../../components/spacer';
import {responsiveHeight, responsiveWidth} from '../../utils/responsiveSize';
import { navigate } from '../../navigations/navigationServices';
import { routesConstants } from '../../constants/constants';
import { getProductListAction } from '../../redux/actions/product';
import { useDispatch, useSelector } from 'react-redux';
import { addItemsInBagAction } from '../../redux/actions/bags';

const ProductList = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state: any) => state.productReducer.productList);
  const bags = useSelector((state: any) => state.bagsReducer.bags);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    dispatch(getProductListAction())
  }, [])
  
  useEffect(() => {
    setFilteredData(productList)
  }, [productList])
  
  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
      const newData = productList?.filter(item => item?.name?.toLowerCase().includes(text.toLowerCase()));
      setFilteredData(newData);
    } else {
      setFilteredData(productList);
    }
  };

  function addToBag(item) {
    dispatch(addItemsInBagAction(item))
  }

  const _renderListItems = ({item, id}) => {
    return (
      <View style={styles.container3}>
        <TouchableOpacity onPress={() => navigate(routesConstants.productDetails, {id: item?.id})} activeOpacity={0.8} style={styles.btn1}>
          <View style={styles.container4}>
            <Image source={{uri: item?.image_url}} style={styles.img1} />
          </View>
          <Spacer height={responsiveHeight(1.2)} />
          <Text numberOfLines={3} style={styles.title1}>
            {item?.name}
          </Text>
          <Spacer height={responsiveHeight(1)} />
          <Text numberOfLines={1} style={styles.title2}>
            ৳{item?.sell_price}
          </Text>
        </TouchableOpacity>
        <Spacer height={responsiveHeight(2)} />
        <TouchableOpacity onPress={() => addToBag(item)} activeOpacity={0.8} style={styles.btn2}>
          <Image style={styles.icon2} source={appImages.bag} />
          <Spacer width={responsiveWidth(3)} />
          <Text style={styles.title3}>Add to Bag</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const _renderItemSeprator = () => {
    return <Spacer height={responsiveHeight(5)} />;
  };

  return (
    <View style={styles.container1}>
      <CustomHeader header="Snacks" />
      <View style={styles.container2}>
        <Image source={appImages.search} style={styles.icon1} />
        <TextInput
          numberOfLines={1}
          style={styles.textInput}
          placeholder={'Search Anything'}
          placeholderTextColor={'rgba(55, 71, 79, 0.72)'}
          value={search}
          onChangeText={handleSearch}
        />
      </View>
      <Spacer height={responsiveHeight(4)} />
      <FlatList
        data={filteredData}
        style={styles.list}
        numColumns={2}
        ItemSeparatorComponent={_renderItemSeprator}
        contentContainerStyle={styles.listContent}
        renderItem={_renderListItems}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
      />
      {bags?.length > 0 && <View style={styles.container5}>
        <View style={styles.container6}>
          <Text style={styles.title4}>{bags?.length} items selected</Text>
          {/* <Text style={styles.title5}>Quantity - 2</Text> */}
        </View>
        <TouchableOpacity onPress={() => navigate(routesConstants.bag)} activeOpacity={0.8} style={styles.btn3}>
          <Text style={styles.title3}>Place Order</Text>
        </TouchableOpacity>
      </View>}
    </View>
  );
};

export default ProductList;
