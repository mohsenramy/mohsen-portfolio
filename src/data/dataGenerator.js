// import { faker } from "@faker-js/faker";
const { faker } = require("@faker-js/faker");
const fs = require("fs");

const generateJobDescription = () => {
  let sentencesCount = Math.floor(Math.random() * 8) + 2;
  return Array.from({ length: sentencesCount }, () =>
    faker.lorem.sentence(Math.floor(Math.random() * 30) + 2)
  );
};

const generateTechStack = () => {
  let techsCount = Math.floor(Math.random() * 10);
  return Array.from({ length: techsCount }, () =>
    faker.lorem.sentence(Math.floor(Math.random() * 1) + 1)
  );
};

const createJob = (years = 1) => {
  let _from = faker.date.past(years);
  return {
    id: faker.datatype.uuid(),
    companyName: faker.company.name(),
    position: faker.name.jobTitle(),
    location: faker.address.country(),
    from: _from,
    to: faker.date.past(Math.floor(Math.random() * 3), _from),
    jobDescription: generateJobDescription(),
    techStack: generateTechStack(),
  };
};
function generateWorkExperience() {
  let jobs = [];

  for (let i = 1; i <= 10; i++) {
    jobs.push(createJob(i));
  }

  return { workExperience: jobs };
}

let dataObj = generateWorkExperience();
console.log(dataObj);

fs.writeFileSync("./src/data/data.json", JSON.stringify(dataObj, null, "\t"));
