export default function getSpecificFields(obj) {
  const res = [];
  obj.special.forEach((spec) => {
    res.push({ description: 'Описание недоступно', ...spec });
  });
  return res;
}
