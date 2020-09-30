export const removeElements = (elements, id) => {
  return elements.filter((el) => el.id !== id);
};

export const filterElements = (elements, item) => {
  console.log("busca->", item);
  console.log(
    "elements->",
    elements.filter((el) => el.user === item.user)
  );
  return [...elements.filter((el) => el.user === item.user)];
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
