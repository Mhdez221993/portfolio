const components = [
  {
    title: "User Testimonial Card",
    backgroundImage:
      "https://github.com/Mhdez221993/testimonial-card/blob/main/img/card.png?raw=true",
    link: "https://mhdez221993.github.io/testimonial-card/",
  },
];

const fetchComponents = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(components), 500);
  });

export default fetchComponents;
