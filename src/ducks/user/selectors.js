// eslint-disable-next-line import/prefer-default-export
export const getUsers = ({ user }) => {
  const { data } = user;
  return data;
};

export const getUsersFilter = ({ user }) => {
  const { filter } = user;
  return filter;
};

export const isLoading = ({ user }) => {
  const { loading } = user;
  return loading;
};

export const isFilter = ({ user }) => {
  const { isFilter } = user;
  return isFilter;
};
