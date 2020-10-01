/* eslint-disable import/named */
/* eslint-disable no-undef */
import { addElements, removeElements, filterElements } from "../api";
// eslint-disable-next-line no-undef

const elements = [
  { name: "Rafael", lastname: "sanchez", id: 1061750437, phone: 3136823058 },
  { name: "Claudia", lastname: "paz", id: 1061750237, phone: 3136823399 },
  { name: "jennifer", lastname: "sandoval", id: 1561750737, phone: 3536823099 },
  { name: "paola", lastname: "paz", id: 1061750736, phone: 3136823096 },
  { name: "Andres", lastname: "benvides", id: 1068750737, phone: 3137823099 },
];
test("should add new element", () => {
  const item = {
    name: "Eduardo",
    lastname: "sanchez",
    id: 1061850437,
    phone: 3136823029,
  };
  const res = addElements(elements, item);
  expect(res.length).toEqual(6);
});
test("should remove one element", () => {
  const id = 1061750237;
  const res = removeElements(elements, id);
  const element = res.find((el) => el.id === id);
  expect(element).toEqual(undefined);
});
test("should edit element", () => {
  const item = elements[0];
  item.name = "Mateo";
  const res = addElements(elements, item);
  const element = res.find((el) => el.id === item.id);
  expect(element.name).toEqual("Mateo");
});
test("should filter elements", () => {
  const search = { lastname: "paz" };
  const res = filterElements(elements, search);
  expect(res.length).toEqual(2);
});
