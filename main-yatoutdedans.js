// const Utils = ChartUtils.init();


// const DATA_COUNT = 7;
// const NUMBER_CFG = {count: DATA_COUNT, rmin: 5, rmax: 15, min: 0, max: 100};

// const data = {
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: Utils.bubbles(NUMBER_CFG),
//       borderColor: Utils.CHART_COLORS.red,
//       backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
//     },
//     {
//       label: 'Dataset 2',
//       data: Utils.bubbles(NUMBER_CFG),
//       borderColor: Utils.CHART_COLORS.orange,
//       backgroundColor: Utils.transparentize(Utils.CHART_COLORS.orange, 0.5),
//     }
//   ]
// };

// var xValues = ['rouge', 'bleu', 'vert'];
// var yValues = [15, 6, 10];

// var barColors = [
//     "#b91d47",
//     "#00aba9",
//     "#2b5797"
//   ];

// var myChart = new Chart("myChart", {
//     type: "pie",
//     data: {
//         labels: xValues,
//         datasets:[{backgroundColor: barColors, data: yValues
//         }]
//     },
//     options: {
//         title: {
//           display: true,
//           text: "MMI 2022"
//         }
//       }
//   });

// const config = {
//   type: 'bubble',
//   data: data,
//   options: {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'MMI222'
//       }
//     }
//   },
// };

// const data_note = {
//   labels: ['Graphisme', 'Développement web', 'UX Design', 'Gestion de projet', 'Mathématiques', 'Services', 'Dessin'],
//   datasets: [{
//     label: 'Développer',
//     data: [10, 15, 11, 15, 19, 14, 16],
//     backgroundColor: [
//       'rgba(255, 99, 132, 0.2)',
//     //   'rgba(255, 159, 64, 0.2)',
//     //   'rgba(255, 205, 86, 0.2)',
//     //   'rgba(75, 192, 192, 0.2)',
//     //   'rgba(54, 162, 235, 0.2)',
//     //   'rgba(153, 102, 255, 0.2)',
//     //   'rgba(201, 203, 207, 0.2)'
//     ],
//     borderColor: [
//       'rgb(255, 99, 132)',
//     //   'rgb(255, 159, 64)',
//     //   'rgb(255, 205, 86)',
//     //   'rgb(75, 192, 192)',
//     //   'rgb(54, 162, 235)',
//     //   'rgb(153, 102, 255)',
//     //   'rgb(201, 203, 207)'
//     ],
//     borderWidth: 1
//   }]
// };
// const config_developper = {
//     type: 'bar',
//     data: data_note,
//     options: {
//         scales: {
//         y: {
//             beginAtZero: true
//         }
//         }
//     },
//   };

//   const data_note2 = {
//     labels: ['Graphisme', 'Développement web', 'UX Design', 'Gestion de projet', 'Mathématiques', 'Services', 'Dessin'],
//     datasets: [{
//       label: 'Développer',
//       data: [10, 15, 11, 15, 19, 14, 16],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//       //   'rgba(255, 159, 64, 0.2)',
//       //   'rgba(255, 205, 86, 0.2)',
//       //   'rgba(75, 192, 192, 0.2)',
//       //   'rgba(54, 162, 235, 0.2)',
//       //   'rgba(153, 102, 255, 0.2)',
//       //   'rgba(201, 203, 207, 0.2)'
//       ],
//       borderColor: [
//         'rgb(255, 99, 132)',
//       //   'rgb(255, 159, 64)',
//       //   'rgb(255, 205, 86)',
//       //   'rgb(75, 192, 192)',
//       //   'rgb(54, 162, 235)',
//       //   'rgb(153, 102, 255)',
//       //   'rgb(201, 203, 207)'
//       ],
//       borderWidth: 1
//     }]
//   };
//   const config_exprimer = {
//       type: 'bar',
//       data: data_note2,
//       options: {
//           scales: {
//           y: {
//               beginAtZero: true
//           }
//           }
//       },
//     };

//     const data_note3 = {
//         labels: ['Graphisme', 'Développement web', 'UX Design', 'Gestion de projet', 'Mathématiques', 'Services', 'Dessin'],
//         datasets: [{
//           label: 'Développer',
//           data: [10, 15, 11, 15, 19, 14, 16],
//           backgroundColor: [
//             // 'rgba(255, 99, 132, 0.2)',
//             'rgba(255, 159, 64, 0.2)',
//           //   'rgba(255, 205, 86, 0.2)',
//           //   'rgba(75, 192, 192, 0.2)',
//           //   'rgba(54, 162, 235, 0.2)',
//           //   'rgba(153, 102, 255, 0.2)',
//           //   'rgba(201, 203, 207, 0.2)'
//           ],
//           borderColor: [
//             // 'rgb(255, 99, 132)',
//             'rgb(255, 159, 64)',
//           //   'rgb(255, 205, 86)',
//           //   'rgb(75, 192, 192)',
//           //   'rgb(54, 162, 235)',
//           //   'rgb(153, 102, 255)',
//           //   'rgb(201, 203, 207)'
//           ],
//           borderWidth: 1
//         }]
//       };
//       const config_concevoir = {
//           type: 'bar',
//           data: data_note3,
//           options: {
//               scales: {
//               y: {
//                   beginAtZero: true
//               }
//               }
//           },
//         };


// var myChart2 = new Chart("myChart2", config);

// var myChart3 = new Chart("myChart3", config_concevoir);
// var myChart4 = new Chart("myChart4", config_developper);
// var myChart5 = new Chart("myChart5", config_exprimer);

//je récupère mon JSON
$.getJSON('https://api.thecatapi.com/v1/images/search?limit=100&breed_ids=beng&api_key=live_gzm9BYsHyKg2vlB6JwwB1kqRS5jCXhATVXbCmptjWtYkYw3Jx9yZmzd3PdUuC1KR', function (data) {
    //Je parcours mon JSON, car il est composé d'un tableau de 2 valeur -> la date, et un tableau 'states'

    const esperance = data.map((ani) => ani.breeds[0].life_span);
    console.log(esperance);

    const affection_level = data.map((ani) => ani.breeds[0].affection_level);
    console.log(`affection level : ${affection_level}`);

    // if (esperance){
    //     //Le tableau states est composé de tableau renseignant des informations sur les vols en cours, je parcours donc ce tableau pour récupérer le pays d'origine du vol
    //     Object.keys(data).forEach(function(element){

    //     })
});

const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "DEMO_API_KEY"
let storedBreeds = []

fetch(url, {
    headers: {
        'x-api-key': api_key
    }
})
    .then((response) => {
        return response.json();
    })
    .then((data) => {

        //filter to only include those with an `image` object
        data = data.filter(img => img.image?.url != null)

        storedBreeds = data;

        for (let i = 0; i < storedBreeds.length; i++) {
            const breed = storedBreeds[i];
            let option = document.createElement('option');

            //skip any breeds that don't have an image
            if (!breed.image) continue

            //use the current array index
            option.value = i;
            option.innerHTML = `${breed.name}`;
            document.getElementById('breed_selector').appendChild(option);

        }
        //show the first breed by default
        showBreedImage(0);
        //On met Ã  jour le canvas

        const test = data.map((testt) => testt.origin);
        const test2 = data.map((testt) => testt.intelligence);

        let tableau = [];

        for (element of test.flat()) {
            // const elt = test[i];
            // console.log(elt);
            if (tableau[element]) {
                tableau[element] += 1;
            }

            else {
                tableau[element] = 1;
            }
        };

        console.log(tableau);

        // let xValues = storedBreeds[0].temperament;
        // let yValues = storedBreeds[0].wikipedia_url;
        let barColors = ['blue', 'red', 'purple', 'pink', 'green', 'yellow'];
        console.log(test);
        console.log(test2);
        var myChart = new Chart("myChart", {
            type: "bar",
            data: {
                labels: test,
                datasets: [{
                    backgroundColor: barColors, data: test2
                }]
            },
            options: {
                title: {
                    display: true,
                    text: "MMI 2022"
                }
            }

        });
        myChart.update();
    })

// .catch(function (error) {
//     console.log(error);
// });


function showBreedImage(index) {
    document.getElementById("breed_image").src = storedBreeds[index].image.url;

    document.getElementById("breed_json").textContent = storedBreeds[index].temperament


    document.getElementById("wiki_link").href = storedBreeds[index].wikipedia_url
    document.getElementById("wiki_link").innerHTML = storedBreeds[index].wikipedia_url
}



const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5d9b654b56msheb76be7a599ced5p18c22ejsna950504fa243',
        'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
    }
};

fetch('https://advanced-movie-search.p.rapidapi.com/search/movie?query=spider&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    
// let xValues = storedBreeds[0].temperament;
// let yValues = storedBreeds[0].wikipedia_url;
// let barColors = ['blue', 'red'];

// var myChart = new Chart("myChart", {
//     type: "pie",
//     data: {
//         labels: xValues,
//         datasets: [{
//             backgroundColor: barColors, data: yValues
//         }]
//     },
//     options: {
//         title: {
//             display: true,
//             text: "MMI 2022"
//         }
//     }

// });
// myChart.update();


// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'b8d5d3c278msh58e2dbfa94cc971p1f8cbajsn3ba0266d23f3',
//         'X-RapidAPI-Host': 'animals-by-api-ninjas.p.rapidapi.com'
//     }
// };

// fetch('https://animals-by-api-ninjas.p.rapidapi.com/v1/animals?name=cheetah', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));