const components = [
  {
    title: "Testimonial Card",
    backgroundImage:
      "https://github.com/Mhdez221993/testimonial-card/blob/main/designs/Mobile.jpg?raw=true",
    link: "https://mhdez221993.github.io/testimonial-card/",
  },
  {
    title: "Blog Card",
    backgroundImage:
      "https://github.com/Mhdez221993/blog-card/blob/main/designs/Desktop.jpg?raw=true",
    link: "https://github.com/Mhdez221993/blog-card",
  },
  {
    title: "Profile Card",
    backgroundImage:
      "https://github.com/Mhdez221993/profile-card/blob/main/designs/Mobile.jpg?raw=true",
    link: "https://github.com/Mhdez221993/profile-card",
  },
];

const fetchComponents = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(components), 500);
  });

export default fetchComponents;
