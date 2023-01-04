import { useForm } from "react-hook-form";
import { Grid, Button } from "@mui/material";
import displayGridItemsUsingState from "../methods/displayGridItems";
import { School, Interests, Download } from "@mui/icons-material/";
import createAndGetPDF from "../fetch/createAndGetPDF";
import { listOfButtons } from "../methods/listOfButtons";

const AdditionalDetails = ({ goNext, goBack, handleChange, resumeData }) => {
  const { register } = useForm();

  const textFieldItemsRow1 = [
    { label: "Skill 1", id: "skill1", icon: <School /> },
    { label: "Skill 2", id: "skill2", icon: <School /> },
    { label: "Skill 3", id: "skill3", icon: <School /> },
    { label: "Skill 4", id: "skill4", icon: <School /> },
    { label: "Skill 5", id: "skill5", icon: <School /> },
    { label: "Skill 6", id: "skill6", icon: <School /> },
  ];

  const textFieldItemsRow2 = [
    { label: "Interest 1", id: "interest1", icon: <Interests /> },
    { label: "Interest 2", id: "interest2", icon: <Interests /> },
    { label: "Interest 3", id: "interest3", icon: <Interests /> },
    { label: "Interest 4", id: "interest4", icon: <Interests /> },
    { label: "Interest 5", id: "interest5", icon: <Interests /> },
    { label: "Interest 6", id: "interest6", icon: <Interests /> },
  ];

  const style = {
    backgroundColor: "#2f91ff",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 5px",
    minWidth: "120px",
    height: "45px",
    fontFamily: "Raleway-Bold",
    fontSize: "16px",
    color: "#fff",
    lineHeight: 1.2,
    textTransform: "uppercase",
    border: "none",
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    const updatedResumeData = {
      ...resumeData,
      collegeStart: resumeData.collegeStart?.$y ?? "",
      collegeEnd: resumeData.collegeEnd?.$y ?? "",
      schoolStart: resumeData.schoolStart?.$y ?? "",
      schoolEnd: resumeData.schoolEnd?.$y ?? "",
      company1Duration:
        resumeData.company1Duration.range +
        " " +
        resumeData.company1Duration.period,
      company2Duration:
        resumeData.company2Duration.range +
        " " +
        resumeData.company2Duration.period,
    };
    createAndGetPDF(updatedResumeData);
  };

  const ListOfButtons = () => {
    return listOfButtons(
      goBack,
      false,
      goNext,
      true,
      <Button
        variant="contained"
        style={style}
        onClick={submitFormHandler}
        endIcon={<Download />}
      >
        Download Resume
      </Button>
    );
  };

  return (
    <div className="resumeContainer additionalDetailsForm">
      <span className="resumeContainer-headline">Additional Details</span>
      <div className="resumeContainer-form1">
        <Grid container spacing={1.5}>
          <span className="resumeContainer-headline2">Skills/Languages</span>
          {displayGridItemsUsingState(
            4,
            textFieldItemsRow1,
            resumeData,
            register,
            handleChange
          )}
        </Grid>
        <Grid container spacing={1.5}>
          <span
            className="resumeContainer-headline2"
            style={{ paddingTop: "25px" }}
          >
            Interests
          </span>
          {displayGridItemsUsingState(
            4,
            textFieldItemsRow2,
            resumeData,
            register,
            handleChange
          )}
        </Grid>
        {ListOfButtons()}
      </div>
    </div>
  );
};

export default AdditionalDetails;
