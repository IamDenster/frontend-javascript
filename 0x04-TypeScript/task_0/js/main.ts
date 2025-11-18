// 1. Interface definition
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "Abuja",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Lagos",
};

// 3. Array of students
const studentsList: Student[] = [student1, student2];

// 4. Render table using Vanilla JS
const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
