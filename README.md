# nodejs-mysql-STUDY
aws 서버 nodejs-mysql 환경 공부

## 2021.02.14 node.js 서버 구축
+ aws 서버 구축 및 Node JS 설치 참조(https://blog-han.tistory.com/58?category=711525)
     + 우분투 서버 업데이트 
     
        $ sudo apt-get update
     
     + Node JS 설치
     
        $ sudo apt-get install nodejs
        
     + Node Package Manager : NPM 설치
        
        $ sudo apt-get install npm
        
     + express를 설치(-g는 Global 옵션으로 어느 path에서나 express를 사용할 수 있도록 하는 옵션)
        
        $ sudo npm install -g express     
        
     + Express generator 설치
     
        $ sudo npm install -g express-generator@4
        
     + nodemon 설치 (https://edu.goorm.io/learn/lecture/557/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-node-js/lesson/382959/%ED%99%95%EC%9E%A5%EB%AA%A8%EB%93%88-nodemon
     )
        
        $ sudo npm install -g nodemon
        
     + 우분투 폴더 만드는 명령문
        
        $ sudo mkdir (만들고 싶은 폴더 이름1) && cd (만들고 싶은 폴더 이름1) && sudo mkdir (만들고 싶은 폴더 이름2) && cd (만들고 싶은 폴더 이름2)
        
     + express 기본 template을 생성 (sudo 안쓸시 permission denied 뜰수 있음)
     
        $ sudo express -e  
        
     + npm 설치
        
        $  sudo npm install
               
     + app.js　수정 
     	
        $ sudo vi app.js
	       
     + app.js　수정 내용
     
     	+ 1
	```javascript
	// port setup
	app.set('port', process.env.PORT || 9000);
	
	module.exports = app;
	
	var server = app.listen(app.get('port'), function() {  
	console.log('Express server listening on port ' + server.address().port); 
	```
	
     + package.json 파일의 node 모니터링을 위해 "start" 항목 수정	
     	
	 $ sudo vi package.json
	
     + "start" 항목 수정 내용
     	 
	 ```json
	 "script":{
  	  "start": "nodemon app.js"
	 },
	 ```

     + 서버 실행	
     	
	 $ npm start
	 
     + 서버 백그라운드 실행 (ex. [1]1234 => process ID), ($ ps -ef => 프로세스 확인),(kill [processId] =>프로세스 kill)
     	
	 $ sudo nohup npm start &
	 
     + 자동 redirection (포트를 입력하지 않고 넘길 수 있도록 하는 명령문)
     	 
	 $ sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 9000

+ 다른 참조 사이트
	+ EC2 VS code 리모트 방법1(https://blog-han.tistory.com/59?category=711525)
	+ EC2 VS code 리모트 방법2(https://boot.tistory.com/21)
	+ EC2 VS code 리모트 방법3(https://hoik92.github.io/aws/2019/06/03/AWS-EC2-Connect-Using-VSCode.html)
	+ EC2 VS code 리모트 방법4(https://teddylee777.github.io/aws/visualstudiocode-%EC%97%90%EC%84%9C-aws-remote-%EC%97%B0%EA%B2%B0)
	+ 우분투 깃허브 연동1(https://velog.io/@dysim361/%EC%9A%B0%EB%B6%84%ED%88%ACubunto-GitHub-%EC%97%B0%EB%8F%99-%EB%B0%8F-%EC%97%85%EB%A1%9C%EB%93%9C)
	+ 우분투 깃허브 연동2(https://uhou.tistory.com/99)
	+ Mysql 서버 설치(https://loy124.tistory.com/199?category=768865)
	
## 2021.02.15 github-vscode-ubuntu 연동 오류 해결
+ vscode에서 ftp-simple을 사용하여 코드 수정시 Permission Denied가 뜰때
	```
	$ chown -R root:root (디렉토리 이름)
	$ chmod -R 777 (디렉토리 이름)
	```
	
+ ubuntu에서 깃허브로 올리는 순서
	```
	$ sudo git init
	$ git status
	$ sudo git add -A : 모든 파일 추가
	$ sudo git commit
	$ sudo git commit -m "커밋 메세지 작성"
	$ sudo git push origin +master(또는 main)
	$ sudo git pull(저장소 업데이트)
	$ git log
	```

+ error: Your local changes to the following files would be overwritten by merge: 와 같은 에러 발생시
	```
	$ git stash
	$ sudo git pull(저장소 업데이트)
+ 참조 사이트
	+ git pull 에러시 (https://steemit.com/develope/@snowsprout/git-git-pull-error-your-local-changes-to-the-following-files-would-be-overwritten-by-merge)
	+ ftp-simple 수정 권한 에러시 (https://share4share.tistory.com/32) 


	
