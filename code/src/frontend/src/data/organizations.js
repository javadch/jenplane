// Generate Order Data
function createData(id, date, name) {
  return { id, date, name };
}

const organizations = [
  createData(1, "16 Mar, 2019", "Teach for America"),
  createData(2, "16 Mar, 2019", "Americorps"),
  createData(3, "16 Mar, 2019", "Doctors Without Borders"),
  createData(4, "16 Mar, 2019", "Kiva"),
  createData(5, "15 Mar, 2019", "Charity: Waterm"),
];

export default organizations;
