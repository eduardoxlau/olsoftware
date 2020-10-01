export const removeElements = (elements, id) => {
  return elements.filter((el) => el.id !== id);
};

export const filterElements = (elements, item) => {
  return [...elements.filter((el) => el.campo1 === item.campo1)];
};

export const addElements = (elements, item) => {
  const elementExist = elements.find((el) => el.id === item.id);
  return elementExist
    ? editElements(elements, item)
    : createElement(elements, item);
};

const editElements = (elements, item) => {
  return elements.map((el) => {
    let element = el;
    if (element.id === item.id) element = item;
    return element;
  });
};

const createElement = (elements, item) => {
  let element = { ...item, id: new Date().getTime() };
  return [...elements, element];
};

export const validateAdmin = (user) => {
  console.log(user);
  let admin = {
    name: "Rafael sanchez",
    email: "admin",
    photo: "admin",
  };
  return user.user == "admin" && user.password == "admin" ? admin : null;
};
