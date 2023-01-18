const { Console } = require('console');
const fs = require('fs');
const superagent = require('superagent')


///////////////////       MODO RUSTICO
/*
let dog = ''

console.log(`direccion: ${__dirname}`)

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  if (err) return console.log(err)
  dog = `${data}`

  superagent.get(`https://dog.ceo/api/breed/${dog}/images/random`)
    .end((err, res) => {
      console.log(res.body.message)
      fs.writeFile('dog-img.txt', res.body.message, (err) => {
        console.log('trabajo hecho...')
      })
    })
})
*/

//////////////////          MODO SEMIPRO
//    ENCADEMIENTO DE PROMESAS

/*const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject("I could not find that file 😥");
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject(console.log("ERROR 🧨"))
      resolve(console.log("Random dog image saved to file!"))
    });
  })
}

readFilePro(`${__dirname}/dog.txt`)
  .then((data) => {
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    console.log(res.body);
    writeFilePro("dog-img.txt", res.body.message)
  });*/

///////////////// METODO PRO

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject("I could not find that file 😥");
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) {
        reject("Could not write file 😥");
      }

      resolve("success");
    });
  });
};


const getDocPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);

    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );

    await writeFilePro("dog-img.txt", res.body.message);

    console.log("Random dog image saved to file!");
  } catch (error) {
    console.log(error)
  }
}

getDocPic()