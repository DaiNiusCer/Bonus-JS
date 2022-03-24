// 1 Elementų išvedimas į ekraną

fetch("http://localhost:3000/motoData")
  .then(res => res.json())
  .then(data => data)
  .then(data => {
    let output = ""

    data.forEach(moto => {
      output += `
    <div id="${moto.id}">
    <h2>${moto.title}</h2>
    <img src="${moto.image}">
    <p>${moto.paragraph}</p>
    </div>
    `
      document.querySelector("#motoIsvedimas").innerHTML = output;
    })

  })


