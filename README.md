# ClubInMyPocket
ClubInMyPocket

### Front Structure
- App.js (root)
- src
  - screens
    - Home.js
    - MyPage.js
    - SignIn.js
    - SignUp.js 
    - DepartmentSelection.js
    - Ad
    - Club
      - ClubInfo.js
      - ClubCalendar
      - ClubActivities.js
      - ClubRequest.js
      - ClubReview.js
    - Request
  - components
    - CalendarView.js
    - Camera.js
    - Ad
      - AdList.js
      - AdListItem.js
      - AdPostSerachHeader.js
      - AdPostWritingEditor.js
      - AdPostWritingHeader.js
    - Club
    - Request
  - contexts
  - assets/images
    - logo.png 
  - UI
    - TransparentCircleButton.js
  - utility
    - date.js

##### - build.gradle 수정
path : android/app/build.gradle - 최하단

```
project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf' ]
]

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```
코드 추가
