import { React } from "react";
import { Grid } from "@mui/material";
import { listOfButtons } from "../methods/listOfButtons";
import { School, Description } from "@mui/icons-material/";
import { useForm } from "react-hook-form";
import displayGridItemsUsingState from "../methods/displayGridItems";
import displayDateItemsUsingState from "../methods/displayDateItems";
import useMediaQuery from "@mui/material/useMediaQuery";

const Education = ({
  goBack,
  goNext,
  handleChange,
  resumeData,
  handleDateChange,
}) => {
  const { register } = useForm();
  const screen = useMediaQuery("(max-width:480px)");

  const textFieldItemsRow1 = [
    { label: "College/University", id: "college", icon: <School /> },
  ];

  const selectionFieldItems1 = [
    { label: "Start Year", id: "collegeStart" },
    { label: "End Year", id: "collegeEnd" },
  ];

  const textFieldItemsRow2 = [
    { label: "Qualification", id: "collegeQual", icon: "" },
  ];

  const textFieldItemsRow3 = [
    { label: "Description", id: "collegeDesc", icon: <Description /> },
  ];

  const textFieldItemsRow4 = [
    { label: "School", id: "school", icon: <School /> },
  ];

  const selectionFieldItems2 = [
    { label: "Start Year", id: "schoolStart" },
    { label: "End Year", id: "schoolEnd" },
  ];

  const textFieldItemsRow5 = [
    { label: "Qualification", id: "schoolQual", icon: "" },
  ];

  const textFieldItemsRow6 = [
    { label: "Description", id: "schoolDesc", icon: <Description /> },
  ];

  return (
    <div className="resumeContainer eduForm">
      <span className="resumeContainer-headline">Education Details</span>
      <div className="resumeContainer-form1">
        <Grid container spacing={1.5}>
          {displayGridItemsUsingState(
            screen ? 12 : 4,
            textFieldItemsRow1,
            resumeData,
            register,
            handleChange
          )}
          {displayDateItemsUsingState(
            screen ? 12 : 4,
            selectionFieldItems1,
            resumeData,
            register,
            handleDateChange
          )}
          {displayGridItemsUsingState(
            screen ? 12 : 4,
            textFieldItemsRow2,
            resumeData,
            register,
            handleChange
          )}
          {displayGridItemsUsingState(
            screen ? 12 : 8,
            textFieldItemsRow3,
            resumeData,
            register,
            handleChange
          )}
        </Grid>

        <span
          className="resumeContainer-headline2"
          style={{ paddingTop: "10px" }}
        ></span>

        <Grid container spacing={1.5}>
          {displayGridItemsUsingState(
            screen ? 12 : 4,
            textFieldItemsRow4,
            resumeData,
            register,
            handleChange
          )}
          {displayDateItemsUsingState(
            screen ? 12 : 4,
            selectionFieldItems2,
            resumeData,
            register,
            handleDateChange
          )}
          {displayGridItemsUsingState(
            screen ? 12 : 4,
            textFieldItemsRow5,
            resumeData,
            register,
            handleChange
          )}
          {displayGridItemsUsingState(
            screen ? 12 : 8,
            textFieldItemsRow6,
            resumeData,
            register,
            handleChange
          )}
        </Grid>

        {listOfButtons(goBack, false, goNext, false)}
      </div>
    </div>
  );
};
export default Education;
