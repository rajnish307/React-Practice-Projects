import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  table: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  tableCell: {
    border: "3px solid #000000",
  },
  tableHead: {
    backgroundColor: "#00bcd4",
    border: "3px solid #000000",
    color: theme.palette.common.white,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  cell: {
    border: "3px solid #000000",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      margin: "5px 0",
    },
  },
  container: {
    maxHeight: "80vh",
    overflow: "auto",
  },
}));
// const useStyles = makeStyles({
//   table: {
//     width: "100%",
//     [theme.breakpoints.down("sm")]: {
//       display: "block",
//     },
//   },
//   tableHead: {
//     backgroundColor: "#00bcd4",
//     color: "#ffffff",
//     border: "3px solid #000000",
//   },
//   tableCell: {
//     border: "3px solid #000000",
//   },
//   cell: {
//     border: "3px solid #000000",
//     backgroundColor: (props) => props.color,
//   },
// });

const colorMap = [
  {
    FAIL: "red",
    PASS: "green",
    "Not Attempted": "pink",
    "Needs Review": "yellow",
  },
];

const getColor = (value) => {
  for (let i = 0; i < colorMap.length; i++) {
    if (colorMap[i][value]) {
      return colorMap[i][value];
    }
  }
  return "gray";
};

const jobStatus = [
  {
    id: 1,
    header_color: "pink",
    client_name: "AIG",
    PreProcessingVA: "FAIL",
    PreProcessingFIA: "PASS",
    VASales: "",
    FIASales: "",
    OfficeMap: "",
    ZoneMap: "",
    TeritoryMap: "",
    ChannelMap: "",
    VettingReport: "",
    M2TStatusVA: "",
    M2TStatusFIA: "",
    StandardFeed: "",
    MappingKey: "",
    MISightPrewarm: "",
    MISightRefresh: "",
  },
  {
    id: 2,
    header_color: "pink",
    client_name: "AGI",
    PreProcessingVA: "PASS",
    PreProcessingFIA: "Needs Review",
    VASales: "",
    FIASales: "",
    OfficeMap: "",
    ZoneMap: "",
    TeritoryMap: "",
    ChannelMap: "",
    VettingReport: "",
    M2TStatusVA: "",
    M2TStatusFIA: "",
    StandardFeed: "",
    MappingKey: "",
    MISightPrewarm: "",
    MISightRefresh: "",
  },
  {
    id: 3,
    header_color: "pink",
    client_name: "PRUDENTIAL",
    PreProcessingVA: "Needs Review",
    PreProcessingFIA: "FAIL",
    VASales: "",
    FIASales: "",
    OfficeMap: "",
    ZoneMap: "",
    TeritoryMap: "",
    ChannelMap: "",
    VettingReport: "",
    M2TStatusVA: "",
    M2TStatusFIA: "",
    StandardFeed: "",
    MappingKey: "",
    MISightPrewarm: "",
    MISightRefresh: "",
  },
  {
    id: 3,
    header_color: "pink",
    client_name: "JPMORGAN",
    PreProcessingVA: "Needs Review",
    PreProcessingFIA: "PASS",
    VASales: "PASS",
    FIASales: "FAIL",
    OfficeMap: "PASS",
    ZoneMap: "",
    TeritoryMap: "PASS",
    ChannelMap: "",
    VettingReport: "",
    M2TStatusVA: "PASS",
    M2TStatusFIA: "",
    StandardFeed: "",
    MappingKey: "",
    MISightPrewarm: "",
    MISightRefresh: "",
  },
];

const headers = [
  "PreProcessingVA",
  "PreProcessingFIA",
  "VASales",
  "FIASales",
  "OfficeMap",
  "ZoneMap",
  "TeritoryMap",
  "ChannelMap",
  "VettingReport",
  "M2TStatusVA",
  "M2TStatusFIA",
  "StandardFeed",
  "MappingKey",
  "MISightPrewarm",
  "MISightRefresh",
];

export default function MaterialTable() {
  const classes = useStyles();

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell align="center" className={classes.tableCell}>
                Client
              </TableCell>
              {headers.map((header, i) => (
                <TableCell
                  key={i}
                  align="center"
                  style={{ minWidth: "20px" }}
                  className={classes.tableCell}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {jobStatus.map((row, i) => (
              <TableRow key={i}>
                <TableCell
                  className={classes.tableCell}
                  component="th"
                  scope="row"
                  style={{ backgroundColor: row.header_color, minWidth: 100 }}
                >
                  <Chip label={row.client_name} color="primary" />
                </TableCell>
                {/* Data Starts Here */}
                {headers.map((header, j) => (
                  <TableCell
                    key={j}
                    className={classes.cell}
                    style={{ backgroundColor: getColor(row[header]) }}
                  >
                    {row[header]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
