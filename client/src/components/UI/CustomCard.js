import { styled } from "@mui/system";

const MyThemeComponent = styled("div")({
  margin: "0 auto",
  borderRadius: 20,
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
  width: "50%",
  height: "70vh",
  border: "1px dashed red",
  backgroundColor: "white",
});

export default function CustomCard(props) {
  return <MyThemeComponent>{props.children}</MyThemeComponent>;
}
