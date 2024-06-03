import NetInfo from "@react-native-community/netinfo";

const  networkUtils = async () => {
    const response = await NetInfo.fetch();
    return response.isConnected;
}
export default networkUtils