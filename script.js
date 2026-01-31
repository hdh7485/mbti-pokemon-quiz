// MBTI Questions - 각 차원당 3문제
const questions = [
    // E/I Questions
    {
        question: "주말에 친구들과 파티가 있다면?",
        options: [
            { text: "신난다! 사람들과 어울리는 게 즐거워", dimension: "E", value: 2 },
            { text: "괜찮은데 좀 피곤할 것 같아", dimension: "I", value: 1 },
            { text: "집에서 쉬고 싶은데... 피곤해", dimension: "I", value: 2 },
            { text: "적당히 가서 일찍 올래", dimension: "E", value: 1 }
        ]
    },
    {
        question: "새로운 사람을 만났을 때 당신은?",
        options: [
            { text: "먼저 말을 걸고 친해지려고 노력해", dimension: "E", value: 2 },
            { text: "상대방이 말을 걸면 대답해", dimension: "I", value: 2 },
            { text: "자연스럽게 이야기 나눠", dimension: "E", value: 1 },
            { text: "조용히 관찰하면서 천천히 알아가", dimension: "I", value: 1 }
        ]
    },
    {
        question: "에너지 충전은 어떻게?",
        options: [
            { text: "친구들과 수다 떨면서!", dimension: "E", value: 2 },
            { text: "혼자만의 시간을 가지면서", dimension: "I", value: 2 },
            { text: "적당히 사람도 만나고 혼자도 있고", dimension: "E", value: 1 },
            { text: "조용한 곳에서 명상이나 독서", dimension: "I", value: 1 }
        ]
    },
    // S/N Questions
    {
        question: "새로운 아이디어를 듣을 때:",
        options: [
            { text: "구체적으로 어떻게 하는지 궁금해", dimension: "S", value: 2 },
            { text: "큰 그림과 가능성이 보여", dimension: "N", value: 2 },
            { text: "실현 가능한지부터 따져봐", dimension: "S", value: 1 },
            { text: "미래에 어떤 영향을 줄지 상상해", dimension: "N", value: 1 }
        ]
    },
    {
        question: "여행 계획을 세울 때:",
        options: [
            { text: "시간표와 예약을 꼼꼼히 확인", dimension: "S", value: 2 },
            { text: "대략적인 방향만 정하고 즉흥적으로", dimension: "N", value: 2 },
            { text: "주요 장소만 정하고 여유있게", dimension: "S", value: 1 },
            { text: "특별한 경험을 찾아다녀", dimension: "N", value: 1 }
        ]
    },
    {
        question: "문제를 해결할 때:",
        options: [
            { text: "지금 당장 해결 가능한 방법을 찾아", dimension: "S", value: 2 },
            { text: "여러 가능성을 생각해봐", dimension: "N", value: 2 },
            { text: "경험을 바탕으로 해결해", dimension: "S", value: 1 },
            { text: "창의적인 해결책을 찾아봐", dimension: "N", value: 1 }
        ]
    },
    // T/F Questions
    {
        question: "친구가 고민 상담을 한다면:",
        options: [
            { text: "논리적으로 분석하고 해결책 제시", dimension: "T", value: 2 },
            { text: "먼저 공감하고 위로해줘", dimension: "F", value: 2 },
            { text: "객관적으로 상황을 정리해줘", dimension: "T", value: 1 },
            { text: "같이 감정을 나누고 응원해", dimension: "F", value: 1 }
        ]
    },
    {
        question: "의견 충돌이 생겼을 때:",
        options: [
            { text: "논리적으로 토론하면서 최선의 답 찾기", dimension: "T", value: 2 },
            { text: "서로의 감정을 배려하면서 합의점 찾기", dimension: "F", value: 2 },
            { text: "사실과 데이터로 설명해", dimension: "T", value: 1 },
            { text: "조화롭게 해결하려고 노력해", dimension: "F", value: 1 }
        ]
    },
    {
        question: "결정을 내릴 때 중요한 건:",
        options: [
            { text: "효율성과 합리성", dimension: "T", value: 2 },
            { text: "관계된 사람들의 감정", dimension: "F", value: 2 },
            { text: "객관적 기준과 공정성", dimension: "T", value: 1 },
            { text: "가치관과 의미", dimension: "F", value: 1 }
        ]
    },
    // J/P Questions
    {
        question: "하루 일과는?",
        options: [
            { text: "계획대로 차근차근 진행", dimension: "J", value: 2 },
            { text: "그때그때 하고 싶은 대로", dimension: "P", value: 2 },
            { text: "큰 틀만 정하고 유연하게", dimension: "P", value: 1 },
            { text: "체크리스트 만들어서 실행", dimension: "J", value: 1 }
        ]
    },
    {
        question: "프로젝트 마감이 다가온다면:",
        options: [
            { text: "미리미리 준비해서 여유있게 마무리", dimension: "J", value: 2 },
            { text: "마감 직전에 집중력 폭발!", dimension: "P", value: 2 },
            { text: "조금씩 준비하다가 마지막에 마무리", dimension: "J", value: 1 },
            { text: "아이디어가 떠오를 때 집중해서 작업", dimension: "P", value: 1 }
        ]
    },
    {
        question: "주말 계획은:",
        options: [
            { text: "미리 세워두고 그대로 실행", dimension: "J", value: 2 },
            { text: "그날 기분에 따라 즉흥적으로", dimension: "P", value: 2 },
            { text: "대략 정하되 변경 가능하게", dimension: "P", value: 1 },
            { text: "시간표 짜서 알차게 보내기", dimension: "J", value: 1 }
        ]
    }
];

// Pokemon matching for each MBTI type
const pokemonData = {
    "INTJ": {
        name: "뮤츠",
        emoji: "🧬",
        description: "전략적이고 강력한 당신! 뮤츠처럼 치밀한 계획과 강한 의지로 목표를 이뤄냅니다. 독립적이고 혁신적인 사고로 새로운 길을 개척하는 마스터마인드입니다.",
        traits: ["전략가", "독립적", "혁신적", "분석적"]
    },
    "INTP": {
        name: "후딘",
        emoji: "🧠",
        description: "논리적이고 호기심 많은 당신! 후딘처럼 지적 탐구를 즐기고 복잡한 문제를 풀어내는 능력이 뛰어납니다. 새로운 아이디어를 탐험하는 것을 좋아하는 과학자형입니다.",
        traits: ["논리적", "분석가", "호기심", "창의적"]
    },
    "ENTJ": {
        name: "리자몽",
        emoji: "🐉",
        description: "타고난 리더인 당신! 리자몽처럼 강한 카리스마와 리더십으로 팀을 이끕니다. 목표 지향적이고 결단력 있게 일을 추진하는 최고 지도자입니다.",
        traits: ["리더십", "결단력", "야심", "효율적"]
    },
    "ENTP": {
        name: "팬텀",
        emoji: "👻",
        description: "재치있고 창의적인 당신! 팬텀처럼 장난기 가득하면서도 똑똑하게 상황을 헤쳐나갑니다. 새로운 도전을 즐기는 논쟁을 좋아하는 발명가입니다.",
        traits: ["창의적", "논쟁가", "적응력", "재치있음"]
    },
    "INFJ": {
        name: "에브이",
        emoji: "🔮",
        description: "직관적이고 신비로운 당신! 에브이처럼 깊은 통찰력으로 사람들을 이해합니다. 이상주의적이고 헌신적으로 세상을 더 나은 곳으로 만들려는 예언자입니다.",
        traits: ["통찰력", "이상주의", "헌신적", "신비로움"]
    },
    "INFP": {
        name: "이브이",
        emoji: "🦊",
        description: "온화하고 이상적인 당신! 이브이처럼 순수하고 적응력이 뛰어나며 자신만의 길을 찾아갑니다. 진정성과 의미를 중요하게 여기는 중재자입니다.",
        traits: ["이상주의", "온화함", "창의적", "진정성"]
    },
    "ENFJ": {
        name: "가디안",
        emoji: "💖",
        description: "따뜻하고 카리스마 있는 당신! 가디안처럼 타인을 보호하고 이끄는 능력이 탁월합니다. 사람들을 영감을 주고 성장시키는 타고난 교육자입니다.",
        traits: ["공감능력", "리더십", "이타적", "영감적"]
    },
    "ENFP": {
        name: "피카츄",
        emoji: "⚡",
        description: "열정적이고 활발한 당신! 피카츄처럼 에너지 넘치고 사람들과 쉽게 친해집니다. 자유로운 영혼으로 모험을 즐기는 열정가입니다.",
        traits: ["열정적", "친근함", "창의적", "낙관적"]
    },
    "ISTJ": {
        name: "거북왕",
        emoji: "🛡️",
        description: "신뢰할 수 있고 책임감 있는 당신! 거북왕처럼 체계적이고 꾸준하게 임무를 완수합니다. 전통과 규칙을 중시하는 논리주의자입니다.",
        traits: ["책임감", "체계적", "신뢰성", "성실함"]
    },
    "ISFJ": {
        name: "럭키",
        emoji: "🥚",
        description: "헌신적이고 따뜻한 당신! 럭키처럼 타인을 돌보고 지원하는 것을 좋아합니다. 조용히 주변 사람들을 보살피는 수호자입니다.",
        traits: ["헌신적", "배려심", "온화함", "인내심"]
    },
    "ESTJ": {
        name: "괴력몬",
        emoji: "💪",
        description: "실용적이고 결단력 있는 당신! 괴력몬처럼 강하고 효율적으로 일을 처리합니다. 조직을 이끌고 관리하는 능력이 뛰어난 경영자입니다.",
        traits: ["조직력", "실용적", "결단력", "책임감"]
    },
    "ESFJ": {
        name: "푸린",
        emoji: "🎤",
        description: "사교적이고 배려심 많은 당신! 푸린처럼 사람들을 즐겁게 하고 화합을 만들어냅니다. 타인의 감정을 잘 읽고 지원하는 친선도모자입니다.",
        traits: ["사교적", "배려심", "협조적", "친절함"]
    },
    "ISTP": {
        name: "스라크",
        emoji: "⚔️",
        description: "실용적이고 논리적인 당신! 스라크처럼 민첩하고 문제를 빠르게 해결합니다. 도구를 다루는 것을 좋아하는 장인입니다.",
        traits: ["실용적", "독립적", "민첩함", "분석적"]
    },
    "ISFP": {
        name: "이상해씨",
        emoji: "🌱",
        description: "온화하고 예술적인 당신! 이상해씨처럼 자연을 사랑하고 평화로운 성향입니다. 현재를 즐기며 자신만의 방식으로 표현하는 모험가입니다.",
        traits: ["예술적", "온화함", "자유로움", "감각적"]
    },
    "ESTP": {
        name: "윈디",
        emoji: "🔥",
        description: "활동적이고 대담한 당신! 윈디처럼 에너지 넘치고 행동력이 뛰어납니다. 현재를 즐기며 새로운 경험을 추구하는 기업가입니다.",
        traits: ["활동적", "대담함", "사교적", "실용적"]
    },
    "ESFP": {
        name: "꼬부기",
        emoji: "💧",
        description: "즐거움을 사랑하는 당신! 꼬부기처럼 유쾌하고 사람들과 어울리는 것을 좋아합니다. 순간을 즐기며 주변을 밝게 만드는 엔터테이너입니다.",
        traits: ["유쾌함", "사교적", "즉흥적", "낙관적"]
    }
};

let currentQuestion = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

function startQuiz() {
    currentQuestion = 0;
    scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    showScreen('quiz-screen');
    loadQuestion();
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function loadQuestion() {
    const question = questions[currentQuestion];
    const progress = ((currentQuestion) / questions.length) * 100;
    
    document.getElementById('progress').style.width = progress + '%';
    document.getElementById('question-number').textContent = `질문 ${currentQuestion + 1} / ${questions.length}`;
    document.getElementById('question-text').textContent = question.question;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option.text;
        optionDiv.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionDiv);
    });
}

function selectOption(selectedIndex) {
    const question = questions[currentQuestion];
    const selected = question.options[selectedIndex];
    
    // Add to score
    scores[selected.dimension] += selected.value;
    
    // Visual feedback
    const options = document.querySelectorAll('.option');
    options[selectedIndex].classList.add('selected');
    
    // Move to next question after delay
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 500);
}

function calculateMBTI() {
    const mbti = 
        (scores.E >= scores.I ? 'E' : 'I') +
        (scores.S >= scores.N ? 'S' : 'N') +
        (scores.T >= scores.F ? 'T' : 'F') +
        (scores.J >= scores.P ? 'J' : 'P');
    return mbti;
}

function showResults() {
    showScreen('result-screen');
    
    const mbti = calculateMBTI();
    const pokemon = pokemonData[mbti];
    
    document.getElementById('mbti-badge').textContent = mbti;
    document.getElementById('pokemon-image').textContent = pokemon.emoji;
    document.getElementById('pokemon-name').textContent = pokemon.name;
    document.getElementById('pokemon-description').textContent = pokemon.description;
    
    const traitsContainer = document.getElementById('personality-traits');
    traitsContainer.innerHTML = pokemon.traits.map(trait => `
        <div class="trait">
            <div class="trait-title">✨ ${trait}</div>
        </div>
    `).join('');
}

function shareTwitter() {
    const mbti = calculateMBTI();
    const pokemon = pokemonData[mbti];
    const text = `나의 MBTI는 ${mbti}! 나와 어울리는 포켓몬은 ${pokemon.emoji} ${pokemon.name}!`;
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert('링크가 복사되었습니다!');
    });
}

function restartQuiz() {
    startQuiz();
}
