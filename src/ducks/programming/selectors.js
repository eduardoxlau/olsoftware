// eslint-disable-next-line import/prefer-default-export
export const getProgrammings = ({ programming }) => {
  const { data } = programming;
  return data;
};

export const isLoading = ({ programming }) => {
  const { loading } = programming;
  return loading;
};
