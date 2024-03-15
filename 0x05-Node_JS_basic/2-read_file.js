const fs = require('fs');

function findNumberOfStudents(file) {
  const rows = file.split('\n');
  const students = [];
  for (let i = 1; i < rows.length; i += 1) {
    if (rows[i] !== '') {
      students.push(rows[i]);
    }
  }
  console.log(`Number of students: ${students.length}`);
  return students;
}

function groupStudentsPerField(students) {
  const fields = {};
  let name; let about;
  students.forEach((student) => {
    [name, ...about] = student.split(',');
    const field = about[about.length - 1];
    if (!(field in fields)) {
      fields[field] = [];
    }
    fields[field].push(name);
  });
  Object.keys(fields).forEach((k) => {
    const log = `${k}: ${fields[k].length}. List: ${fields[k].join(', ')}`;
    console.log(`Number of students in ${log}`);
  });
}

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  const db = fs.readFileSync(path, { encoding: 'utf-8' });
  const students = findNumberOfStudents(db);
  groupStudentsPerField(students);
}

module.exports = countStudents;
