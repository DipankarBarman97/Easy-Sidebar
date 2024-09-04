export const getGreeting = () => {
  const currentHour = new Date().getHours();

  if (currentHour >= 6 && currentHour < 12) {
    return "Good Morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "Good Afternoon";
  } else if (currentHour >= 18 && currentHour < 21) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
};
