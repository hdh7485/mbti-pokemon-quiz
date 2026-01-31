# 🎮 당신의 MBTI 포켓몬은?

MBTI 성격 유형 기반 포켓몬 추천 테스트!

## 특징

- 12개 질문으로 MBTI 성격 유형 판별
- 16가지 MBTI 유형별 맞춤 포켓몬 추천
- 귀여운 포켓몬 테마 디자인
- 반응형 (모바일 최적화)
- 소셜 미디어 공유 기능
- Google AdSense 준비 완료

## MBTI × 포켓몬 매칭

| MBTI | 포켓몬 | 특징 |
|------|--------|------|
| INTJ | 뮤츠 🧬 | 전략가, 독립적, 혁신적 |
| INTP | 후딘 🧠 | 논리적, 분석가, 호기심 |
| ENTJ | 리자몽 🐉 | 리더십, 결단력, 야심 |
| ENTP | 팬텀 👻 | 창의적, 논쟁가, 재치있음 |
| INFJ | 에브이 🔮 | 통찰력, 이상주의, 신비로움 |
| INFP | 이브이 🦊 | 이상주의, 온화함, 진정성 |
| ENFJ | 가디안 💖 | 공감능력, 리더십, 이타적 |
| ENFP | 피카츄 ⚡ | 열정적, 친근함, 낙관적 |
| ISTJ | 거북왕 🛡️ | 책임감, 체계적, 신뢰성 |
| ISFJ | 럭키 🥚 | 헌신적, 배려심, 인내심 |
| ESTJ | 괴력몬 💪 | 조직력, 실용적, 책임감 |
| ESFJ | 푸린 🎤 | 사교적, 배려심, 친절함 |
| ISTP | 스라크 ⚔️ | 실용적, 독립적, 민첩함 |
| ISFP | 이상해씨 🌱 | 예술적, 온화함, 자유로움 |
| ESTP | 윈디 🔥 | 활동적, 대담함, 실용적 |
| ESFP | 꼬부기 💧 | 유쾌함, 사교적, 낙관적 |

## 테스트 구조

### 질문 분류 (12문제)
- **E/I (외향/내향)**: 3문제
- **S/N (감각/직관)**: 3문제
- **T/F (사고/감정)**: 3문제
- **J/P (판단/인식)**: 3문제

### 점수 시스템
- 각 선택지마다 해당 차원에 1-2점 부여
- 각 차원에서 더 높은 점수의 알파벳 선택
- 최종 4자리 MBTI 도출

## 로컬 실행

```bash
cd mbti-pokemon-quiz
python3 -m http.server 8000
# 브라우저: http://localhost:8000
```

## GitHub Pages 배포

```bash
# Git 초기화
git init
git add .
git commit -m "Initial commit: MBTI Pokemon Quiz"

# GitHub CLI로 배포 (추천)
gh auth login
gh repo create mbti-pokemon-quiz --public --source=. --push
gh repo edit --enable-pages --default-branch main

# 또는 수동 배포
# 1. GitHub.com에서 새 저장소 생성
# 2. git remote add origin https://github.com/USERNAME/mbti-pokemon-quiz.git
# 3. git push -u origin main
# 4. Settings → Pages → main branch 선택
```

배포 후 URL: `https://USERNAME.github.io/mbti-pokemon-quiz/`

## 수익화 전략

### Phase 1: 바이럴 확산
- **타겟**: MBTI + 포켓몬 팬덤 (매우 큼)
- **플랫폼**: 
  - Twitter/X (#MBTI #포켓몬 #성격테스트)
  - Instagram 스토리
  - TikTok (결과 공유)
  - 커뮤니티 (디시인사이드, 에펨코리아 등)

### Phase 2: 광고 수익
- Google AdSense 신청 (1000+ 방문자/일 필요)
- 광고 위치: 상단, 하단, 결과 페이지

### 예상 수익
| 월간 방문자 | 예상 월 수익 (CPM $2-5) |
|------------|------------------------|
| 10,000     | $20-50                 |
| 50,000     | $100-250               |
| 100,000    | $200-500               |
| 500,000+   | $1000+                 |

### 바이럴 가능성
- ✅ **높음**: MBTI는 한국에서 매우 인기
- ✅ **높음**: 포켓몬은 전 연령대 인기
- ✅ **높음**: 결과 공유 욕구 (SNS 확산)
- ✅ **높음**: 재테스트율 (친구들과 비교)

## 마케팅 아이디어

### 즉시 실행
1. **Twitter/X**
   ```
   당신의 MBTI에 맞는 포켓몬은? 🎮
   
   12개 질문으로 찰떡 포켓몬 추천!
   나는 피카츄가 나왔는데 너는? ⚡
   
   #MBTI #포켓몬 #성격테스트
   ```

2. **Instagram 스토리**
   - 결과 화면 스크린샷
   - "당신은?" 질문으로 참여 유도

3. **커뮤니티 포스팅**
   - 디시인사이드 (포켓몬 갤러리, MBTI 갤러리)
   - 에펨코리아 
   - 레딧 r/pokemon, r/mbti

### 장기 전략
- 월간 업데이트 (신규 포켓몬 추가)
- 다른 버전 (리그오브레전드, BTS 멤버 등)
- 영어 버전 (글로벌 확장)

## 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **배포**: GitHub Pages
- **빌드**: 불필요 (순수 HTML/CSS/JS)

## SEO 키워드

- MBTI 테스트
- 포켓몬 추천
- 성격 유형 테스트
- MBTI 포켓몬
- 무료 MBTI 테스트
- 포켓몬 성격테스트

## 업데이트 계획

- [ ] 각 포켓몬 이미지 추가
- [ ] 자세한 성격 분석
- [ ] 다른 MBTI와의 궁합
- [ ] 추천 팀 구성
- [ ] 영어/일본어 버전

## 라이센스

MIT License

## 크레딧

Pokémon © Nintendo/Creatures Inc./GAME FREAK inc.

---

**Ready to deploy!** 🚀
