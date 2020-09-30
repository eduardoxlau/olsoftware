// eslint-disable-next-line import/prefer-default-export
export const getProgrammings = ({ programming }) => {
  const { data } = programming;
  return data;
};

export const getProgrammingsFilter = ({ programming }) => {
  const { filter } = programming;
  return filter;
};

export const isLoading = ({ programming }) => {
  const { loading } = programming;
  return loading;
};

export const isFilter = ({ programming }) => {
  const { isFilter } = programming;
  return isFilter;
};
