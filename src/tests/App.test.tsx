
import { render, screen } from '@testing-library/react';
import Index from '../Init';

// const mockedUsedNavigate = jest.fn();

// jest.mock("react-router-dom", () => ({
//   ...(jest.requireActual("react-router-dom") as any),
//   useNavigate: () => mockedUsedNavigate

// }));

test('renders zeply and login', async () => {
  render(<Index />);
  const linkElement = await screen.findAllByText('Login');
  expect(linkElement.length > 0).toBe(true);
  const emailInput = await screen.getByTestId(':r0:');
  expect(emailInput).toBeInTheDocument();
});

// import React from "react";
// import { render } from "@testing-library/react";
// import App from "../App";

// describe("App Component", function () {
//   it("should have hello world message", function () {
//     let { getByText } = render(<App />);
//     expect(getByText("Hello world React!")).toMatchInlineSnapshot(`
//       <h1>
//         Hello world React!
//       </h1>
//     `);
//   });
// });