import { renderData, prepareData } from "../src/solution";
import payload from "./__fixtures__/payload.json";

/* 
  PLEASE DO NOT MODIFY THIS FILE
*/

describe(`prepareData`, () => {
  test.each`
    year    | customerName
    ${2008} | ${"SpaceX"}
    ${2010} | ${"SpaceX"}
    ${2018} | ${"NASA"}
    ${2019} | ${"Iridium"}
  `(
    `consolidates the data correctly for year $year and customer $customerName`,
    ({ year, customerName }) => {
      expect(prepareData({ year, customerName })(payload)).toMatchSnapshot();
    }
  );
});

describe(`renderData`, () => {
  it(`renders the output correctly`, () => {
    const example = [
      {
        foo: 2,
        bar: "baz",
      },
    ];
    // prettier-ignore
    const expected = [
      `[`,
      `  {`,
      `    "foo": 2,`,
      `    "bar": "baz"`,
      `  }`,
      `]`
    ].join("\n");

    document.body.innerHTML = `<pre id="out"></pre>`;
    renderData(example);
    expect(document.getElementById("out").innerHTML).toEqual(expected);
  });
});
