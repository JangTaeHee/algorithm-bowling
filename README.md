볼링 점수를 계산하는 함수를 만들어주세요.

# 요구사항
* 볼링점수는 전통적인 10핀 볼링 룰에 따라 계산합니다.
    * 기본적으로 두번 던져서 넘어진 핀 수가 점수입니다.
    * 스트라이크는 다음 두번에 넘어진 핀 수를 점수에 더합니다.
    * 스페어는 다음번에 넘어진 핀 수를 점수에 더합니다.
* 입력은 넘어진 핀 수로 이루어진 문자열입니다. 10핀을 쓰러트린 경우는 A로 표시합니다.
    * 아직 종료되지 않은 게임일 수 있습니다.
    * 잘못된 입력(예. '85')인 경우 에러를 발생시킵니다.
* 출력은 각 프레임당 점수의 배열입니다.
* 함수를 테스트하기 위한 코드를 작성해주세요.
    * 테스트 실행을 하면 자동으로 모든 케이스를 확인해야 하며, 로직에 문제가 있으면 중단되는 형태여야 합니다.
    * 주어진 예 외에도 로직 검증에 필요한 테스트가 있으면 추가해주세요.

# 평가기준
* 요구사항 이해도 및 구현
* 테스트가 요구사항을 적절히 테스트하는지 여부
* 코드 구성 / 코드 가독성 (불필요한 주석은 없는 것을 선호합니다)

# 입출력 예
| 입력 | 답 |
|---|---|
| AAAAAAAAAAAA | [ 30, 60, 90, 120, 150, 180, 210, 240, 270, 300 ] |
| 82A900519A | [ 20, 39, 48, 53, 73 ] |
 
 # 실행
 ```bash
 $ node test.js
 ```