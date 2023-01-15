import { useForm } from "react-hook-form";
import { Grid } from "@mui/material";
import displayGridItemsUsingState from "../methods/displayGridItems";
import displaySelectionItems from "../methods/displaySelectionItems";
import { listOfButtons } from "../methods/listOfButtons";

import {
  Description,
  Timelapse,
  Business,
  EventSeat,
} from "@mui/icons-material/";
import useMediaQuery from "@mui/material/useMediaQuery";

const Experience = ({
  goBack,
  goNext,
  handleChange,
  resumeData,
  handleDurationChange,
}) => {
  const { register } = useForm();
  const screen = useMediaQuery("(max-width:480px)");

  const textFieldItemsRol1 = [
    { label: "Institute/Organization", id: "company1Exp", icon: <Business /> },
    { label: "Position", id: "company1Pos", icon: <EventSeat /> },
  ];
  const textFieldItemsRow_1 = [
    { label: "Duration", id: "company1Duration", icon: <Timelapse /> },
  ];

  const textFieldItemsRow2 = [
    { label: "Description", id: "company1Desc", icon: <Description /> },
  ];

  const textFieldItemsRow3 = [
    { label: "Institute/Organization", id: "company2Exp", icon: <Business /> },
    { label: "Position", id: "company2Pos", icon: <EventSeat /> },
  ];

  const textFieldItemsRow_3 = [
    { label: "Duration", id: "company2Duration", icon: <Timelapse /> },
  ];

  const textFieldItemsRow4 = [
    { label: "Description", id: "company2Desc", icon: <Description /> },
  ];

  return (
    <div className="resumeContainer experienceForm">
      <span className="resumeContainer-headline">Experience</span>
      <div className="resumeContainer-form1">
        <Grid container spacing={1.5}>
          <span className="resumeContainer-headline2">Experience 1</span>
          {displayGridItemsUsingState(
            screen ? 12 : 4,
            textFieldItemsRol1,
            resumeData,
            register,
            handleChange
          )}
          {displaySelectionItems(
            screen ? 12 : 4,
            textFieldItemsRow_1,
            resumeData,
            register,
            handleDurationChange
          )}
          {displayGridItemsUsingState(
            12,
            textFieldItemsRow2,
            resumeData,
            register,
            handleChange,
            { multiline: true, rows: 2 }
          )}
        </Grid>
        <Grid container spacing={1.5}>
          <span
            className="resumeContainer-headline2"
            style={{ paddingTop: "25px" }}
          >
            Experience 2
          </span>
          {displayGridItemsUsingState(
            screen ? 12 : 4,
            textFieldItemsRow3,
            resumeData,
            register,
            handleChange
          )}
          {displaySelectionItems(
            screen ? 12 : 4,
            textFieldItemsRow_3,
            resumeData,
            register,
            handleDurationChange
          )}
          {displayGridItemsUsingState(
            12,
            textFieldItemsRow4,
            resumeData,
            register,
            handleChange,
            { multiline: true, rows: 2 }
          )}
        </Grid>
        {listOfButtons(goBack, false, goNext, false)}
      </div>
    </div>
  );
};
export default Experience;
