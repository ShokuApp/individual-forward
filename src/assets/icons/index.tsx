

const images: Record<string | any, any> = {
  tabBar: {
    'chefHat': {
      onSelected: require("./chef-hat_selected.png"),
      notSelected: require("./chef-hat.png")
    },
    'recipeBook': {
      onSelected: require("./recipe-book_selected.png"),
      notSelected: require("./recipe-book.png")
    },
    'profil': {
      onSelected: require("./user_selected.png"),
      notSelected: require("./user.png")
    }
  }
};

export default images