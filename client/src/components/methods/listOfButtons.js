export const listOfButtons = (
  goBack,
  backDisabled,
  goNext,
  nextDisabled,
  downloadButton = null
) => {
  return (
    <div className="btn-outer">
      <button
        disabled={backDisabled}
        className="resume-form-btn btn-left"
        onClick={goBack}
      >
        &lt; Previous
      </button>

      <div className="download-btn">{downloadButton}</div>

      <button
        disabled={nextDisabled}
        className="resume-form-btn btn-right"
        onClick={goNext}
      >
        Next &gt;
      </button>
    </div>
  );
};
