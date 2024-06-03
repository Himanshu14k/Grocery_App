import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomHeader from '../../components/customHeader';
import styles from './style';
import Spacer from '../../components/spacer';
import appImages from '../../theme/images';
import {BlurView} from '@react-native-community/blur';
import {responsiveHeight, responsiveWidth} from '../../utils/responsiveSize';
import {navigate} from '../../navigations/navigationServices';
import {routesConstants} from '../../constants/constants';
import {useSelector} from 'react-redux';
import {dispatch} from '../../utils/globalFunctions';
import {getProductDetailsAction} from '../../redux/actions/product';

const ProductDetails = ({route}) => {
  const productDetails = useSelector(
    (state: any) => state.productReducer.productDetails,
  );
  const [selectedItem, setselectedItem] = useState(null);
  const [product_detail, setProduct_detail] = useState({})
  const [similar_products, setSimilar_products] = useState({})


  useEffect(() => {
    dispatch(
      getProductDetailsAction({
        id: route?.params?.id,
      }),
    );
  }, []);

  useEffect(() => {
    setProduct_detail(productDetails?.product_detail[0] ? productDetails?.product_detail[0]: {})
    setSimilar_products(productDetails?.similar_products)
    setselectedItem(productDetails?.product_detail[0] ? productDetails?.product_detail[0]?.image_urls[0] : null)
  }, [productDetails]);

  const _renderPreviewImage = ({item, id}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setselectedItem(item)}
        style={[styles.btn1, selectedItem === item && styles.extraStyles]}>
        <Image source={{uri: item}} style={styles.img2} />
      </TouchableOpacity>
    );
  };

  const _renderItemSeprator = () => {
    return <Spacer width={responsiveWidth(5)} />;
  };

  const _renderItemList = ({item, id}) => {
    return (
      <TouchableOpacity key={id} activeOpacity={0.8} style={styles.container6}>
        <View style={styles.container7}>
          <Image
            source={item?.image ? {uri: item?.image} : appImages.product2}
            style={styles.img3}
          />
        </View>
        <View style={styles.container8}>
          <Text style={styles.title6}>{item?.name}</Text>
          <Spacer height={responsiveHeight(2)} />
          <Text style={styles.title7}>৳{item?.sell_price}</Text>
          <Spacer height={responsiveHeight(0.1)} />
          <Text style={styles.title8}>৳{item?.cost_price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container1}>
      <CustomHeader header="Product Detail" />
      <Spacer />
      <View style={styles.container2} />
      <BlurView style={styles.absolute} blurType="dark" blurAmount={10} />
      <View style={styles.container3} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list1}>
        <View style={styles.container4}>
          <Image source={{uri: product_detail?.image_url}} style={styles.img1} />
        </View>
        <Spacer height={responsiveHeight(3)} />
        <View>
          <FlatList
            contentContainerStyle={styles.list2}
            horizontal
            data={product_detail?.image_urls}
            renderItem={_renderPreviewImage}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={_renderItemSeprator}
          />
        </View>
        <Spacer height={responsiveHeight(3)} />
        <Text style={styles.title1}>{product_detail?.name}</Text>
        <Spacer height={responsiveHeight(3)} />
        <View style={styles.container5}>
          <Text style={styles.title2}>{product_detail?.quantity} KG</Text>
          <Text style={styles.title3}>৳{product_detail?.sell_price}</Text>
        </View>
        <Spacer height={responsiveHeight(3)} />
        <Text style={styles.title4}>{product_detail?.description}</Text>
        <Spacer height={responsiveHeight(3)} />
        <Text style={styles.title5}>You can also check this items</Text>
        <Spacer height={responsiveHeight(5)} />
        {/* {_renderItemList()} */}
        <View>
          <FlatList
            contentContainerStyle={styles.list2}
            data={similar_products}
            renderItem={_renderItemList}
            showsHorizontalScrollIndicator={false}
            // ItemSeparatorComponent={_renderItemSeprator}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigate(routesConstants.bag)}
        activeOpacity={0.8}
        style={styles.btn2}>
        <Spacer width={24} />
        <Text style={styles.title9}>Add to Bag</Text>
        <Image source={appImages.bag} style={styles.icon1} />
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetails;
