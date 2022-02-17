import React from "react";
import Image from "../../../../assets/renterAvartar.png";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import classes from "./RentalsTable.module.css";
import { useSelector } from "react-redux";
const TableArray = [
  {
    addrss: "Mpzi....yMv",
    rent: "Bomber Pants",
    level: 2,
    multiplier: 25,
    price: 100,
    term: 60,
    check: "2 of 6",
  },
  {
    addrss: "Mpzi....yMv",
    rent: "Bomber Pants",
    level: 2,
    multiplier: 25,
    price: 100,
    term: 60,
    check: "2 of 6",
  },
  {
    addrss: "Mpzi....yMv",
    rent: "Bomber Pants",
    level: 2,
    multiplier: 25,
    price: 100,
    term: 60,
    check: "2 of 6",
  },
  {
    addrss: "Mpzi....yMv",
    rent: "Bomber Pants",
    level: 2,
    multiplier: 25,
    price: 100,
    term: 60,
    check: "2 of 6",
  },
  {
    addrss: "Mpzi....yMv",
    rent: "Bomber Pants",
    level: 2,
    multiplier: 25,
    price: 100,
    term: 60,
    check: "2 of 6",
  }
];
const RentalsTable = (props) => {
  const isLoading = true;
  const { currentTableData } = props;

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="customized table">
        <TableHead classes={{ root: classes.table_head }}>
          <TableRow classes={{ root: classes.table__head_row }}>
            <TableCell>Renter Address</TableCell>
            <TableCell align="right">Wearable For Rent</TableCell>
            <TableCell align="right">Level Or Rank</TableCell>
            <TableCell align="right">% Multiplier</TableCell>
            <TableCell align="right">Rental Price</TableCell>
            <TableCell align="right">Rental Term</TableCell>
            <TableCell align="right">CheckIns</TableCell>
          </TableRow>
        </TableHead>
        <TableBody classes={{ root: classes.table__body }}>
          {TableArray.map((row) => {
            return (
              <TableRow key={1} classes={{ root: classes.table_body_row }}>
                <TableCell component="th" scope="row">
                  <div className={classes.renter_column}>
                    <div className={classes.renter_avarter}>
                      <img src={Image} alt="" />
                    </div>
                    <div className={classes.renter_address}>{row.addrss}</div>
                  </div>
                </TableCell>
                <TableCell align="right">{row.rent}</TableCell>
                <TableCell align="right">{row.level}</TableCell>
                <TableCell align="right">
                  {row.multiplier}%
                </TableCell>
                <TableCell align="right">
                  {row.price} ICE/Day
                </TableCell>
                <TableCell align="right">
                  {row.term} Days
                </TableCell>
                <TableCell align="right">
                  {row.check}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default RentalsTable;