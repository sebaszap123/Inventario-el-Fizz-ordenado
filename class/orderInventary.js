export default class Order{
    static doOrder(inventary){
        let ascending = false;
        let position = 0;
        while(ascending === false){
            for(let i=0; i<inventary.length; i++){
                if(inventary[position] < inventary[i] ){
                    let move = inventary[position]
                    inventary[position] = inventary[i];
                    inventary[i] = move;
                }
            }
            position++;
            if(position > inventary.length){
                ascending = true
            }
        }
        return inventary
    }
}