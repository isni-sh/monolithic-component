function AddArticle({ name, title, summary, onChangeTitle, onChangeSummary }) {
  return (
    <section>
      <h1 className="text-3xl font-semibold">{name}</h1>
      <input
        placeholder="title"
        value={title}
        onChange={onChangeTitle}
        className="p-1 border"
      />
      <input
        placeholder="summary"
        value={summary}
        onChange={onChangeSummary}
        className="p-1 border"
      />
    </section>
  );
}

export default AddArticle;
