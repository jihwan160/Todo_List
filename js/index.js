// X버튼 찾기
let one_close = document.querySelectorAll(".one_close");
// 모두삭제 버튼 찾기
let all_close = document.querySelector(".all_close");
// 리스트 목록 찾기
let list = document.querySelector(".form-check");
// 리스트 목록 ul 찾기
let list_cover = document.querySelector(".form_check_cover");
// 체크박스 찾기
let check_box = document.querySelectorAll(".form-check-input");

// 추가 버튼 찾기
let add_btn = document.querySelector(".list_add");
// 추가 리스트 찾기
let list_write = document.querySelector("#list_write")

var count = 1;

let del = document.querySelector(".btn-close");


list_write.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (list_write.value.length === 0) {
      alert("내용 입력");
    } else {
      // 각 요소인 li, div, label, del, 생성
      let li = document.createElement("li");
      let div = document.createElement("div");
      let label = document.createElement("label");
      let del = document.createElement("button");
      // 메모 적기에 값을 적으면 label에 적힌 값(list_write.value)이 들어감
      label.innerHTML = list_write.value;
      // ul 요소 뒤에 li를 추가
      list_cover.appendChild(li);
      // li 요소 뒤에 div를 추가
      li.appendChild(div);
      // div에 클래스 추가
      div.classList.add("form-check")
      // div안에 html태그를 추가
      div.innerHTML = 
      `
      <input class="form-check-input" type="checkbox" id="flexCheckDefault${count}">
      `
      // div 요소 뒤에 label를 추가
      div.appendChild(label)
      // div 요소 뒤에 del을 추가
      div.appendChild(del)
      label.classList.add("form-check-label")
      // label에 for를 추가
      label.htmlFor = `flexCheckDefault${count}`
      del.classList.add("btn-close")
      del.classList.add("one_close")
      // 메모 적기 칸에 값을 입력하고 칸을 초기화 해줌
      list_write.value = ''
      // id값을 1씩 추가함
      count++;



      // 클릭시 취소선 생기고 글자색 바뀜
      label.addEventListener("click", () => {
          label.classList.toggle("line_through")
      })

      // X버튼 누르면 한개만 삭제
      del.addEventListener("click", (e) => {
        if (confirm("삭제하시겠습니까?") == 1) {
          e.target.parentElement.parentElement.remove();
        }
      })

      
    }
  }
})





add_btn.addEventListener("click", () => {
  if (list_write.value.length === 0) {
    alert("내용 입력");
  } else {
    let li = document.createElement("li");
    let div = document.createElement("div");
    let label = document.createElement("label");
    let del = document.createElement("button")
    label.innerHTML = list_write.value;
    list_write.value=''
    list_cover.appendChild(li);
    li.appendChild(div);
    div.appendChild(label)
    div.appendChild(del)
    div.classList.add("form-check")
    label.classList.add("form-check-label")
    del.classList.add("btn-close")
    del.classList.add("one_close")
  
    // 클릭시 취소선 생기고 글자색 바뀜
    label.addEventListener("click", () => {
        label.classList.toggle("line_through")
    })

    // X버튼 누르면 한개만 삭제
    del.addEventListener("click", (e) => {
      if (confirm("삭제하시겠습니까?") == 1) {
        e.target.parentElement.parentElement.remove();
      }
    })
  }
})



// 모두 삭제
all_close.addEventListener("click", () => {
  if (confirm("모두 삭제하시겠습니까") == 1) {
    if (list_cover.innerHTML == '') {
      alert("삭제 할 목록이 없습니다");
    } else {
      list_cover.innerHTML = ''
    }
  } else {
    return 0;
  }
})
