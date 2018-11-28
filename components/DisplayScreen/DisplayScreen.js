import React, { Component } from "react";
import { View, Text, Image, SectionList } from "react-native";

export default class DisplayScreen extends Component {
  constructor(props) {
    super(props);
    const theResponse = this.props.navigation.getParam("result", null);
    const slots = theResponse.responses[0].webDetection;
    this.state = {
      slots,
      similarImages: []
    };
  }

  componentWillMount() {
    this.getVisuallySimilarImages();
    console.log();
    console.log(this.state.similarImages);
  }

  getVisuallySimilarImages = () => {
    const { slots, similarImages } = this.state;
    const similarImgArr = {
      title: "Visually Similar Images",
      data: []
    };

    for (let i = 0; i < slots.visuallySimilarImages.length; i += 1) {
      const similarImageUri = slots.visuallySimilarImages[i].url;
      similarImgArr.data.push(similarImageUri);
    }
    similarImages.push(similarImgArr);

    this.setState({
      similarImages
    });
  };

  render() {
    const { imageMatch, similarImages } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Text> Hello </Text>
        <SectionList
          style={{ flex: 1 }}
          sections={similarImages}
          renderItem={({ item, index, section }) => (
            <Image
              style={{ flex: 1, width: 75, height: 75 }}
              source={{ uri: item }}
              key={index.toString()}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={{ fontWeight: "bold" }}>{title}</Text>
          )}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    );
  }
}
