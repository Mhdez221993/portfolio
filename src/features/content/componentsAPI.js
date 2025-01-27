const components = [
  {
    title: "User Testimonial Card",
    backgroundImage:
      "https://github.com/Mhdez221993/testimonial-card/blob/main/img/card.png?raw=true",
  },
];

const fetchComponents = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(components), 500);
  });

export default fetchComponents;
