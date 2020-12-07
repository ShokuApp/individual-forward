import { Alert } from "react-native";

export const alertAllergen: () => void = () => {
  Alert.alert(
    "Impossible de sélectionner un allergène",
    'Veuillez décocher la case "Pour moi"',
    [
      {
        text: "Ok",
        onPress: () => null,
        style: "cancel",
      },
    ],
    { cancelable: false }
  );
};

export const alertForMe: (setSelected: (check: boolean) => void) => void = (
  setSelected
) => {
  Alert.alert(
    "Êtes-vous sûr ?",
    "Les restaurants proposés pourraient ne plus être sûrs pour vous",
    [
      {
        text: "Oui",
        onPress: () => setSelected(false),
      },
      {
        text: "Annuler",
        onPress: () => null,
        style: "cancel",
      },
    ],
    { cancelable: false }
  );
};
