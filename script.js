
// 폼 요소 가져오기
const form = document.getElementById('deleteForm');

// 'submit' 이벤트에 함수 연결
form.addEventListener('submit', function(event) {
  // 폼 제출 기본 동작 방지
  event.preventDefault();

  // 실행할 함수 내용
  const name = document.getElementById('phone').value;
  console.log(`Name submitted: ${name}`);

  // 필요한 경우 추가 작업 수행
  alert(`휴대폰 번호: ${name} 계정 정보 삭제 요청이 완료되었습니다.`);
});