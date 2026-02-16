import { RoundScenario, StockId, Portfolio } from './types';

export const STOCK_LIST: { id: StockId; name: string; sector: string; logo: string }[] = [
  { id: StockId.SAMSUNG, name: '삼성전자', sector: '반도체', logo: '/assets/ticker/삼성전자.png' },
  { id: StockId.NAVER, name: '네이버', sector: 'IT/플랫폼', logo: '/assets/ticker/네이버.png' },
  { id: StockId.CELLTRION, name: '셀트리온', sector: '바이오', logo: '/assets/ticker/셀트리온.png' },
  { id: StockId.HANWHA, name: '한화에어로스페이스', sector: '방산/항공우주', logo: '/assets/ticker/한화에어로스페이스.png' },
  { id: StockId.TESLA, name: '테슬라', sector: '전기차', logo: '/assets/ticker/테슬라.png' },
  { id: StockId.NVIDIA, name: '엔비디아', sector: 'AI 반도체', logo: '/assets/ticker/엔비디아.png' },
];

export const ROUNDS: RoundScenario[] = [
  {
    id: 1,
    title: 'ROUND 1. 글로벌 금리 인상기',
    description: `속보가 이어진다.
“기준금리 추가 인상.”

물가는 쉽게 잡히지 않고,
중앙은행은 강한 긴축을 예고한다.

증시는 방향을 잡지 못한 채 흔들린다.
낙관과 불안이 하루 만에 뒤바뀐다.

지금이 조정의 구간인지, 하락의 시작인지, 판단은 PB의 몫이다.`,
    subDescription: [
      '증시는 방향을 잡지 못한 채 흔들린다.',
      '낙관과 불안이 하루 만에 뒤바뀐다.',
      '지금이 조정의 구간인지, 하락의 시작인지, 판단은 PB의 몫입니다.'
    ],
    marketCondition: {
      cashReturn: 0.04, // High interest rates favor cash
      stockReturns: {
        [StockId.SAMSUNG]: -0.05,
        [StockId.NAVER]: -0.15, // Growth stocks hit hard
        [StockId.CELLTRION]: -0.05,
        [StockId.HANWHA]: -0.02,
        [StockId.TESLA]: -0.20,
        [StockId.NVIDIA]: -0.15,
      },
    },
    keyFocus: '변동성이 큰 시기에는 현금을 든든한 방패로 챙겨두는 게 어떨까요? 40~60% 정도의 방어적인 배분이 유리할 수도 있어요.',
  },
  {
    id: 2,
    title: 'ROUND 2. AI 수요 폭발 & 기술주 랠리',
    description: `대형 IT 기업이 예상 밖의 실적을 발표한다.
AI 산업에 자금이 몰린다.

주가는 연일 신고가를 경신하고,
시장에는 낙관이 가득하다.

“이번에는 다르다”는 말이 반복된다.

지금이 거대한 기회의 시작인지, 과열의 정점인지, 판단은 PB의 몫이다.`,
    subDescription: [
      '주가는 연일 신고가를 경신하고, 시장에는 낙관이 가득하다.',
      '“이번에는 다르다”는 말이 반복된다.',
      '지금이 거대한 기회의 시작인지, 과열의 정점인지, 판단은 PB의 몫입니다.'
    ],
    marketCondition: {
      cashReturn: 0.02,
      stockReturns: {
        [StockId.SAMSUNG]: 0.08,
        [StockId.NAVER]: 0.05,
        [StockId.CELLTRION]: 0.01,
        [StockId.HANWHA]: 0.03,
        [StockId.TESLA]: 0.12,
        [StockId.NVIDIA]: 0.30, // Main beneficiary
      },
    },
    keyFocus: '시장의 뜨거운 열기에 올라타 보는 건 어떨까요? 70~90% 정도 과감하게 주식을 담아봐도 좋을 시기예요.',
  },
  {
    id: 3,
    title: 'ROUND 3. 지정학적 리스크 (전쟁 발발)',
    description: `새벽 긴급 뉴스가 전해진다.
특정 지역에서 무력 충돌이 발생했다.

원자재 가격과 환율이 급등하고,
증시는 개장과 동시에 급락한다.

공포는 빠르게 확산된다.

지금이 일시적 충격인지, 구조적 위기의 신호인지, 판단은 PB의 몫이다.`,
    subDescription: [
      '원자재 가격과 환율이 급등하고, 증시는 개장과 동시에 급락한다.',
      '공포는 빠르게 확산된다.',
      '방산 섹터에 대한 시장의 관심이 급증합니다.'
    ],
    marketCondition: {
      cashReturn: 0.01,
      stockReturns: {
        [StockId.SAMSUNG]: -0.10,
        [StockId.NAVER]: -0.12,
        [StockId.CELLTRION]: -0.05, // Defensive
        [StockId.HANWHA]: 0.25, // War beneficiary
        [StockId.TESLA]: -0.15,
        [StockId.NVIDIA]: -0.12,
      },
    },
    keyFocus: '갑작스러운 공포에는 현금으로 방어막(50~70%)을 치거나, 위기에 강한 섹터를 선점하는 전략이 필요합니다.',
  },
  {
    id: 4,
    title: 'ROUND 4. 글로벌 팬데믹',
    description: `감염병이 전 세계로 확산된다.
도시는 멈추고, 시장은 크게 흔들린다.

시간이 흐르며 각국은 전례 없는 대응책을 내놓는다.
증시는 급락과 반등을 반복한다.

지금이 기회인지, 또 한 번의 함정인지, 판단은 PB의 몫이다.`,
    subDescription: [
      '시간이 흐르며 각국은 전례 없는 대응책을 내놓는다. 증시는 급락과 반등을 반복한다.',
      '지금이 기회인지, 또 한 번의 함정인지, 판단은 PB의 몫입니다.'
    ],
    marketCondition: {
      cashReturn: 0.01,
      stockReturns: {
        [StockId.SAMSUNG]: 0.05,
        [StockId.NAVER]: 0.20, // Untact beneficiary
        [StockId.CELLTRION]: 0.25, // Bio beneficiary
        [StockId.HANWHA]: -0.10,
        [StockId.TESLA]: 0.15, // Liquidity rally
        [StockId.NVIDIA]: 0.10,
      },
    },
    keyFocus: '위기 속에서도 침착하게 60% 정도의 주식 비중을 가져가면 어떨까요? 멀리 내다보는 혜안이 필요한 때예요.',
  },
];

export const INITIAL_PORTFOLIO: Portfolio = {
  cashRatio: 30,
  stockRatio: 70,
  stockAllocation: {
    [StockId.SAMSUNG]: 20,
    [StockId.NAVER]: 15,
    [StockId.CELLTRION]: 15,
    [StockId.HANWHA]: 10,
    [StockId.TESLA]: 20,
    [StockId.NVIDIA]: 20,
  },
};