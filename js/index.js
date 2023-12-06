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

list_write.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (list_write.value === false) {
      alert("내용입력")
    } else {

    }
  }
})

add_btn.addEventListener("click", () => {
  alert("클릭");
})



// 클릭시 취소선 생기고 글자색 바뀜
// for (var i = 0; i < check_box.length; i++) {
//   check_box[i].addEventListener("click", (e) => {
//     if (check_box[i].checked === true) {
//       list.style.color = "gray";
//       e.target.nextElementSibling.classList.add("line_through");
//     } else {
//       list.style.color = "black";
//       e.target.nextElementSibling.classList.remove("line_through");
//     }
//   })
// }

// 클릭시 취소선 생기고 글자색 바뀜
for (var i = 0; i < check_box.length; i++) {
  check_box[i].addEventListener("click", (e) => {
    e.target.nextElementSibling.classList.toggle("line_through");
  })
}
  




// X버튼 누르면 한개만 삭제
for (var i = 0; i < one_close.length; i++) {
  one_close[i].addEventListener("click",(e)=>{
    if (confirm("삭제하시겠습니까?") == 1) {
      let close = e.target.parentElement;
      close.remove();
    }
  })
}


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
