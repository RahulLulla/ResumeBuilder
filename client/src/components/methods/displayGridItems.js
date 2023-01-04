import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const displayGridItemsUsingState = (
  width,
  listOfTextFieldItems,
  resumeState,
  register,
  handleChange,
  additionalProps
) => {
  const stylingObj = {
    // width: item.id !== "" ? "100%" : "215%",
    width: "100%",
    background: "#f2f2f2",
    borderRadius: "2px",
    fontFamily: "Raleway-SemiBold",
    marginTop: "5px",
    input: {
      fontFamily: "Raleway-SemiBold",
    },
  };
  return (
    <>
      {listOfTextFieldItems.map((item) => {
        const iconObj = {
          endAdornment: (
            <InputAdornment position="end">{item.icon}</InputAdornment>
          ),
        };
        return (
          <Grid key={item.id} item xs={width}>
            <TextField
              label={item.label}
              id={item.id}
              defaultValue={resumeState[item.id]}
              variant="filled"
              {...register(item.id)}
              onChange={handleChange}
              sx={stylingObj}
              InputProps={iconObj}
              {...additionalProps}
            />
          </Grid>
        );
      })}
    </>
  );
};

export default displayGridItemsUsingState;
