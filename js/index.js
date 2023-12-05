// X버튼 찾기
let one_close = document.querySelector(".one_close");
// 모두삭제 버튼 찾기
let all_close = document.querySelector(".all_close");
// 리스트 목록 찾기
let list = document.querySelector(".form-check");

// 리스트 목록 ul 찾기
let list_cover = document.querySelector(".form_check_cover");

// X버튼 누르면 한개만 삭제
one_close.addEventListener("click",(e)=>{
  if (confirm("삭제하시겠습니까?") == 1) {
    let close = e.target.parentElement;
    close.remove();
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
