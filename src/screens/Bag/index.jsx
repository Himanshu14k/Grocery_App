import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../components/customHeader';
import styles from './style';
import Spacer from '../../components/spacer';
import appImages from '../../theme/images';
import {BlurView} from '@react-native-community/blur';
import {responsiveHeight, responsiveWidth} from '../../utils/responsiveSize';
import {navigate} from '../../navigations/navigationServices';
import {routesConstants} from '../../constants/constants';
import {useSelector} from 'react-redux';
import { dispatch } from '../../utils/globalFunctions';
import { removeItemsFromBagAction } from '../../redux/actions/bags';

const Bag = () => {
  const bags = useSelector((state: any) => state.bagsReducer.bags);
  const [quantity, setQuantity] = useState(1);
  console.log("bags", bags?.length);
  const _onIncrease = () => {
    setQuantity(quantity + 1);
  };

  const _onDecrease = () => {
    if (quantity == 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  function removeFromBags(id) {
    dispatch(removeItemsFromBagAction(id))
  }

  function subtodate() {
    let subtotal = 0;
    if (bags) {
      subtotal = bags.reduce((accumulator, item) => {
        return accumulator + (parseInt(item?.cost_price) || 0); 
      }, 0);
    }
    return subtotal;
  }
  
  const _renderItemList = ({item}) => {
    return (
      <>
        <Spacer height={responsiveHeight(2)} />
        <TouchableOpacity activeOpacity={0.8} style={styles.container2}>
          <View style={styles.container3}>
            <Image source={{uri: item?.image_url}} style={styles.img1} />
            {/* <View style={styles.container8}>
              <Text style={styles.title6}>20% OFF</Text>
            </View> */}
          </View>
          <View style={styles.container4}>
            <View style={styles.container16}>
              <Text style={styles.title1}>{item?.name}</Text>
              <Text
              onPress={() => removeFromBags(item?.id)}
              style={[styles.title1, {color: "red"}]}>Remove</Text>
            </View>
            <Spacer height={responsiveHeight(2)} />
            <View style={styles.container5}>
              <View style={styles.container6}>
                <Text style={styles.title2}>৳{item?.sell_price}</Text>
                <Spacer height={responsiveHeight(0.1)} />
                <Text style={styles.title3}>৳{item?.cost_price}</Text>
              </View>
              <View style={styles.container7}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={_onDecrease}
                  style={styles.btn1}>
                  <Text style={styles.title4}>-</Text>
                </TouchableOpacity>
                <Text style={styles.title5}>{quantity}</Text>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={_onIncrease}
                  style={styles.btn2}>
                  <Image style={styles.icon1} source={appImages.plus} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <Spacer background={'#f0f0f0'} height={responsiveHeight(0.3)} />
        <Spacer height={responsiveHeight(2)} />
      </>
    );
  };



  return (
    <View style={styles.container1}>
      <CustomHeader header="Product Detail" />
      <Spacer />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list1}>
        <FlatList
          data={bags}
          renderItem={_renderItemList}
          showsVerticalScrollIndicator={false}
        />
        <View style={styles.container9}>
          <Text style={styles.title7}>Additional Instructions</Text>
          <View style={styles.container10} />
        </View>
        <Spacer height={responsiveHeight(3)} />
        <View style={styles.container9}>
          <View style={styles.container11}>
            <Text style={styles.title7}>Delivery Location</Text>
            <Text style={styles.title8}>Change</Text>
          </View>
          <View style={styles.container12}>
            <View style={styles.container13}>
              <Image style={styles.icon2} source={appImages.location} />
            </View>
            <Spacer width={responsiveWidth(3)} />
            <Text style={styles.title9}>
              Floor 4, Wakil Tower, Ta 131 Gulshan Badda Link Road
            </Text>
            <Spacer width={responsiveWidth(3)} />
          </View>
          <Spacer height={responsiveHeight(4)} />
          <View style={styles.container11}>
            <Text style={styles.title10}>Subtotal</Text>
            <Text style={styles.title10}>{subtodate()}</Text>
          </View>
          <Spacer height={responsiveHeight(2)} />
          <View style={styles.container11}>
            <Text style={styles.title10}>Delivery Charge</Text>
            <Text style={styles.title10}>0</Text>
          </View>
          <Spacer height={responsiveHeight(2)} />
          <View style={styles.container11}>
            <Text style={[styles.title10, styles.title11]}>Total</Text>
            <Text style={[styles.title10, styles.title11]}>{subtodate()}</Text>
          </View>
        </View>
        <Spacer height={responsiveHeight(5)} />
        <View style={styles.container9}>
          <Text style={styles.title7}>Payment Method</Text>
          <View style={styles.container14}>
            <View style={styles.container15}>
              <Image style={styles.icon2} source={appImages.money} />
            </View>
            <Spacer width={responsiveWidth(3)} />
            <Text style={[styles.title9, styles.title12]}>
              {'Tap Here to select your \nPayment Method'}
            </Text>
            <Spacer width={responsiveWidth(3)} />
            <Image source={appImages.rArrow} style={styles.icon3} />
            <Spacer width={responsiveWidth(1)} />
          </View>
        </View>
        <Spacer height={responsiveHeight(5)} />
        <TouchableOpacity
          onPress={() => navigate(routesConstants.bag)}
          activeOpacity={0.8}
          style={styles.btn3}>
          <Spacer width={24} />
          <Text style={styles.title13}>Place Order</Text>
          <Image source={appImages.rArrow2} style={styles.icon4} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Bag;
