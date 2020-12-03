import React, { FC } from "react";
import {
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Dimensions,
} from "react-native";
import {
  Informations,
  Divider,
  UserButtons,
  CardDescription,
} from "../../components/restaurants/restaurant-details";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { RestaurantStackParamList } from "../../app";
import { Restaurant, TimeRange } from "../../models";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: height / 5,
    backgroundColor: "gray",
  },
  closeIcon: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    backgroundColor: "#2196F3",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: height / 11,
    left: width / 15,
  },
  detailsContainer: {
    top: -30,
    backgroundColor: "white",
    height: height,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  titleContainer: {
    height: height / 17,
    width: width,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: "#2196F3",
    fontWeight: "bold",
  },
});

type RestaurantDetailsProps = {
  restaurant: Restaurant;
};

const RestaurantDetails: FC<RestaurantDetailsProps> = ({
  restaurant,
}: RestaurantDetailsProps) => {
  const { goBack } = useNavigation();

  const getOpeningTime: (dataOpeningTime: TimeRange[][]) => string = (
    dataOpeningTime: TimeRange[][]
  ) => {
    const now = new Date();
    const date = now.getDay();
    if (dataOpeningTime[date].length === 0) {
      return "Fermé";
    } else if (dataOpeningTime[date].length === 1) {
      return (
        dataOpeningTime[date][0].from.toString() +
        " - " +
        dataOpeningTime[date][0].to.toString()
      );
    } else {
      return (
        dataOpeningTime[date][0].from +
        " - " +
        dataOpeningTime[date][0].to.toString() +
        " | " +
        dataOpeningTime[date][1].from +
        " - " +
        dataOpeningTime[date][1].to.toString()
      );
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <TouchableOpacity style={styles.closeIcon} onPress={() => goBack()}>
        <AntDesign name="close" size={25} color="white" />
      </TouchableOpacity>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.detailsContainer}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{restaurant.name}</Text>
        </View>
        <Informations
          address={"11 Grande Rue Nazareth 31000 Toulouse"}
          type={restaurant.description}
          hours={getOpeningTime(restaurant.opening_time)}
          note={restaurant.average_rate}
        />
        <Divider width={"80%"} color={"#DADADA"} />
        <UserButtons />
        <CardDescription card={restaurant.card} />
      </ScrollView>
    </View>
  );
};

type RestaurantDetailsScreenProps = RouteProp<
  RestaurantStackParamList,
  "RestaurantDetailsScreen"
>;

type Props = {
  route: RestaurantDetailsScreenProps;
};

const RestaurantDetailsScreen: FC<Props> = ({ route }: Props) => {
  return <RestaurantDetails restaurant={route.params.restaurant} />;
};

export default RestaurantDetailsScreen;
