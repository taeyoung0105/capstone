export const loginValid = (values) => {
  console.log('로그인 시도:', values);

  if (values.username === '1' && values.password === '1') {
    return true; // 로그인 성공
  } else {
    return false; // 로그인 실패
  }
};
