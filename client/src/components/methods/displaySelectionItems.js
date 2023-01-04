import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid } from "@mui/material";

const displaySelectionItems = (
  width,
  selectionFieldItems,
  resumeData,
  register,
  handleDurationChange
) => {
  const labelStylingObj = {
    marginTop: "5px",
  };
  const menuStylingObj = {
    width: "100%",
    background: "#E0E0E0",
    borderRadius: "2px",
    fontFamily: "Raleway-SemiBold",
    marginTop: "5px",
    input: {
      fontFamily: "Raleway-SemiBold",
    },
  };
  const durationRange = Array.from({ length: 100 }, (_, i) => i + 1);

  return (
    <>
      {selectionFieldItems.map((item) => {
        return (
          <Grid key={item.id} item xs={width}>
            <FormControl sx={{ minWidth: "34.9%" }}>
              <InputLabel
                htmlFor="grouped-native-select"
                variant="filled"
                sx={labelStylingObj}
              >
                Duration
              </InputLabel>
              <Select
                native
                id="grouped-native-select"
                label="Grouping"
                sx={menuStylingObj}
                variant="filled"
                onChange={(data) => {
                  handleDurationChange(item.id, data, "range");
                }}
                defaultValue={resumeData[item.id]["range"]}
              >
                <option aria-label="None" value="" />
                {durationRange.map((item) => {
                  return (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: "65%" }}>
              <InputLabel
                htmlFor="grouped-native-select"
                variant="filled"
                sx={labelStylingObj}
              >
                Select months/years
              </InputLabel>
              <Select
                native
                id="grouped-native-select"
                label="Grouping"
                sx={menuStylingObj}
                variant="filled"
                defaultValue={resumeData[item.id]["period"]}
                onChange={(data) => {
                  handleDurationChange(item.id, data, "period");
                }}
              >
                <option aria-label="None" value="" />
                <option value={"Months"}>Months</option>
                <option value={"Years"}>Years</option>
              </Select>
            </FormControl>
          </Grid>
        );
      })}
    </>
  );
};
export default displaySelectionItems;
