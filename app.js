// app.js
// 변환 함수 정의
const toCmFromInch = v => v * 2.54;
const toCmFromFeet = v => v * 30.48;
const toKgFromLbs = v => v * 0.45359237;

// DOM 요소 참조
const inchInput = document.getElementById('inch-input');
const feetInput = document.getElementById('feet-input');
const lbsInput  = document.getElementById('lbs-input');
const poundInput = document.getElementById('pound-input');

const inchOutput = document.getElementById('inch-output');
const feetOutput = document.getElementById('feet-output');
const lbsOutput  = document.getElementById('lbs-output');
const poundOutput = document.getElementById('pound-output');

// 이벤트 바인딩 및 자동 계산
inchInput.addEventListener('input', () => {
  const v = parseFloat(inchInput.value) || 0;
  inchOutput.textContent = toCmFromInch(v).toFixed(2) + ' cm';
});
feetInput.addEventListener('input', () => {
  const v = parseFloat(feetInput.value) || 0;
  feetOutput.textContent = toCmFromFeet(v).toFixed(2) + ' cm';
});
lbsInput.addEventListener('input', () => {
  const v = parseFloat(lbsInput.value) || 0;
  lbsOutput.textContent = toKgFromLbs(v).toFixed(2) + ' kg';
});
poundInput.addEventListener('input', () => {
  const v = parseFloat(poundInput.value) || 0;
  poundOutput.textContent = toKgFromLbs(v).toFixed(2) + ' kg';
});

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
  inchOutput.textContent = '0.00 cm';
  feetOutput.textContent = '0.00 cm';
  lbsOutput.textContent  = '0.00 kg';
  poundOutput.textContent  = '0.00 kg';
});
