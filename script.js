const cities = [
    {
      city: "London",
      code: "UK",
      population: 11504632,
      foodRanking: 4
    },
    {
      city: "Manchester",
      code: "UK",
      population: 4280424,
      foodRanking: 5
    },
    {
      city: "Paris",
      code: "FR",
      population: 10830024,
      foodRanking: 9
    },
    {
      city: "Nice",
      code: "FR",
      population: 4250024,
      foodRanking: 10
    },
    {
      city: "Berlin",
      code: "DE",
      population: 8250024,
      foodRanking: 8
    },
    {
      city: "Munich",
      code: "DE",
      population: 5250050,
      foodRanking: 6
    }
  ];
  
  //Uppgift 1a
  
  let allCities = document.querySelector("#allCities");
  
  cities.forEach((obj) => {
    let li = document.createElement("li");
    li.innerText = obj.city;
    allCities.append(li);
  });
  
  //Uppgift 1b
  
  cities.forEach((obj) => {
    if (obj.code === "FR") {
      let li = document.createElement("li");
      li.innerText = obj.city;
      li.style.color = "blue";
      allCities.append(li);
    } else if (obj.code === "UK") {
      let li = document.createElement("li");
      li.innerText = obj.city;
      li.style.color = "red";
      allCities.append(li);
    } else {
      let li = document.createElement("li");
      li.innerText = obj.city;
      allCities.append(li);
    }
  });
  
  //LÅT OSS FÖRENKLA OVANSTÅENDE KOD
  cities.forEach((obj) => {
    let li = document.createElement("li");
    li.innerText = obj.city;
  
    if (obj.code === "FR") {
      li.style.color = "blue";
    } else if (obj.code === "UK") {
      li.style.color = "red";
    }
  
    allCities.append(li);
  });
  
  // Uppgift 2
  
  //Alternativ 1
  
  //kortar ner metoden:
  //let foodCitites = cities.filter((obj) => obj.foodRanking);
  
  let foodCitites = cities.filter((obj) => {
    return obj.foodRanking >= 8;
  });
  
  foodCitites.sort((a, b) => {
    return b.foodRanking - a.foodRanking;
  });
  
  foodCitites.forEach((obj) => {
    let li = document.createElement("li");
    li.innerText = obj.city + " Food ranking: " + obj.foodRanking;
    document.querySelector("#citiesForFoodies").append(li);
  });
  
  console.log(foodCitites);
  
  //Alternativ 2
  
  //Varning muterar; ändrar ordinarie data.
  //Om ni vill skapa en array-kopia använd följande kod:
  // let newCities = [...cities];
  
  /*cities.sort((a, b) => {
    return b.foodRanking - a.foodRanking;
  });*/
  
  //Kortaste sättet att skriva metoden på:
  cities.sort((a, b) => b.foodRanking - a.foodRanking);
  
  cities.forEach((obj) => {
    if (obj.foodRanking >= 8) {
      let li = document.createElement("li");
      li.innerText = obj.city + " Food ranking: " + obj.foodRanking;
      document.querySelector("#citiesForFoodies").append(li);
    }
  });
  console.log(cities);
  
  //Upgift 3
  
  cities.sort((a, b) => {
    return b.population - a.population;
  });
  
  //cities.sort((a,b) => b.population - a.population);
  
  cities.forEach((obj) => {
    let li = document.createElement("li");
    li.innerText = obj.city + " - Population: " + obj.population;
    li.innerText = `${obj.city} - Population: ${obj.population}`;
    document.querySelector("#sortedByPopulation").append(li);
  });
  