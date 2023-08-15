import MyInputs from "./MyInputs";
import MyHandling from "./MyHandling";

function App() {
  return (
    <div className="App">
      <MyHandling
        addArticle={({ title, summary, onChangeTitle, onChangeSummary }) => (
          <MyInputs
            name="Handle Inputs"
            title={title}
            summary={summary}
            onChangeTitle={onChangeTitle}
            onChangeSummary={onChangeSummary}
          />
        )}
      />
    </div>
  );
}

export default App;
