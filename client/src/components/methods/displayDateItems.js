import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { Grid } from "@mui/material";

const displayGridItemsUsingState = (
  width,
  selectionFieldItems,
  resumeData,
  register,
  handleDateChange
) => {
  const stylingObj = {
    width: "100%",
    background: "#F0F0F0",
    borderRadius: "2px",
    fontFamily: "Raleway-SemiBold",
    marginTop: "5px",
    input: {
      fontFamily: "Raleway-SemiBold",
    },
  };

  return (
    <>
      {selectionFieldItems.map((item) => {
        return (
          <Grid key={item.id} item xs={width}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                {...register(item.id)}
                views={["year"]}
                label={item.label}
                id={item.id}
                openTo="year"
                value={resumeData[item.id]}
                onChange={(data) => {
                  handleDateChange(item.id, data);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="filled"
                    sx={stylingObj}
                    helperText={null}
                  />
                )}
              />
            </LocalizationProvider>
          </Grid>
        );
      })}
    </>
  );
};
export default displayGridItemsUsingState;
