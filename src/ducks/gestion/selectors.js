// eslint-disable-next-line import/prefer-default-export
export const getGestiones = ({ gestion }) => {
  const { data } = gestion;
  return data;
};

export const getGestionesFilter = ({ gestion }) => {
  const { filter } = gestion;
  return filter;
};

export const isLoading = ({ gestion }) => {
  const { loading } = gestion;
  return loading;
};

export const isFilter = ({ gestion }) => {
  const { isFilter } = gestion;
  return isFilter;
};
