import { App } from "./App";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("App.tsx", () => {
  it("Should mount", () => {
    const app = shallow(<App></App>);
    expect(app.contains("Hello")).toBeTruthy();
  });
});
