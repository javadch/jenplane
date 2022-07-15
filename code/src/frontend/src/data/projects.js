// Generate Order Data
function createData(id, date, name, description) {
  return { id, date, name, description };
}
//https://www.copy.ai/
const projects = [
  createData(
    1,
    "16 Mar, 2019",
    "Project Breeze",
    "Project Breeze is a National Science Foundation funded collaboration between UCLA, UCSD and UC Berkeley, working to create a seamless, user-friendly network and information structure to support the basic research enterprise of the UC system."
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Command Program",
    "A computer command language interpreter so powerful that it can easily control or launch the entire Windows operating system."
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Project Point",
    "Project Point is a small application for managing your projects, tasks, time and other information. The primary goals of the program are to minimize the clicking and maximize it's usability."
  ),
  createData(
    4,
    "16 Mar, 2019",
    "Project Synergy",
    "Project Synergy is a National Science Foundation funded collaboration between UCLA, UCSD and UC Berkeley, working to create a seamless, user-friendly network and information structure to support the basic research enterprise of the UC system."
  ),
  createData(
    5,
    "15 Mar, 2019",
    "Dynamic Program",
    "Dynamic Program is a National Science Foundation funded collaboration between UCLA, UCSD and UC Berkeley, working to create a seamless, user-friendly network and information structure to support the basic research enterprise of the UC system."
  ),
];

export const CELL_TYPES = {
  DISCIPLINE: "discipline",
  ACTIVITY: "activity",
  PHASE: "phase",
};

export default projects;
