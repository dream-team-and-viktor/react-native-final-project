import React, {Component} from 'react';
import { Text, View, Image, Button} from 'react-native';
import {ImagePicker,Permissions} from 'expo';

export default class GoogleView extends Component {
	constructor() {
		super();
		this.state = {
			image: null,
			abase64: null
		}
	}
		askPermissionsAsync = async () => {
	    await Permissions.askAsync(Permissions.CAMERA);
	    await Permissions.askAsync(Permissions.CAMERA_ROLL);
  	};

	_start = async () => {
	await this.askPermissionsAsync();
    const {
        cancelled,
        uri,
        base64,
      } = await ImagePicker.launchCameraAsync({
        base64: true,
        allowsEditing: true,
      });
      if (!cancelled) {
        this.setState({
          imageUri: uri,
          label: '( loading...)',
          keywords: '( loading...)',
          abase64: base64,
        });
      }
      else {this._setnullstate(); return;}

  const body = {
  requests:[
    {
      image:{
      content: this.state.abase64,
      },
      features:[
        {
          "type":"LANDMARK_DETECTION"
          ,"maxResults":5
        },            
        {
          "type":"DOCUMENT_TEXT_DETECTION"
          ,"maxResults":5
        },
        {
          "type":"WEB_DETECTION"
          ,"maxResults":5
        }
      ],
    },
  ],
};
}
render() {
	return (
		<View>
			<Button title="Take a pictute" onPress={this._start}/>
		</View>
		);
}
}
// import { Text, View, Image, Button} from 'react-native';
// import PropTypes from 'prop-types';
// import {ImagePicker,Permissions} from 'expo';

// export default class GoogleView extends Component {
	
// 	constructor() {
// 		super();
// 		this.state = {
// 			image: null,
// 			abase64: null
// 		}
// 	}
// 	// askPermissionsAsync = async () => {
// 	//     await Permissions.askAsync(Permissions.CAMERA);
// 	//     await Permissions.askAsync(Permissions.CAMERA_ROLL);
//  //  	};

// 	_pickImage = async () => {
// 		let result = await ImagePicker.launchImageLibraryAsync({
// 			allowsEdditing: true,
// 			aspect: [5,5],
// 		});
// 		console.log(result);

// 		if (!result.cancelled) {
// 			this.setState({
// 				image: result.uri
// 			})
// 		}
// 	}

// 	_start = async () => {
// 		await this.askPermissionsAsync();
//        const {
//             cancelled,
//             uri,
//             base64,
//           } = await ImagePicker.launchCameraAsync({
//             base64: true,
//             allowsEditing: true,
//           });
//           if (!cancelled) {
//             this.setState({
//               imageUri: uri,
//               label: '( loading...)',
//               keywords: '( loading...)',
//               abase64: base64,
//             });
//           }
//           else {this._setnullstate(); return;}

//       const body = {
//       requests:[
//         {
//           image:{
//           content: this.state.abase64,
//           },
//           features:[
//             {
//               "type":"LANDMARK_DETECTION"
//               ,"maxResults":5
//             },            
//             {
//               "type":"DOCUMENT_TEXT_DETECTION"
//               ,"maxResults":5
//             },
//             {
//               "type":"WEB_DETECTION"
//               ,"maxResults":5
//             }
//           ],
//         },
//       ],
//     };
// 	}

// 	render() {
// 		let {image} = this.state;
// 		return (
// 			<View style={{
// 				flex:1,
// 				aligntItems: 'center',
// 				justifyContent: 'center',
// 			}}>
// 			<Button
// 				title="Pick an image from camera roll"
// 				onPress={this._pickImage}
// 				/>
// 			{image &&
// 				<Image source={{
// 					uri: image
// 				}} style={{
// 					width: 200,
// 					height: 200
// 				}}	/>}
// 			</View>
// 			);
// 	}
// }

// import { Text, View, Image, Button} from 'react-native';
// import PropTypes from 'prop-types';
// import {ImagePicker} from 'expo';

// export default class GoogleView extends Component {
	
// 	constructor() {
// 		super();
// 		this.state = {
// 			image: null
// 		}
// 	}

// 	_pickImage = async () => {
// 		let result = await ImagePicker.launchImageLibraryAsync({
// 			allowsEdditing: true,
// 			aspect: [5,5],
// 		});
// 		console.log(result);

// 		if (!result.cancelled) {
// 			this.setState({
// 				image: result.uri
// 			})
// 		}
// 	}

// 	render() {
// 		let {image} = this.state;
// 		return (
// 			<View style={{
// 				flex:1,
// 				aligntItems: 'center',
// 				justifyContent: 'center',
// 			}}>
// 			<Button
// 				title="Pick an image from camera roll"
// 				onPress={this._pickImage}
// 				/>
// 			{image &&
// 				<Image source={{
// 					uri: image
// 				}} style={{
// 					width: 200,
// 					height: 200
// 				}}	/>}
// 			</View>
// 			);
// 	}
// }