import {StyleSheet} from 'react-native';
import {responsiveHeight, responsiveWidth} from '../../utils/responsiveSize';

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#f6f9f8',
    paddingHorizontal: responsiveWidth(5),
  },
  container2: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '30%',
    backgroundColor: '#f6f9f8',
    zIndex: -9999,
  },
  absolute: {
    position: 'absolute',
    top: 220,
    left: 0,
    right: 0,
    height: 30,
    zIndex: -99991,
  },
  container3: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '70%',
    backgroundColor: '#fff',
    zIndex: -9999,
  },
  list1: {
    flexGrow: 1,
    paddingBottom: responsiveHeight(7)
  },
  container4: {
    width: responsiveWidth(74),
    height: responsiveHeight(35),
    backgroundColor: '#fff',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  img1: {
    height: '80%',
    width: '90%',
    resizeMode: 'contain',
  },
  list2: {
    flexGrow: 1,
  },
  btn1: {
    width: responsiveHeight(7),
    height: responsiveHeight(7),
    backgroundColor: '#fff',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  extraStyles: {
    borderWidth: 2,
    borderColor: '#5EC401',
  },
  img2: {
    height: '80%',
    width: '90%',
    resizeMode: 'contain',
  },
  title1: {
    color: '#37474F',
    fontSize: 20,
    fontWeight: '500',
  },
  container5: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title2: {
    color: '#37474F',
    fontSize: 29,
    fontWeight: '900',
  },
  title3: {
    color: '#5EC401',
    fontSize: 29,
    fontWeight: '900',
  },
  title4: {
    color: '#3E3E3E',
    fontSize: 14,
    fontWeight: '400',
  },
  title5: {
    color: '#37474F',
    fontSize: 16,
    fontWeight: '700',
  },
  container6: {
    flexDirection: "row",

  },
  container7: {
    width: responsiveWidth(30),
    height: responsiveHeight(15),
  },
  img3: {
    height: '90%',
    width: '90%',
    resizeMode: 'contain',
  },
  container8: {
    flex: 1,
    paddingVertical: responsiveHeight(0.7)
  },
  title6: {
    color: '#37474F',
    fontSize: 16,
    fontWeight: '500',
  },
  title7: {
    color: 'rgba(55, 71, 79, 0.54)',
    fontSize: 14,
    fontWeight: '900',
  },
  title8: {
    color: '#F37A20',
    fontSize: 20,
    fontWeight: '900',
  },
  btn2: {
    position: "absolute",
    bottom: responsiveHeight(3),
    left: 0,
    right: 0,
    marginHorizontal: responsiveWidth(5),
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'flex-end',
    height: responsiveHeight(6),
    backgroundColor: '#5EC401',
    paddingHorizontal: responsiveWidth(4)
  },
  title9: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
    textAlign: 'center'
  },
  icon1: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  }
});

export default styles;
