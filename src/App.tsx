import "./App.css";

// Components
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-4xl pb-4">Design System Demo</h1>
      <h3 className="text-2xl">Buttons</h3>
      <div className="py-2">
        <Button type="primary" label="Button Primary" />
      </div>
      <div className="py-2">
        <Button type="success" label="Button Success" />
      </div>
      <div className="py-2">
        <Button
          type="secondary"
          label="Button Secondary with Check"
          icon="check"
        />
      </div>
      <div className="py-2">
        <Button
          type="primary"
          label="Button Primary with Chevron"
          icon="down"
        />
      </div>
      <h3 className="text-2xl pt-4 pb-3">Nested Components</h3>
      <h4>Card</h4>
      <div className="py-2 flex justify-center">
        <Card
          size="medium"
          title="Card Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
      <h4 className="pt-4">Card with Nested Button</h4>
      <div className="py-2 flex justify-center">
        <Card
          title="Card Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        >
          <div className="pt-4">
            <Button type="primary" label="Button Primary" icon="plus" />
          </div>
        </Card>
      </div>
    </>
  );
}

export default App;
