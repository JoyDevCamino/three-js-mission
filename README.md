# Three.js 미션1 🚀

## 준비하기

1. 의존성 모듈을 설치 해주세요

```
npm i
```

2. 개발 서버를 실행해서 개발을 진행해 주세요

```
npm run dev
```

## 목적

- three.js 에서 화면이 랜더링되기 위한 3가지 기본요소(scene, camera, renderer)를 이해합니다.
- geometry 를 생성하고 scene 에 배치해 봄으로 scene의 축과 좌표계를 이해합니다.
- perspective camera를 조작하면서 카메라의 속성이 화면에 어떤 영향을 미치는지 확인합니다.
- debug ui를 사용해서 쉽게 디버깅하고 속성을 변경하면서 관찰할 수 있는 방법을 익힙니다.
- three.js 에서 동적인 움직임을 어떻게 표현하는 지

## todo

- [ ] 1. axesHelper 를 넣어서 화면의 중심과 축을 표시하기
- [ ] 2. geometry 생성하기
  - [ ] 3개의 geometry 를 scene 에 추가하기
    - 3개 모두 종류가 다르게 추가해 주세요
    - 3개 모두 색이 다르게 설정해 주세요
    - geometry1 에 wireframe 이 보이게 wireframe geometry를 추가하고 group 으로 등록해주세요
- [ ] 4.  카메라를 조작하기
  - [ ] debug ui에 카메라 위치, 화각, 회전 속성을 등록하고 변경시에 화면의 관점이 변경되는 것을 관찰할 수 있도록 설정해주세요.
    - 위치, 회전의 경우 하나의 축 (x,y,z)만 정해서 실행을 하시면 됩니다.
- [ ] 5.  애니메이션 넣기
  - [ ] geometry1과 wireframe을 포함하는 group을 이동을 하는 애니메이션을 넣어주세요
  - [ ] geometry2는 회전을 하는 애니메이션을 넣어주세요
  - [ ] geometry3은 사이즈가 커졌다가 작아졌다 반복하는 애니메이션을 넣어주세요.
