

let employees = JSON.parse(localStorage.getItem('employees')) || [
    { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { name: 'Jane Doe', email: 'jane@example.com', phone: '987-654-3210' }
  ];
  
  let currentEditIndex = null;
  
  // Initialize Bootstrap modal instances
  const addModalElement = document.getElementById('addEmployeeModal');
  const addModal = new bootstrap.Modal(addModalElement);
  
  const editModalElement = document.getElementById('editEmployeeModal');
  const editModal = new bootstrap.Modal(editModalElement);
  
  // Save employees array to localStorage
  function saveToLocalStorage() {
    localStorage.setItem('employees', JSON.stringify(employees));
  }
  
  // Display Employees
  function displayEmployees(filteredEmployees = employees) {
    const employeeList = document.getElementById('employee-list');
    employeeList.innerHTML = ''; // Clear existing rows
  
    filteredEmployees.forEach((employee, index) => {
      const row = document.createElement('tr');
  
      row.innerHTML = `
        <td>${employee.name}</td>
        <td>${employee.email}</td>
        <td>${employee.phone}</td>
        <td>
          <button class="btn btn-primary me-2" onclick="editEmployee(${index})">Edit</button>
          <button class="btn btn-danger" onclick="deleteEmployee(${index})">Delete</button>
        </td>
      `;
  
      employeeList.appendChild(row);
    });
  }
  
  // Edit Employee data
  function editEmployee(index) {
    currentEditIndex = index;
    const employee = employees[index];
  
    // Pre-fill the form fields
    document.getElementById('edit-name').value = employee.name;
    document.getElementById('edit-email').value = employee.email;
    document.getElementById('edit-phone').value = employee.phone;
  
    // Show the edit modal
    editModal.show();
  }
  
  // Delete Employee
  function deleteEmployee(index) {
    employees.splice(index, 1);
    saveToLocalStorage();
    displayEmployees();
  }
  
  // Add New Employee
  document.getElementById('add-employee-btn').addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
  
    if (name && email && phone) {
      employees.push({ name, email, phone });
      saveToLocalStorage();
      displayEmployees();
  
      // Clear form fields
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('phone').value = '';
  
      // Close Add Employee Modal
      addModal.hide();
    }
  });
  
  // Save Edited Employee
  document.getElementById('edit-employee-btn').addEventListener('click', () => {
    if (currentEditIndex !== null) {
      employees[currentEditIndex].name = document.getElementById('edit-name').value.trim();
      employees[currentEditIndex].email = document.getElementById('edit-email').value.trim();
      employees[currentEditIndex].phone = document.getElementById('edit-phone').value.trim();
  
      saveToLocalStorage();
      displayEmployees();
  
      // Close Edit Employee Modal
      editModal.hide();
    }
  });
  
  // Search Employees
  document.getElementById('search').addEventListener('input', function () {
    const searchValue = this.value.toLowerCase();
    const filteredEmployees = employees.filter(employee =>
      employee.name.toLowerCase().includes(searchValue) ||
      employee.email.toLowerCase().includes(searchValue) ||
      employee.phone.toLowerCase().includes(searchValue)
    );
    displayEmployees(filteredEmployees);
  });
  
  // Initial display
  displayEmployees();
  