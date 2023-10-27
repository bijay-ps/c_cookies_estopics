export const choice1 = "Cricket"; // Named export
const choice2 = "Football"; // Named export

function chooseOne(c1, c2) {
  const chance1 = Math.floor(Math.random() * c1.length);
  const chance2 = Math.floor(Math.random() * c2.length);
  if (chance1 > chance2) {
    return `You choose ${c1}`;
  } else {
    return `You choose ${c2}`;
  }
}

export default chooseOne; // Default export
