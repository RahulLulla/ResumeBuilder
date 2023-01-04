import { React, useEffect, useState } from "react";
import {
  personalDetails,
  educationDetails,
  projectDetails,
  experienceDetails,
  extraDetails,
} from "../methods/stateNames";
import { renderSwitch } from "../methods/renderSwitch";

const Resume = () => {
  const [step, setStep] = useState(1);
  const [resumeData, setResumeData] = useState({
    ...personalDetails,
    ...educationDetails,
    ...projectDetails,
    ...experienceDetails,
    ...extraDetails,
  });

  function resetForm() {
    setResumeData({
      ...personalDetails,
      ...educationDetails,
      ...projectDetails,
      ...experienceDetails,
      ...extraDetails,
    });
    setResumeData(1);
  }

  useEffect(() => {
    // console.log(resumeData);
    // console.log(resumeData.collegeStart.$y);
  }, [resumeData]);

  function handleChange(e) {
    setResumeData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  }

  function handleDateChange(id, value) {
    setResumeData((previousState) => ({
      ...previousState,
      [id]: value,
    }));
  }

  function handleDurationChange(id, e, options) {
    setResumeData((previousState) => ({
      ...previousState,
      [id]: { ...previousState[id], [options]: e.target.value },
    }));
  }

  const goBack = function (e) {
    e.preventDefault();
    setStep((prevStep) => prevStep - 1);
  };

  const goNext = function (e) {
    e.preventDefault();
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <>
      {renderSwitch(
        step,
        resumeData,
        handleChange,
        handleDateChange,
        handleDurationChange,
        goNext,
        goBack,
        resetForm
      )}
    </>
  );
};
export default Resume;
