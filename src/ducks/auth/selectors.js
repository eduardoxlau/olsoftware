// eslint-disable-next-line import/prefer-default-export
export const getUser = ({ auth }) => {
  return auth;
};

export const isLoading = ({ auth }) => {
  const { loading } = auth;
  return loading;
};

export const isAutheticate = ({ auth }) => {
  const { isAuth } = auth;
  return isAuth;
};
export const isError = ({ auth }) => {
  const { error } = auth;
  return error;
};
