import { useForm } from "react-hook-form";
import { Grid } from "@mui/material";
import {
  LinkedIn,
  GitHub,
  Email,
  Language as Website,
  Call as PhoneNumber,
  Twitter,
  LocationCity as City,
} from "@mui/icons-material/";
import displayGridItemsUsingState from "../methods/displayGridItems";
import { listOfButtons } from "../methods/listOfButtons";
import useMediaQuery from "@mui/material/useMediaQuery";

const PersonalDetails = ({ goNext, handleChange, resumeData }) => {
  const { register } = useForm();
  const screen = useMediaQuery("(max-width:480px)");

  const textFieldItems = [
    { label: "First Name", id: "firstName" },
    { label: "Last Name", id: "lastName" },
    { label: "Email", id: "email", icon: <Email /> },
    { label: "Your website", id: "website", icon: <Website /> },
    { label: "LinkedIn", id: "linkedIn", icon: <LinkedIn /> },
    { label: "Phone Number", id: "phoneNumber", icon: <PhoneNumber /> },
    { label: "Github", id: "github", icon: <GitHub /> },
    { label: "Twitter", id: "twitter", icon: <Twitter /> },
    { label: "City", id: "city", icon: <City /> },
    { label: "State", id: "state", icon: <City /> },
  ];

  return (
    <div className="resumeContainer personalDetailsForm">
      {/* <CustomCard> */}
      <span className="resumeContainer-headline">Personal Details</span>
      <div className="resumeContainer-form1">
        <Grid container spacing={1.5}>
          {displayGridItemsUsingState(
            screen ? 12 : 6,
            textFieldItems,
            resumeData,
            register,
            handleChange
          )}
        </Grid>
        {listOfButtons(() => {}, true, goNext, false)}
      </div>
    </div>
  );
};

export default PersonalDetails;
