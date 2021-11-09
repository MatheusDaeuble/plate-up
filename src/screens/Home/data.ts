import { images } from 'assets/index';

export const data = [
  {
    id: 3,
    name: 'Chicken',
    healthyPercent: 0.7,
    image: images.chicken,
    description: 'There are many variations of passages of Lorem Ipsum.',
    information:
      'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence',
    nutrition: {
      kcal: 197,
      protein: 29.8,
      fat: 7.8,
      carbs: 0,
    },
  },
  {
    id: 4,
    name: 'Bread',
    healthyPercent: 0.3,
    image: images.bread,
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text.',
    information:
      "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
    nutrition: {
      kcal: 300,
      protein: 8,
      fat: 3,
      carbs: 58,
    },
  },
  {
    id: 1,
    name: 'Salad',
    image: images.salad,
    healthyPercent: 1,
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text.',
    information:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    nutrition: {
      kcal: 17,
      protein: 1,
      fat: 0,
      carbs: 4,
    },
  },
  {
    id: 2,
    name: 'Banana',
    healthyPercent: 0.8,
    image: images.banana,
    description: 'Lorem Ipsum is simply dummy text of the printing.',
    information:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    nutrition: {
      kcal: 89,
      protein: 1,
      fat: 0,
      carbs: 22,
    },
  },

  {
    id: 5,
    name: 'Apple',
    healthyPercent: 0.7,
    image: images.apple,
    description: 'The standard chunk of Lorem Ipsum used since the 1500s.',
    information:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    nutrition: {
      kcal: 52,
      protein: 0,
      fat: 0,
      carbs: 13,
    },
  },
  {
    id: 6,
    name: 'Ice Cream',
    healthyPercent: 0.2,
    image: images.iceCream,
    description:
      'Etiam varius luctus lorem sed luctus. Maecenas facilisis neque.',
    information:
      'Mauris tincidunt eget purus et pellentesque. Nullam nec luctus ipsum. Fusce nec libero non tortor tempus dictum non eu ligula. Nunc posuere lectus tellus, nec lacinia nisl consectetur eget. Proin quis quam eget elit ultrices vehicula non ut metus. Fusce ornare lectus mauris, sit amet congue urna viverra quis. Mauris sed cursus neque. Integer auctor, eros eget gravida suscipit, magna nulla iaculis odio, non gravida nisl est eu arcu.',
    nutrition: {
      kcal: 230,
      protein: 3,
      fat: 10,
      carbs: 31,
    },
  },
];
