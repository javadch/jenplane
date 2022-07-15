// Generate Order Data
function createData(id, date, name) {
  return { id, date, name };
}

const projects = [
  createData(1, "16 Mar, 2019", "Project Breeze"),
  createData(2, "16 Mar, 2019", "Command Program"),
  createData(3, "16 Mar, 2019", "Project Point"),
  createData(4, "16 Mar, 2019", "Project Synergy"),
  createData(5, "15 Mar, 2019", "Dynamic Program"),
];

export default projects;
