function courseChange(e) {
  let value = "";
  switch (e.value) {
    case "1":
    case "7":
      value = `
            <option disabled selected>Select..</option>
            <option>Textile Technology</option>
            <option>Man Made Textile Technology</option>
            <option>Textile Plant Engineering</option>
            <option>Textile Chemistry</option>
            <option>Fashion Technology</option>
            <option>Electronics and Telecommunication Engineering</option>
            <option>Mechanical Engineering</option>
            <option>Computer Science and Engineering</option>
            <option>
              Computer Science and Engineering (Artificial Intelligence)
            </option>
            <option>Artificial Intelligence and Data Science</option>
            <option>Civil Engineering</option>
            <option>Electrical Engineering</option>
          `;
      break;
    case "2":
      value = `
              <option disabled selected>Select..</option>
              <option>Textile Engineering</option>
              <option>Electronics and Telecommunication Engineering</option>
              <option>
                Mechanical Engineering (Product design and development)
              </option>
  
              <option>Computer Science and Engineering</option>
              <option>Defence Technology</option>`;
      break;
    case "3":
      value = `
            <option>Master of Business Administration MBA</option>
          `;
      break;
    case "4":
      value = `<option disabled selected>Select..</option>
              <option>Textile Manufacturing</option>
              <option>Textile Technology</option>
              <option>Fashion and Clothing Technology</option>`;
      break;

    case "5":
      value = `<option>PhD Programs</option>`;
      break;
    case "6":
      value = `<option disabled selected>Select..</option>
      <option>Web Design and Mobile Application Development</option>
      <option>Solar PV Panel Installation and maintenance</option>
      <option>Fashion Technology and Apparel Designing</option>
      <option>Mobile and Telephone Mechanic</option>`;
      break;
  }
  document.getElementById("stream").innerHTML = value;
}

function resetForm(e) {
  document.getElementById("form1").reset();
}
function submitForm() {
  document.getElementById("form1").submit();
}

function photoUpload(e) {
  console.log(e.target.files);
}
