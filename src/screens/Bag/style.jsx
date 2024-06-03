import {StyleSheet} from 'react-native';
import {responsiveHeight, responsiveWidth} from '../../utils/responsiveSize';

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: responsiveWidth(5),
  },
  list1: {
    flexGrow: 1,
    paddingBottom: responsiveHeight(5),
  },
  container2: {
    flexDirection: 'row',
  },
  container3: {
    width: responsiveWidth(30),
    height: responsiveHeight(15),
  },
  img1: {
    height: '90%',
    width: '90%',
    resizeMode: 'contain',
  },
  container4: {
    flex: 1,
    paddingVertical: responsiveHeight(0.7),
  },
  container16: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: responsiveWidth(6)
  },
  title1: {
    color: '#37474F',
    fontSize: 16,
    fontWeight: '500',
  },
  title2: {
    color: 'rgba(55, 71, 79, 0.54)',
    fontSize: 14,
    fontWeight: '900',
  },
  title3: {
    color: '#F37A20',
    fontSize: 20,
    fontWeight: '900',
  },
  container5: {
    flexDirection: 'row',
  },
  container6: {
    flex: 1,
  },
  container7: {
    width: responsiveWidth(40),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
  },
  btn1: {
    width: 35,
    height: 35,
    backgroundColor: '#FF5552',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  title4: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
  },
  title5: {
    color: '#37474F',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: responsiveHeight(0.8),
  },
  btn2: {
    width: 35,
    height: 35,
    backgroundColor: '#5EC401',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  icon1: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  container8: {
    position: 'absolute',
    top: -10,
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#F37A20',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title6: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: responsiveHeight(0.8),
    textAlign: 'center',
  },
  container9: {},
  title7: {
    color: '#37474F',
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 22,
    letterSpacing: 0.6,
  },
  container10: {
    backgroundColor: '#F0F1F2',
    borderRadius: 8,
    height: responsiveHeight(10),
    marginTop: responsiveHeight(2),
  },
  container11: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title8: {
    color: '#5EC401',
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 22,
    letterSpacing: 0.6,
  },
  container12: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(3),
  },
  container13: {
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(35, 108, 217, 0.12)',
  },
  icon2: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  title9: {
    flex: 1,
    color: '#37474F',
    fontSize: 14,
    fontWeight: '400',
  },
  title10: {
    color: '#37474F',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: 0.6,
  },
  title11: {
    fontWeight: '700',
  },
  container14: {
    backgroundColor: 'rgba(54, 179, 126, 0.14)',
    borderRadius: 12,
    height: responsiveHeight(12),
    marginTop: responsiveHeight(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: responsiveWidth(5),
  },
  container15: {
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5EC401',
  },
  icon3: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  title12: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0.6,
  },
  btn3: {
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'flex-end',
    height: responsiveHeight(6),
    backgroundColor: '#5EC401',
    paddingHorizontal: responsiveWidth(4)
  },
  title13: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
    textAlign: 'center'
  },
  icon4: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  }
});

export default styles;
