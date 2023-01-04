import Education from "../Pages/Education";
import Experience from "../Pages/Experience";
import AdditionalDetails from "../Pages/AdditionalDetails";
import PersonalDetails from "../Pages/PersonalDetails";
import Projects from "../Pages/Projects";
export const renderSwitch = (
  step,
  resumeData,
  handleChange,
  handleDateChange,
  handleDurationChange,
  goNext,
  goBack
) => {
  switch (step) {
    case 1:
      return (
        <PersonalDetails
          goNext={goNext}
          handleChange={handleChange}
          resumeData={resumeData}
        />
      );
    case 2:
      return (
        <Education
          goNext={goNext}
          goBack={goBack}
          handleChange={handleChange}
          resumeData={resumeData}
          handleDateChange={handleDateChange}
        />
      );
    case 3:
      return (
        <Projects
          goNext={goNext}
          goBack={goBack}
          handleChange={handleChange}
          resumeData={resumeData}
        />
      );
    case 4:
      return (
        <Experience
          goNext={goNext}
          goBack={goBack}
          handleChange={handleChange}
          handleDurationChange={handleDurationChange}
          resumeData={resumeData}
        />
      );
    case 5:
      return (
        <AdditionalDetails
          goNext={goNext}
          goBack={goBack}
          handleChange={handleChange}
          resumeData={resumeData}
        />
      );
    default:
  }
};
