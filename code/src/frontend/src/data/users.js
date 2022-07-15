// Generate Order Data
function createData(id, email, name) {
  return { id, email, name };
}

const users = [
  createData(1, "JosephLRodgers@jourrapide.com", "Joseph L. Rodgers"),
  createData(2, "CathleenRJohnson@teleworm.us", "Cathleen R. Johnson"),
  createData(3, "AnaRBailey@teleworm.us ", "Ana R. Bailey"),
  createData(4, "JordonHAlvarado@rhyta.com", "Jordon H. Alvarado"),
  createData(5, "StephenMJohnson@rhyta.com", "Stephen M. Johnson"),
];

export default users;
