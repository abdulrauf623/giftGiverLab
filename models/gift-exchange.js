const { BadRequestError } = require("../utils/erros")

class GiftExchange {



    static pairs (names){


        let output = []


        if (names.length % 2 === 1) {

            return next( new Error)

        }


        let copy = names


        while (names.length > 0){
          
          
          
          
          let index = parseInt(Math.random()* (names.length))


        


            let first = names[index]

            names = names.filter(word => word !== first)
            
            
            
            let index2 = parseInt(Math.random()* (names.length))


            let second = names[index2]


           names = names.filter(word => word !== second)


           let array = [first, second]


          output.push(array)


        }


        return output


        
    }


    static traditional(names){


        let output = []


        let words = []


        while (names.length > 0){


            let index = parseInt((Math.random() * (names.length)))


            let value = names[index]


            words.push(value)



            names = names.filter(word => word !== value)



        }


        for (let i = 0; i < words.length; i++){


            let word


            if (i != words.length - 1){


                word = words[i] + " is giving a gift to " + words[i+ 1]





            }

            else{


                word = words[i] + " is giving a gift to " + words[0]
            }



            
            
            output.push(word)






        }


        return output


       



    }


















}


module.exports = GiftExchange


