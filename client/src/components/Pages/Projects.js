import { useForm } from "react-hook-form";
import { Grid } from "@mui/material";
import { Title, Link, Description } from "@mui/icons-material/";
import displayGridItemsUsingState from "../methods/displayGridItems";
import { listOfButtons } from "../methods/listOfButtons";

const Projects = ({ goBack, goNext, handleChange, resumeData }) => {
  const { register } = useForm();

  const textFieldItemsCol1 = [
    { label: "Title", id: "projectTitle1", icon: <Title /> },
    { label: "Link", id: "projectLink1", icon: <Link /> },
  ];

  const textFieldItemsCol1_1 = [
    { label: "Description", id: "projectDesc1", icon: <Description /> },
  ];

  const textFieldItemsCol2 = [
    { label: "Title", id: "projectTitle2", icon: <Title /> },
    { label: "Link", id: "projectLink2", icon: <Link /> },
  ];

  const textFieldItemsCol2_1 = [
    { label: "Description", id: "projectDesc2", icon: <Description /> },
  ];

  return (
    <div className="resumeContainer projectForm">
      <span className="resumeContainer-headline">Projects</span>
      <div className="resumeContainer-form1">
        <Grid container spacing={1.5}>
          <span className="resumeContainer-headline2">Project 1</span>
          {displayGridItemsUsingState(
            12,
            textFieldItemsCol1,
            resumeData,
            register,
            handleChange
          )}
          {displayGridItemsUsingState(
            12,
            textFieldItemsCol1_1,
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
            Project 2
          </span>
          {displayGridItemsUsingState(
            12,
            textFieldItemsCol2,
            resumeData,
            register,
            handleChange
          )}
          {displayGridItemsUsingState(
            12,
            textFieldItemsCol2_1,
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

export default Projects;
