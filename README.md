# Group76: Wanna Hang Out?

## 我們在做什麼？
 我們期待透過提供簡單的活動訂閱服務，優化傳統社群媒體之使用者體驗。
 在過去，我們都有經歷在人數多的臉書社團、聊天群組常常會有洗掉與被洗掉訊息的不好經驗。這導致一個現象，就是人數大的群組活躍人數有限(少數人在自嗨)或是只用來傳達公告事項，讓只是想約個吃飯、念書或突然有興致出去玩的人只能一個個私訊詢問，造成資訊傳遞巨大的不效率性。
 解決當中效率性的問題，就像原本網頁資訊一傳就傳一整包，訊息一放到社團上就是所有人都收到；變成大家使用GraphQL Subscribe特定人或題材的內容，可以即時查看活動資訊、發起邀約的功能，讓人與人的連結多了效率、少了不必要的磨擦。
 
## Demo Link
https://youtu.be/PxESAjJTIuw

## Deploy Service
Frontend:
Backend:

## Install and Testing
```
git clone
```
### frontend
```
cd frontend
yarn install
yarn start
```
### backend
```
cd backend
yarn install
yarn start
```
## Functions   
### Login Page          
<img src="./demoImg/Login.jpg" width="300" >   

### Join club          
<img src="./demoImg/JoinClub.jpg" width="300" >   

### Club Menu           
<img src="./demoImg/ClubMenu.jpg"  width="300">   

### Event Info            
<img src="./demoImg/EventInfo.jpg"  width="300">   

### Event Chat           
<img src="./demoImg/EventChat.jpg" alt="Login Page" width="300">          

## Structure
### frontend
#### 身分認證
- 註冊 RegisterPage.js
- 登入 LoginPage.js
#### 社團
- 選擇已加入社團 ClubMenu..js
- 加入新社團 JoinClub.js
- 建立新社團 EstablishClub.js
#### 社團大廳
- 聊天室 ClubChatRoom.js, title.js, Message.js, ClubInputBar.js, 
- 社團簡介 ClubInfo.js
#### 活動大廳
- 新增活動 CreateEvent.js
- 活動聊天室與活動資訊 EventInfo.js, EventChatRoom.js, EventInputBar.js, EventTitle.js

## Modules we used
react, 
babel, 
nodemon, 
bcryptjs, 
graphql-yoga, 
mongoose, 
dotenv-defaults
Grphql





