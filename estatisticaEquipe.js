const team = {
  _players: [
    { firstName: "Ronaldo", lastName: "Fenomeno", age: 42 },
    { firstName: "Ronaldinho", lastName: "Gaucho", age: 40 },
    { firstName: "Rivaldo", lastName: "Craque", age: 45 },
  ],
  _games: [
    { oponentes: "Barcelona", pontosDaEquipe: 55, pontosDoAdversario: 48 },
    { oponentes: "RealMadri", pontosDaEquipe: 24, pontosDoAdversario: 30 },
    { oponentes: "Milla", pontosDaEquipe: 35, pontosDoAdversario: 41 },
  ],
  get players() {
    return (this._players);
  },
  get games() {
    return (this._games);
  },
  addPlayer(newFirstName, newLastName, NewAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: NewAge
    };
    this.players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      oponentes: newOpponent,
      pontosDaEquipe: newTeamPoints,
      pontosDoAdversario: newOpponentPoints,
    };
    this.games.push(game);
  }
};

team.addPlayer('Pernalonga', 'ruimDeBola', 76);
console.log(team.players);

team.addGame("Bayer", 55, 25);
console.log(team.games);
