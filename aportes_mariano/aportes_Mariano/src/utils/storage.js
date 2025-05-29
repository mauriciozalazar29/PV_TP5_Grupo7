const STORAGE_KEY = 'alumnos';

export function getStudents() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveStudents(students) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
}

export function addStudent(student) {
  const students = getStudents();
  students.push(student);
  saveStudents(students);
}

export function updateStudent(updatedStudent) {
  const students = getStudents().map((s) =>
    s.id === updatedStudent.id ? updatedStudent : s
  );
  saveStudents(students);
}

export function deleteStudent(id) {
  const students = getStudents().filter((s) => s.id !== id);
  saveStudents(students);
}

export function getStudentById(id) {
  return getStudents().find((s) => s.id === id);
}
