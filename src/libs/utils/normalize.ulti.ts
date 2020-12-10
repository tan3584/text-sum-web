export const normalizeName = (
  firstName: string,
  lastName: string,
  replace?: string
): string => {
  const name =
    firstName !== undefined
      ? firstName
      : '' + lastName !== undefined
      ? lastName
      : '';
  return name !== '' ? name : replace ?? '';
};

export const getCompanyName = (
  loggedUser: any,
  company: any,
  replace?: string
): string => {
  if (company) {
    return (
      company?.name ??
      normalizeName(loggedUser?.firstName, loggedUser?.lastName, replace) ??
      ''
    );
  }
  return '';
};

export const scrollToElement = (contentId: string) => {
  const elmnt: any = document.getElementById(contentId);
  const y = elmnt.getBoundingClientRect().top + window.scrollY;
  window.scroll({
    top: y,
    behavior: 'smooth',
  });
};
