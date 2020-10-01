// eslint-disable-next-line import/prefer-default-export
export const getProfiles = ({ profile }) => {
  const { data } = profile;
  return data;
};

export const getProfilesFilter = ({ profile }) => {
  const { filter } = profile;
  return filter;
};

export const isLoading = ({ profile }) => {
  const { loading } = profile;
  return loading;
};

export const isFilter = ({ profile }) => {
  const { isFilter } = profile;
  return isFilter;
};
