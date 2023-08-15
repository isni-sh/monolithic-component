import * as React from "react";

function MyFeature({ addArticle }) {
  const [title, setTitle] = React.useState("");
  const [summary, setSummary] = React.useState("");

  function onChangeTitle(e) {
    setTitle(e.target.value);
  }

  function onChangeSummary(e) {
    setSummary(e.target.value);
  }

  return (
    <div className="App">
      <section>
        {addArticle({
          title,
          summary,
          onChangeTitle,
          onChangeSummary,
        })}
        <div className="pt-2">
          <p>
            Title:<strong>{title}</strong>
          </p>
          <p>
            Summary:<strong>{summary}</strong>
          </p>
        </div>
      </section>
    </div>
  );
}

export default MyFeature;
