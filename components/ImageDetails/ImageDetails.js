import React, { Component } from 'react';
import { FlatList, TouchableNativeFeedback, Image, View, Modal, TouchableOpacity, ActivityIndicator, Alert, Text, ScrollView } from 'react-native';
import GooglePlaceID from "../../models/GooglePlaceId";
import GooglePlaces from "../../models/GooglePlaces";
import WikiDescription from "../../models/WikiDescription"
import ImageDetailsStyle from './ImageDetailsStyle';



import ImageZoom from 'react-native-image-pan-zoom';
import Dimensions from 'Dimensions';


export default class ImageDetails extends Component {

    constructor(props) {
        super(props);
        this.googleViewResult = this.props.navigation.getParam("result", null)

        this.imageLabel = this.googleViewResult.responses[0].landmarkAnnotations[0].description;
        this.imageAccuracy = this.googleViewResult.responses[0].landmarkAnnotations[0].score;
        this.imageLat = this.googleViewResult.responses[0].landmarkAnnotations[0].locations[0].latLng.latitude;
        this.imageLong = this.googleViewResult.responses[0].landmarkAnnotations[0].locations[0].latLng.longitude;
        
        this.state = {
            placeResult: "",
            imageLabel: this.imageLabel,
            imageAccuracy: this.imageAccuracy,
            // placeRating: this.placeRating,
            placeReview: this.placeReview,
            // placeName: this.placeName,
            currentWikiPageID: this.wikiPageID,
            currentWikiPageDescription: this.WikiPageDescription,
        }
        
        let newGooglePlaceID = new GooglePlaceID.GooglePlaceID();
        newGooglePlaceID.fetchGooglPlaceID(`${this.imageLat},${this.imageLong}`, this.imageLabel).then((resultFromLocation) => {
            const placeID = resultFromLocation.results[0].place_id
            let newGooglePlaces = new GooglePlaces.GooglePlaces();
                newGooglePlaces.fetchGooglePlaces(placeID).then((placeInfo) => {
                this.setState({
                    placeResult: placeInfo,
                    placeReview: placeInfo.result.reviews
                }
                , () => {
                    // console.log(this.state)
                })
                const wikiName = placeInfo.result.name
                let newWikiDescription = new WikiDescription.WikiDescription()
                    newWikiDescription.fetchWikiDescription(wikiName).then((wikiDescription) => {
                        const keys = Object.keys(wikiDescription.query.pages)
                        wikiPageID = keys[0]
                        this.setState({
                            currentWikiPageID: wikiPageID,
                            })
                        this.setState({
                            currentWikiPageDescription : wikiDescription.query.pages[this.state.currentWikiPageID].extract
                            })
                        // console.log(this.state)
                })
            })
        })
    }


    render() {
        return (
            <View >
                <View>
                    <Text>{this.state.imageLabel}</Text>
                </View>
                <View>
                    <Text>{this.state.imageAccuracy}</Text>
                </View>
                <View>
                    <ScrollView>
                        <Text>{this.state.currentWikiPageDescription}</Text>
                    </ScrollView>
                </View>
            <FlatList
                data={this.state.placeReview}
                keyExtractor={(x, i) => i.toString()}
                renderItem={({item}) => 
                <View style={{flex:1}}>
                <Text>{item.rating}</Text>
                <Text>{item.author_name}</Text>
                <Text>{item.text}</Text>
                </View>
                }
                />


            </View>
            
            
        )
    }
}

