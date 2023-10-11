class Rules {
    constructor(score = 0, money = 1000, wins = 0, losses = 0){
        this.score = score || 0
        this.money = money || 1000
        this.wins = wins || 0
        this.losses = losses || 0
    }
    newCard(card){
        this.score <= 11 && card == 11 ? 
            this.score++ :
            this.score+= card
        
        if(this.score > 21){
            this.deal();
        }
    }
    bet(ammount = 10){
        this.money -= ammount
    }
    deal(number){
        if(this.score >= 18 && this.score <= 21) {
            this.money += number * 2;
            this.win++;
        } else {
            this.money -= number * 2;
            this.loses++;
        }
        return this.message;
    }
    newGame(){
        this.score = 0;
    }
    restart(){
        this = new Rules();
    }
}

export default Rules