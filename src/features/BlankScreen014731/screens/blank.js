import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { TextInput_3: "jhgjhgjgjgj", Switch_4: true, TextInput_5: "" }

  render = () => (
    <ImageBackground>
      <Text style={styles.Text_2}>Sample text content</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        style={styles.TextInput_3}
        value={this.state.TextInput_3}
        onChangeText={nextValue => this.setState({ TextInput_3: nextValue })}
      />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_4}
        value={this.state.Switch_4}
        onValueChange={nextChecked => this.setState({ Switch_4: nextChecked })}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_5}
        onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
      />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Text_2: { alignSelf: "flex-end" },
  TextInput_3: { width: 100, alignSelf: "flex-end" },
  View_1: {},
  Text_2: { alignSelf: "flex-end" },
  TextInput_3: { width: 100, alignSelf: "flex-end" },
  View_1: {},
  Text_2: { alignSelf: "flex-end" },
  TextInput_3: { width: 100, alignSelf: "flex-end", textAlign: "right" },
  ImageBackground_1: {},
  Text_2: { alignSelf: "flex-end" },
  TextInput_3: { width: 100, alignSelf: "flex-end", textAlign: "right" },
  Switch_4: { alignSelf: "flex-start" },
  TextInput_5: {}
})
