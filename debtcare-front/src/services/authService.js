const TOKEN_MOCK = {
  token:
    "ewogInNlY3JldCI6ICI2NWFmNGE2NTRmYTU2NGZhNXM2NGY2NWE0ZjY1YTRmNjU0YXNmNjU0YTY1ZjRhNjVmNGE2NTRmNjVhczRmNmE1czRmNjVhNCIgCn0=",
};

export const login = (credentials) => {
  // TODO Delete Mock for wrong password
  return new Promise((resolve, reject) => {
    const { password } = credentials;
    if (parseInt(password) !== 1234) {
      reject({ status: 402 });
      return;
    }

    setTimeout(() => resolve(TOKEN_MOCK), 2000);
  });
  // END OF MOCK
};

export default { login };
