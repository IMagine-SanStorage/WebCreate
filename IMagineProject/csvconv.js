<input id="fileUpload" type="file"/>
<div id="content-result">&nbsp;</div>

<script>
  //변수선언
  const fileUpload = document.getElementById("fileUpload");
  const resultContent = document.getElementById('content-result');

  //파일이벤트 실행
  fileUpload.addEventListener('change',Upload)

  //업로드 함수
  function Upload() {
      console.log(fileUpload.files);

            let regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/; //csv파일 확인, 반드시 영어제목으로
            if (regex.test(fileUpload.value.toLowerCase())) {
                if (typeof (FileReader) != "undefined") {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        console.log("Raw File");
                        console.log(e.target.result);

                        let lines=e.target.result.split('\r');
                        for(let i = 0; i<lines.length; i++){
                        lines[i] = lines[i].replace(/\s/,'')//빈 공간 삭제하기
                        }
                        let result = [];
                        let headers=lines[0].split(",");

                        for(let i=1;i<lines.length;i++){
                            let obj = {};
                            let currentline=lines[i].split(",");

                            for(let j=0;j<headers.length;j++){
                                obj[headers[j]] = currentline[j];
                            }
                            result.push(obj);
                        }

                        //return result; //JavaScript 객체반환
                        console.log("After JSON Conversion");

                        console.log(JSON.stringify(result));
						resultContent.innerHTML += JSON.stringify(result)
                        return JSON.stringify(result); //JSON
                    }
                    reader.readAsText(fileUpload.files[0]);
                } else {
                    alert("This browser does not support HTML5.");
                }
            } else {
                alert("Please upload a valid CSV file.");
            }
        }
    </script>
