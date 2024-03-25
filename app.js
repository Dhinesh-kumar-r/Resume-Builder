let names = document.getElementById("name");
let number = document.getElementById("number");
let gmail = document.getElementById("gmail");
let linkedin = document.getElementById("link");
let github = document.getElementById("git");
let ed = document.getElementById("ed");
let work = document.getElementById("we");
let cert = document.getElementById("cert");
let skill = document.getElementById("skill");
let display = document.getElementById("display");
let saves = document.getElementById("submit");

let save = () => {
  alert("Successfully Saved");
  let Data = {
    names: names.value,
    number: number.value,
    gmail: gmail.value,
    linkedin: linkedin.value,
    github: github.value,
    ed: ed.value,
    work: work.value,
    cert: cert.value,
    skill: skill.value,
  };

  let existData = localStorage.getItem("Data") ? JSON.parse(localStorage.getItem("Data")): [];
  existData.push(Data);
  localStorage.setItem("Data", JSON.stringify(existData));

};

saves.addEventListener("click", save);


let print = () => {
  let display = document.getElementById("display");
  let get = JSON.parse(localStorage.getItem("Data"));
  if (get) {
    get.forEach((index) => {
      let skillList = index.skill.split(',').map(skill => `<li>${skill.trim()}</li>`).join('');
      let certList = index.cert.split(',').map(cert => `<li>${cert.trim()}</li>`).join('');
      display.innerHTML = `
        <div id="container">
        <h3>Resume</h3>
          <div id ="details">
            <h5>${index.names}</h5>
            <h6>${index.number}</h6>
            <h6>${index.gmail}</h6>
            <h6>${index.linkedin}</h6>
            <h6>${index.github}</h6>
          </div>


          <div id="others">

            <h6>Education Details</h6>
            <p>${index.ed}</p>
            
            <h6>Experience</h6>
            <p>${index.work}</p>
           
            <h6>Skills</h6>
            <ul>${skillList}</ul>
          
            <h6>Certifications</h6>
            <p>${certList}</p>
          </div>
        </div>`;
    });
  }
}
let output = document.getElementById("print")
output.addEventListener("click",print)
