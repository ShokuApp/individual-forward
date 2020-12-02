import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    height: "32,75%",
    width: "83,73%",
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 3, width: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 10,
  },
  viewContainer: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },
  viewCard: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: "50%",
  },
  iconText: {
    marginRight: 5,
    marginLeft: 5,
    marginTop: 5,
  },
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewPrice: {
    marginRight: 10,
    marginLeft: 5,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  paragraph: {
    marginTop: 5,
    paddingLeft: 5,
    marginBottom: 0,
    fontSize: 10,
  },
  textRight: {
    marginTop: 15,
    paddingLeft: 5,
    fontSize: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textLeft: {
    paddingTop: 10,
    paddingRight: 2,
    fontSize: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textMark: {
    marginTop: 5,
    fontSize: 10,
    color: "#2196F3",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    paddingTop: 5,
    paddingLeft: 5,
    fontSize: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export function RestaurantPreview() {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => console.log("Attach display restaurant details method")}
    >
      <View style={styles.viewContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/restaurant-preview.jpg")}
        />
        <View style={styles.viewCard}>
          <View style={styles.view}>
            <Text style={styles.title}>Restaurant Les 2 Font La Paire</Text>
            <View style={styles.view}>
              <Text style={styles.textMark}>4,6</Text>
              <Icon
                name="star"
                type="font-awesome"
                color="#2196F3"
                size={20}
                style={styles.iconText}
              />
            </View>
          </View>
          <View style={styles.view}>
            <View style={styles.view}>
              <Icon
                name="map-marker"
                type="font-awesome"
                color="#000000"
                size={25}
                style={styles.iconText}
              />
              <View style={styles.paragraph}>
                <Text style={styles.paragraph}>11 Grande Rue Nazareth</Text>
                <Text style={styles.paragraph}>31000 Toulouse</Text>
              </View>
            </View>
            <View style={styles.view}>
              <Text style={styles.textLeft}>Burger / Americain</Text>
              <Icon
                name="local-dining"
                type="material-icon"
                color="#000000"
                size={20}
                style={styles.iconText}
              />
            </View>
          </View>
          <View style={styles.view}>
            <View style={styles.view}>
              <Icon
                name="clock"
                type="feather"
                color="#000000"
                size={20}
                style={styles.iconText}
              />
              <Text style={styles.textRight}>Ouvert: 11h-14h</Text>
            </View>
            <View style={styles.viewPrice}>
              <Icon
                name="euro-symbol"
                type="material-icons"
                color="#000000"
                size={20}
              />
              <Icon
                name="euro-symbol"
                type="material-icons"
                color="#000000"
                size={20}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
