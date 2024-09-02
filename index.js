// .................QUESTION 1/2.......................//
function showAlert() {
    alert(`Thanks for purchasing a phone from us!`);
}

//...............QUESTION 3..................................//
const students = [
    { id: 0, name: 'John Doe', age: 20, grade: 'A' },
    { id: 1, name: 'Jane Smith', age: 22, grade: 'B' },
    { id: 2, name: 'Mike Johnson', age: 21, grade: 'A' },
    { id: 3, name: 'Emily Davis', age: 23, grade: 'C' },
    { id: 4, name: 'Sarah Brown', age: 20, grade: 'B' },
  
];
function studentTable() {
    let tableBody = document.getElementById('student-table-body');tableBody.innerHTML = ''; 
    students.forEach(student => {
        let row = document.createElement('tr');
        row.setAttribute('data-id', student.id); 
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.grade}</td>
            <td><button class="delete-btn" onclick="deleteRow(${student.id})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });
}
function deleteRow(id) {
    let rowIndex = students.findIndex(student => student.id === id);
    if (rowIndex > -1) {
        students.splice(rowIndex, 1); 
        studentTable(); 
    }
}
studentTable();


// ................QUESTION 4 ..........................//
const originalImageSrc = "./assets/images (3).jfif"; 
const hoverImageSrc = "./assets/car4.jfif"; 
const outImageSrc = "./assets/car 2.jpg";
function changeImage() {
    document.getElementById('images').src = hoverImageSrc;
}

function resetImage() {
    document.getElementById('images').src = originalImageSrc;
}
function resetImage() {
    const img = document.getElementById('images');img.src = outImageSrc;
}




// ...............QUESTION 5....................//


        let counter = 0;
        function updateCounter() {
            document.getElementById('counter').textContent = counter;
        }
        function increaseCounter() {
            counter++;
            updateCounter();
        }
        function decreaseCounter() {
            counter--;
            updateCounter();
        }
        updateCounter();