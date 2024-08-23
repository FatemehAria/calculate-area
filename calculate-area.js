const calculateArea = (points) => {
  const numberOfPoints = points.length;
  let area = 0;

  for (let i = 0; i < numberOfPoints; i++) {
    let j = (i + 1) % numberOfPoints;

    area += points[i][0] * points[j][1];
    area -= points[i][1] * points[j][0];
  }

  area = Math.abs(area) / 2;
  return area;
};

const testPoints = [
  [0, 1],
  [1, 2],
  [0, -1],
  [3, -1],
];
console.log(calculateArea(testPoints));
