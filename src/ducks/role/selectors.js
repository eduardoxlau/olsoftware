// eslint-disable-next-line import/prefer-default-export
export const getRoles = ({ role }) => {
  const { data } = role;
  return data;
};

export const getRolesFilter = ({ role }) => {
  const { filter } = role;
  return filter;
};

export const isLoading = ({ role }) => {
  const { loading } = role;
  return loading;
};

export const isFilter = ({ role }) => {
  const { isFilter } = role;
  return isFilter;
};
