const games = require('./score.json')
const calculator = require('./main')

let game_score

try {
    // 볼링 점수 계산 테스트
    games.forEach((game) => {
        game_score = game.score
        console.log(game_score + ' | ' + calculator.calculator(game.score))
    });
} catch (error) {
    console.log(game_score + ' | ' + error.message)
}