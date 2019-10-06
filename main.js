// 볼링 점수 계산
exports.calculator = (scoreStr) => {
    let resultArray = []  // 결과 배열
    const scoreArray = setScore(scoreStr)  // 점수 배열
    let totalFrame = setFrame(scoreArray)   // 총 프레임 수
    let totalScore = 0  // 총 점수
    let currentFrame = 0   // 현재 프레임

    for(let i=0; i<scoreArray.length; i++) {
        currentFrame++;
        if(currentFrame == totalFrame) break;
        if(ifStrike(scoreArray[i])){
            totalScore += scoreArray[i] + scoreArray[i+1] + scoreArray[i+2] // 스트라이크 : 다음 두 프레임 점수 합산.
        }else if(ifSpare(scoreArray, i)){
            totalScore += 10 + scoreArray[i+2]   // 스페어 : 다음 프레임 첫번째 점수 합산.
            i++
        }else if(!ifError(scoreArray, i)){
            const error = {
                message : "점수 오류"
            }
            throw error
        }else{
            totalScore += scoreArray[i] + scoreArray[i+1]
            i++
        }
        resultArray.push(totalScore)
    }

    return resultArray
}
// 총 프레임 계산
setFrame = (scoreArray) => {
    let frame = 0;

    for(let i=0; i<scoreArray.length; i++){
        if(ifStrike(scoreArray[i])) frame++
        else{
            frame++
            i++
        }
    }

    return frame > 11 || frame == 10 ? 11 : frame
}

// 점수 Number 배열 변환
setScore = (scoreStr) => {
    let tmpArray = scoreStr.split('')

    for(let i=0; i<tmpArray.length; i++){
        if(tmpArray[i] == 'A')  tmpArray[i] = 10
        else tmpArray[i] = Number(tmpArray[i])
    }
    return tmpArray
}

// 스트라이크 검사
ifStrike = (point) => {
    return point == 10 ? true : false
}

// 스페어 검사
ifSpare = (scoreArray, index) => {
    return scoreArray[index] + scoreArray[index + 1] == 10 ? true : false
}

// 오류점수 검사
ifError = (scoreArray, index) => {
    return scoreArray[index] + scoreArray[index + 1] > 10 ? false : true
}