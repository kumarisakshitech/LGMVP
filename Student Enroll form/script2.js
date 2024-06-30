document.getElementById('enrollmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
   
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var gender = document.querySelectorAll('input[name="gender"]:checked');
    var genderValues = [];
    gender.forEach(function(item) {
      genderValues.push(item.value);
    });
    var skills = document.querySelectorAll('input[name="skills"]:checked');
    var skillsValues = [];
    skills.forEach(function(item) {
      skillsValues.push(item.value);
    });
    var image = document.getElementById('image').files[0];
  
  
  
  
  
    document.getElementById('outputDetails').innerHTML = `
      <p>Name: <span>${name}</span></p>
      <p>Email: <span>${email}</span></p>
      <p>Gender: <span>${genderValues.join(', ')}</span></p>
      <p>Skills: <span>${skillsValues.join(', ')}</span></p>
      <p>Image: <img src="${URL.createObjectURL(image)}" width="150" alt="Student Image"></p>
    `;
      
  });
  
  document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('enrollmentForm').reset();
    document.getElementById('outputDetails').innerHTML = '';
  });