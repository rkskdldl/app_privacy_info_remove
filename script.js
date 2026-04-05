// 1. URL 파라미터 확인 (예: index.html?mode=ginovo3d)
const urlParams = new URLSearchParams(window.location.search);
const mode = urlParams.get('mode');

// 2. 요소 가져오기
const appTitle = document.getElementById('appTitle');
const phoneSection = document.getElementById('phoneSection');
const ginovo3dSection = document.getElementById('ginovo3dSection');
const deleteForm = document.getElementById('deleteForm');

// 3. 모드에 따른 UI 분기 처리
let isGinovo3d = false;

if (mode === 'ginovo3d') {
    isGinovo3d = true;
    appTitle.textContent = 'GINOVO 3D - 스마트 퍼팅 솔루션';
    phoneSection.classList.add('hidden');
    ginovo3dSection.classList.remove('hidden');
}

// 4. 폼 제출 이벤트 핸들러
deleteForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const agree = document.getElementById('agree').checked;

    // 공통 유효성 검사: 동의 여부
    if (!agree) {
        alert('개인정보 및 계정 삭제 동의에 체크해주세요.');
        return;
    }

    if (isGinovo3d) {
        // GINOVO 3D 모드 유효성 검사
        const email = document.getElementById('email').value.trim();
        const socialType = document.getElementById('socialType').value;

        if (!email) {
            alert('이메일을 입력해주세요.');
            return;
        }
        if (!socialType) {
            alert('소셜 로그인 타입을 선택해주세요.');
            return;
        }

        // 성공 메시지
        alert(`이메일: ${email} (${socialType})\n계정 정보 삭제 요청이 완료되었습니다.`);
        console.log(`Ginovo3D Deletion - Email: ${email}, Type: ${socialType}`);

    } else {
        // 기본 모드 유효성 검사
        const phone = document.getElementById('phone').value.trim();

        if (!phone) {
            alert('휴대폰 번호를 입력해주세요.');
            return;
        }

        // 성공 메시지
        alert(`휴대폰 번호: ${phone}\n계정 정보 삭제 요청이 완료되었습니다.`);
        console.log(`Default Deletion - Phone: ${phone}`);
    }

    // 실제 서버 전송 로직이 필요하다면 여기에 추가 (fetch 등)
});