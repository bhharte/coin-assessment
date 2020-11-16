let mainBody = document.querySelector("body");
let coin = {
    state: 0,
    flip: function() {
        this.state = Math.floor(Math.random()*2)
        return this.state
   
    },
    toString: function() {

        if (this.state === 0){
            return 'tails'
        }else{
            return 'heads'
        }
       
    },
    toHTML: function() {
        let image = document.createElement('img');

        if (coin.toString() === 'tails'){
            image.src = "./assests/images/quarter-tail.jpg"
        }else{
            image.src = "./assests/images/quarter-head.jpg"
        } 

     
        return image;
    },
};

function display20Flips(){
    let flipDiv = document.createElement("div");
    let moreSpace = document.createElement("div")
   for( let i = 0; i < 20; i++){
       coin.flip();
    flipDiv = coin.toString() + " ";
    mainBody.append(flipDiv);
       
   }
   mainBody.append(moreSpace)
}
display20Flips();

function display20Images(){
   
    for(let j = 0; j< 20; j++){
        coin.flip();
    
    mainBody.append(coin.toHTML());
        
    }
}

display20Images();

