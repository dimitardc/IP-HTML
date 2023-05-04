

// //funkcija konstruktor
// function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
//     this.name = function() {
//         return this.firstName + " " + this.lastName;};
// }
// var person = new Person("John", "Doe", 50, "blue");

// person.nationality = "English";     //dodavanje novi raboti
// Person.getAge = function(){         
//     return this.age;
// }

// //object literal
// var mango = {
//     color: "yellow",
//     shape: "round",
//     sweetness: 8,
//     howSweetAmI: function () {
//         console.log("Hmm Hmm Good");
//     }
// }



// $(document).ready(function(){
//     $(".country").change(function(){
//         alert("You have selected the country - " + $(".country option:selected").text())
//     });
// });
// //value from select with jquery

// // <label>Select Country:</label>
// // <select class="country">
// //     <option value="usa">United States</option>
// //     <option value="india">India</option>
// //     <option value="uk">United Kingdom</option>
// // </select>


    var size  = parseInt(prompt("vnesete golemina na niza"));
    var niza  = [size];
    for(var i = 0;i<size;i++)
        niza[i] = parseInt(prompt("vnesete element na niza"));
    
    niza = sorter(niza);
    console.log(niza);

    function sorter(niza){
        for(var i = 0;i<niza.length;i++)
            for(var j = i+1;j<niza.length;i++){
                if(niza[i] == niza[j])
                    niza[i] = undefined;
            }
        niza.sort()
        for(var i = 0;i<niza.length;i++)
            if(niza[i] == undefined)
                niza[i].pop()
        return niza;
    }