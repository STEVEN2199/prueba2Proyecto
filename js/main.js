(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
    });

//////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Worldwide Sales Chart
    //var ctx1 = $("#worldwide-sales").get(0).getContext("2d");
    var ctx2 

    const cargarDatos2 = async () => {
        try{
          const url1 = "https://pokeapi.co/api/v2/pokemon/pikachu";
          const url2 = "https://pokeapi.co/api/v2/pokemon/charizard";
          const url3 = "https://pokeapi.co/api/v2/pokemon/ditto";
    
          const resultados = await Promise.all([
            fetch(url1),
            fetch(url2),
            fetch(url3),
    
    
          ]);
          const promesasDeDatos = await resultados.map(result => result.json());
          const datosFinales = Promise.all(promesasDeDatos);
          return datosFinales
        } catch(err) {
          console.log(err)
        }
      };
      
      const datos2 = cargarDatos2().then(datos2 => {
        //POKEMON 1//
        var variablesP1 = datos2[0]
        console.log(variablesP1)
        var name_P1= variablesP1.forms[0].name
        var arr_hab_P1= new Array();
        for(let i=0; i<variablesP1.stats.length; i++){
            arr_hab_P1.push(variablesP1.stats[i].base_stat)
        }
        console.log(arr_hab_P1)

        //POKEMON 2//
        var variablesP2 = datos2[1]
        console.log(variablesP2)
        var name_P2= variablesP2.forms[0].name
        var arr_hab_P2= new Array();
        for(let j=0; j<variablesP2.stats.length; j++){
            arr_hab_P2.push(variablesP2.stats[j].base_stat)
        }
        console.log(arr_hab_P2)
        //POKEMON 3//
        var variablesP3 = datos2[2]
        console.log(variablesP3)
        var name_P3= variablesP3.forms[0].name
        var arr_hab_P3= new Array();
        for(let k=0; k<variablesP3.stats.length; k++){
            arr_hab_P3.push(variablesP3.stats[k].base_stat)
        }
        console.log(arr_hab_P3)

        //variables de habilidades//
        //data.stats[0].stat.name
        const habilidadHp = variablesP1.stats[0].stat.name
        console.log(habilidadHp)
        const habilidadAttack = variablesP1.stats[1].stat.name
        console.log(habilidadAttack)
        const habilidadDefense = variablesP1.stats[2].stat.name
        console.log(habilidadDefense) 
        const habilidadSpecialAttack = variablesP1.stats[3].stat.name
        console.log(habilidadSpecialAttack) 
        const habilidadSpecialDefense = variablesP1.stats[4].stat.name
        console.log(habilidadSpecialDefense)
        const habilidadSpeed = variablesP1.stats[5].stat.name
        console.log(habilidadSpeed)


        ctx2= $("#worldwide-sales").get(0).getContext("2d");
        var myChart2 = new Chart(ctx2, 
            {
            
            type: "bar",
            data: {
                labels: [habilidadHp, habilidadAttack, habilidadDefense, habilidadSpecialAttack, habilidadSpecialDefense, habilidadSpeed],
                datasets: [{
                        label: name_P1,
                        data: [arr_hab_P1[0], arr_hab_P1[1], arr_hab_P1[2], arr_hab_P1[3], arr_hab_P1[4], arr_hab_P1[5]],
                        backgroundColor: "rgba(0, 156, 255, .7)"
                    },
                    {
                        label: name_P2,
                        data: [arr_hab_P2[0], arr_hab_P2[1], arr_hab_P2[2], arr_hab_P2[3], arr_hab_P2[4], arr_hab_P2[5]],
                        backgroundColor: "rgba(0, 156, 255, .5)"
                    },
                    {
                        label: name_P3,
                        data: [arr_hab_P3[0], arr_hab_P3[1], arr_hab_P3[2], arr_hab_P3[3], arr_hab_P3[4], arr_hab_P3[5]],
                        backgroundColor: "rgba(0, 156, 255, .3)"
                    }
                ]
                },
            options: {
                responsive: true
            }
            
        });
    });


////////////////////////////////////////////////////////////////////////////////////////////////////////////     
        /*
    var myChart1 = new Chart(ctx1, 
        {
        
        type: "bar",
        data: {
            labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
            datasets: [{
                    label: "USA",
                    data: [experiencia2, 30, 55, 65, 60, 80, 95],
                    backgroundColor: "rgba(0, 156, 255, .7)"
                },
                {
                    label: "UK",
                    data: [8, 35, 40, 60, 70, experiencia1, 75],
                    backgroundColor: "rgba(0, 156, 255, .5)"
                },
                {
                    label: "AU",
                    data: [12, 25, 45, 55, 65, 70, 60],
                    backgroundColor: "rgba(0, 156, 255, .3)"
                }
            ]
            },
        options: {
            responsive: true
        }
        
    });
    */
//////////////////////////////////////////////////////////////////////////////////
var ctx5
const cargarDatos = async () => {
    try{
      const url1 = "https://pokeapi.co/api/v2/pokemon/pikachu";
      const url2 = "https://pokeapi.co/api/v2/pokemon/charizard";
      const url3 = "https://pokeapi.co/api/v2/pokemon/ditto";
      const url4 = "https://pokeapi.co/api/v2/pokemon/treecko";
      const url5 = "https://pokeapi.co/api/v2/pokemon/charmeleon";
      const url6 = "https://pokeapi.co/api/v2/pokemon/squirtle";

      const resultados = await Promise.all([
        fetch(url1),
        fetch(url2),
        fetch(url3),
        fetch(url4),
        fetch(url5),
        fetch(url6),


      ]);
      const promesasDeDatos = await resultados.map(result => result.json());
      const datosFinales = Promise.all(promesasDeDatos);
      return datosFinales
    } catch(err) {
      console.log(err)
    }
  };
  
  const datos = cargarDatos().then(datos => {

///////////////////////////////////////////////////////////////
    var picachu = datos[0].abilities[0]
    var picachuName = datos[0].forms[0].name
    console.log(picachuName)

    var arr_p1= new Array();
    for(let p1=0; p1 <6; p1++) {
        arr_p1.push(datos[0].stats[p1].base_stat)
    }
    console.log(arr_p1)

    var sumaP1 = 0
    for(let s1=0; s1<arr_p1.length; s1++) {
        sumaP1 += arr_p1[s1]
    }
    var promedioP1 = sumaP1 / arr_p1.length
    console.log(promedioP1)
////////////////////////////////////////////////////////////////
    var charizard = datos[1].abilities[0]
    var charizardName = datos[1].forms[0].name
    console.log(charizardName)

    var arr_p2= new Array();
    for(let p2=0; p2 <6; p2++) {
        arr_p2.push(datos[1].stats[p2].base_stat)
    }
    console.log(arr_p2)

    var sumaP2 = 0
    for(let s2=0; s2<arr_p2.length; s2++) {
        sumaP2 += arr_p2[s2]
    }
    var promedioP2 = sumaP2 / arr_p2.length
    console.log(promedioP2)
////////////////////////////////////////////////////////////////
    var ditto = datos[2].abilities[0]
    var dittodName = datos[2].forms[0].name
    console.log(dittodName)

    var arr_p3= new Array();
    for(let p3=0; p3 <6; p3++) {
        arr_p3.push(datos[2].stats[p3].base_stat)
    }
    console.log(arr_p3)

    var sumaP3 = 0
    for(let s3=0; s3<arr_p3.length; s3++) {
        sumaP3 += arr_p3[s3]
    }
    var promedioP3 = sumaP3 / arr_p3.length
    console.log(promedioP3)
/////////////////////////////////////////////////////////////////
    var treecko = datos[3].abilities[0]
    var treeckoName = datos[3].forms[0].name
    console.log(treeckoName)

    var arr_p4= new Array();
    for(let p4=0; p4 <6; p4++) {
        arr_p4.push(datos[3].stats[p4].base_stat)
    }
    console.log(arr_p4)

    var sumaP4 = 0
    for(let s4=0; s4<arr_p4.length; s4++) {
        sumaP4 += arr_p4[s4]
    }
    var promedioP4 = sumaP4 / arr_p4.length
    console.log(promedioP4)
/////////////////////////////////////////////////////////////////
    var charmeleon = datos[4].abilities[0]
    var charmeleonName = datos[4].forms[0].name
    console.log(charmeleonName)

    var arr_p5= new Array();
    for(let p5=0; p5 <6; p5++) {
        arr_p5.push(datos[4].stats[p5].base_stat)
    }
    console.log(arr_p5)

    var sumaP5= 0
    for(let s5=0; s5<arr_p5.length; s5++) {
        sumaP5 += arr_p5[s5]
    }
    var promedioP5 = sumaP5 / arr_p5.length
    console.log(promedioP5)
/////////////////////////////////////////////////////////////////
    var squirtle = datos[5].abilities[0]
    var squirtleName = datos[5].forms[0].name
    console.log(squirtleName)

    var arr_p6= new Array();
    for(let p6=0; p6 <6; p6++) {
        arr_p6.push(datos[5].stats[p6].base_stat)
    }
    console.log(arr_p6)

    var sumaP6 = 0
    for(let s6=0; s6<arr_p6.length; s6++) {
        sumaP6 += arr_p6[s6]
    }
    var promedioP6 = sumaP6 / arr_p6.length
    console.log(promedioP6)
/////////////////////////////////////////////////////////////////
    ctx5 = $("#pie-chart").get(0).getContext("2d");
    var myChart5 = new Chart(ctx5, {
        type: "pie",
        data: {
            labels: [picachuName, charizardName, dittodName, treeckoName, charmeleonName,squirtleName],
            datasets: [{
                backgroundColor: [
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .6)",
                    "rgba(0, 156, 255, .5)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .3)"
                ],
                data: [promedioP1, promedioP2, promedioP3, promedioP4, promedioP5,promedioP6]
            }]
        },
        options: {
            responsive: true
        }
    });

  }
  );

//////////////////////////////////////////////////////////////////////////////////



    // Single Bar Chart
    var ctx4
    fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur').then(response => response.json()).then(data3 => {
        const nombrePokeFav = data3.forms[0].name
        console.log(nombrePokeFav)
        // Habilidades Pokemon Favorito // 
        const habilidadHp = data3.stats[0].stat.name
        console.log(habilidadHp)
        const habilidadAttack = data3.stats[1].stat.name
        console.log(habilidadAttack)
        const habilidadDefense = data3.stats[2].stat.name
        console.log(habilidadDefense) 
        const habilidadSpecialAttack = data3.stats[3].stat.name
        console.log(habilidadSpecialAttack) 
        const habilidadSpecialDefense = data3.stats[4].stat.name
        console.log(habilidadSpecialDefense)
        const habilidadSpeed = data3.stats[5].stat.name
        console.log(habilidadSpeed)
        // Habilidades Pokemon Favorito // 

        var arr_poke_fav = new Array();
        for (let p1 = 0; p1 < 6; p1++) {
            arr_poke_fav.push(data3.stats[p1].base_stat)
        }
        console.log(arr_poke_fav)

    
    ctx4 = $("#bar-chart").get(0).getContext("2d");
    var myChart4 = new Chart(ctx4, {
        type: "bar",
        data: {
            labels: [habilidadHp, habilidadAttack, habilidadDefense, habilidadSpecialAttack, habilidadSpeed],
            datasets: [{
                label: nombrePokeFav,
                backgroundColor: [
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .6)",
                    "rgba(0, 156, 255, .5)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .3)"
                ],
                data: [arr_poke_fav[0], arr_poke_fav[1], arr_poke_fav[2], arr_poke_fav[3], arr_poke_fav[4]]
            }]
        },
        options: {
            responsive: true
        }
    });
    });


    // Pie Chart
    /*
    var ctx5 = $("#pie-chart").get(0).getContext("2d");
    var myChart5 = new Chart(ctx5, {
        type: "pie",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [{
                backgroundColor: [
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .6)",
                    "rgba(0, 156, 255, .5)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .3)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });
*/
/////////////////////////////////////////////////////////////////////////////////////////
var ctx6
var arregloNombres= ['a-b-c', 'd-e-f', 'g-h-i', 'j-k-l', 'm-n-ñ', 'o-p-q','r-s-t','u-v-w', 'x-y-z']
var arr_letra1= new Array();
var arr_letra2= new Array();
var arr_letra3= new Array();

    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then(response => response.json()).then(data => {
        var arreglo_letras= arregloNombres[0].split('-')
        for(let k=0; k<data.results.length; k++){
            const nameElement = data.results[k].name
            //console.log(ingreso)
            if (nameElement[0] == arreglo_letras[0])
                arr_letra1.push(nameElement)
            if (nameElement[0] == arreglo_letras[1])
                arr_letra2.push(nameElement)
            if (nameElement[0] == arreglo_letras[2])
                arr_letra3.push(nameElement)
        }
        var val_arr1=arr_letra1.length
        var val_arr2=arr_letra2.length
        var val_arr3=arr_letra3.length


        

    ctx6 = $("#doughnut-chart").get(0).getContext("2d");
    var myChart6 = new Chart(ctx6, {
        type: "doughnut",
        data: {
            labels: ["Total de Pokemons con letra "+ arreglo_letras[0], "Total de Pokemons con letra "+ arreglo_letras[1], "Total de Pokemons con letra "+ arreglo_letras[2]],
            datasets: [{
                backgroundColor: [
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .6)",
                    "rgba(0, 156, 255, .5)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .3)"
                ],
                data: [val_arr1, val_arr2, val_arr3]
            }]
        },
        options: {
            responsive: true
        }
    });
    })
/////////////////////////////////////////////////////////////////////////////////////////

    // Doughnut Chart
    /*
    ctx6 = $("#doughnut-chart").get(0).getContext("2d");
    var myChart6 = new Chart(ctx6, {
        type: "doughnut",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [{
                backgroundColor: [
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .6)",
                    "rgba(0, 156, 255, .5)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .3)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });*/
//////////////////////////////////////////////////////////////////////////////////////////
    
})(jQuery);

