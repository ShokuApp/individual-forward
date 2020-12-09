import React, { FC } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Profile } from "../../models";
import { ScrollView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 40,
    shadowOffset: { height: 3, width: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    marginBottom: 5,
    elevation: 5,
  },
  allergenContainer: {
    borderRadius: 40,
  },
  allergenImage: {
    height: 35,
    width: 35,
    borderRadius: 35 / 2,
    marginHorizontal: 5,
  },
});

type ProfileProps = {
  profile: Profile;
};

export const AllergensList: FC<ProfileProps> = ({ profile }: ProfileProps) => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.allergenContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        alwaysBounceHorizontal={false}
      >
        {profile.allergens.map((allergen, index) => {
          return (
            <Image
              key={index}
              source={{ uri: allergen.image }}
              style={styles.allergenImage}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};
