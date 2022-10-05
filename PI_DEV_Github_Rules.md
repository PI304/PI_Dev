# PI_Dev

## Branching
PI DEV 팀은 Lightweight Branching Model 에 착안하여 협업 및 배포 프로세스를 만들어나갈 예정입니다.

- **Feature Branch**: 새로운 기능을 추가하는 경우, feature/[기능-세부-사항] 의 형태로 develop 브랜치에서 분기합니다. Fix 브랜치를 따로 생성하지 않는 만큼 브랜치의 이름은 작업의 내용이 잘 드러나게끔 작성하도록 합니다.
- **Develop Branch**: feature 브랜치에서 작업한 후 테스팅을 거친 뒤, develop 브랜치로 PR 을 날립니다. 빌드에 실패하거나, 테스트를 거치지 않은 경우 PR 을 닫아주세요.
- **Master Branch**: master 브랜치로 push 할 정도로 검증이 된 코드만 master 브랜치로 push 합니다. Master 브랜치로의 PR 과 merge 는 대면 정기 미팅에서 충분한 검토를 거친 뒤, 수행하도록 합니다.

## Commit Message Rules
아래와 같은 카테고리로 커밋 메시지를 남기도록 합니다.
- feat: 기능 추가인 경우
- fix: 기존 코드를 수정하는 경우
- design: UI만 수정하는 경우
- refac: 기존 코드를 (기능변경 없이) 리팩토링하는 경우
- test: 테스크 코드를 추가하는 경우
- style: 공란, 빈 줄 제거 등 단순히 코드가 보여지는 방식만 수정하는 경우
- comment: 주석만 변경/추가/제거한 경우

## PR & Merge
- merge 된 모든 feature 브랜치는 remote 에서 삭제합니다.
- PR 을 생성할 때에는 본인을 담당자로 지정합니다. 또한 업무와 관련있는 사람을 리뷰어로 등록합니다. 리뷰어는 최소 한명을 지정하도록 합니다.
- 리뷰어로 지정을 받은 사람은 12시간 안에 코멘트를 남기도록 합니다.
- 본인이 생성한 PR 에 대해서는 본인이 머지를 수행하도록 합니다.
- PR 의 단위는 light 하게 설계합니다.
- Feature 브랜치에서 Develop 브랜치로의 merge 는 **일반 merge** 로 진행합니다.
- Develop 브랜치에서 Master 브랜치로의 merge 는 **squash and merge** 로 진행하며, merge 시 title 은 feature 의 이름을 포함하도록 합니다.

## Testing
- **Github Action** 을 사용하여 PR 생성 시 빌드 및 테스트를 진행합니다. 이 테스트를 통과한 PR 만을 merge 합니다.

## Deployment
- 배포의 경우, 프로젝트의 특징에 맞게 프로젝트 초기 단계에 논의하여 정하도록 합니다.
