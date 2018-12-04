import React, { Component } from 'react';
import { FlatList, TouchableNativeFeedback, Image, View, Modal, ActivityIndicator, Alert, Dimensions } from 'react-native';
import RelatedImagesScreenStyle from './RelatedImagesScreenStyle';
import ImageZoom from 'react-native-image-pan-zoom';
import HomeScreenStyle from '../HomeScreen/HomeScreenStyle';


export default class RelatedImagesScreen extends Component {

    constructor(props) {
        super(props);
        this.googleViewResult = this.props.navigation.getParam("result", null)
        this.imageList = this.googleViewResult.responses[0].webDetection.visuallySimilarImages
        ? this.googleViewResult.responses[0].webDetection.visuallySimilarImages
        : this.googleViewResult.responses[0].webDetection.partialMatchingImages;

        this.landmarkAnnotations = this.googleViewResult.responses[0].landmarkAnnotations[0]
        ? this.googleViewResult.responses[0].landmarkAnnotations[0]
        : null

        console.log();

        this.state = {
            googleViewResult: this.googleViewResult,
            imageList: this.googleViewResult.responses[0].webDetection.visuallySimilarImages,
            modalVisible: false,
            currentImageURI: ''
        }
    }

    setModalVisible = (visible) => {
        this.setState({modalVisible: visible});
    }

    pressItem = async (imageURL) => {
        await this.setState({
            currentImageURI: imageURL
        });
        this.setModalVisible(true);
    }

    renderItem = ({item}) => {
        return(
                <TouchableNativeFeedback
                    onPress={()=>{
                        this.pressItem(item.url);
                    }}
                    useForeground={true}
                >
                    <View style={RelatedImagesScreenStyle.ImageWrapper}>
                        <Image style={RelatedImagesScreenStyle.ImageThumbnail}
                            source={{
                                uri: item.url
                            }}
                        />
                        
                    </View>
                </TouchableNativeFeedback>
        )
    }

    goToMapScreen = async () => {
      const { navigation } = this.props;
      
      navigation.navigate("MapScreen", {
        ...this.landmarkAnnotations.locations[0].latLng
      })
    }

    render() {
        return (
            <View style={RelatedImagesScreenStyle.RelatedImagesScreenMainView}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(false);
                    }}>
                    <View style={RelatedImagesScreenStyle.ImageModalWrapper}>
                        <View style={RelatedImagesScreenStyle.ImageModalBackground}>
                            <ActivityIndicator
                                style={RelatedImagesScreenStyle.ImageLargeSctivityIndicator}
                                size="large"
                                color="#1565C0"
                            />
                        </View>
                        <TouchableNativeFeedback
                            onPress={() => {
                                this.setModalVisible(false);
                            }}
                            useForeground={true}
                        >
                            <ImageZoom
                            cropWidth={Dimensions.get('window').width}
                            cropHeight={Dimensions.get('window').height}
                            imageWidth={Dimensions.get('window').width}
                            imageHeight={Dimensions.get('window').height}
                            onClick={() => {
                                this.setModalVisible(false);
                            }}
                            >
                                <Image style={RelatedImagesScreenStyle.ImageLarge}
                                    source={{
                                        uri: this.state.currentImageURI
                                    }}
                                />
                            </ImageZoom>
                        </TouchableNativeFeedback>
                    </View>
                </Modal>

              <TouchableNativeFeedback
                style={HomeScreenStyle.startButtonWrapper}
                onPress={this.goToMapScreen}
              >
                <View
                  style={HomeScreenStyle.startButtonWrapper}
                  elevation={3}
                >
                  <Image
                    style={HomeScreenStyle.startButton}
                    source={require('../../assets/map_marker.png')}
                    resizeMode='cover'
                  />
                </View>
              </TouchableNativeFeedback>
                <FlatList
                    contentContainerStyle={RelatedImagesScreenStyle.RelatedImages}
                    data={this.state.imageList}
                    keyExtractor={(item, index) => item.url.toString()}
                    renderItem={this.renderItem}
                    numColumns={3}
                />
            </View>
        )
    }
}