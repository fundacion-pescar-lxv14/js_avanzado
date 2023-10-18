class Rules {
    constructor(score = 0, money = 1000, wins = 0, loses = 0){
        this.score = score || 0
        this.money = money || 1000
        this.wins = wins || 0
        this.loses = loses || 0
    }
    newCard(card){
        this.score >= 11 && card == 11 ? 
            this.score++ :
            this.score+= card
        if(this.score >= 21){
            this.deal();
        }
    }
    bet(ammount = 10){
        this.money -= ammount
        this.ammount += ammount;
    }
    deal(){
        if(this.score >= 18 && this.score <= 21) {
            this.money += this.ammount * 2;
            this.wins++;
            this.message = 'felicitaciones, has ganado'
        } else {
            this.loses++;
            this.message = 'lo sentimos, perdiste'
        }
    }
    newGame(){
        this.score = 0;
        this.ammount = 10;
        this.money-= this.ammount;
        this.message = '';
    }
    restart(){
        this.score = 0;
        this.money = 1000;
        this.message = '';
    }
}
export const game = new Rules();