class RetiredForagerBee extends ForagerBee{
  // TODO..
  constructor(age, job, color, food, eat, canFly, treasureChest, forage) {
  	super(color, food, eat, treasureChest);
  	this.age = 40;
  	this.job = 'gamble';
  	this.canFly = false;
  	this.color = 'grey';
  	this.treasureChest = [];
  }
  gamble(treasure) {
    this.treasureChest.push(treasure);
  }
  forage() {
  	return 'I am too old, let me play cards instead'
  }
};
