import React from "react";
import Image from "../../../../../assets/renterAvartar.png";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import classes from "./TransactionsTable.module.css";
import { useSelector } from "react-redux";
const TableArray = [
  {
    date: "Jan 24th, 2022",
    amount: 30000,
    addrss: "Mpzi....yMv",
  },
  {
    date: "Jan 24th, 2022",
    amount: 30000,
    addrss: "Mpzi....yMv",
  },
  {
    date: "Jan 24th, 2022",
    amount: 30000,
    addrss: "Mpzi....yMv",
  },
  {
    date: "Jan 24th, 2022",
    amount: 30000,
    addrss: "Mpzi....yMv",
  },
  {
    date: "Jan 24th, 2022",
    amount: 30000,
    addrss: "Mpzi....yMv",
  },
 
];
const TransactionTable = (props) => {
  const isLoading = true;
  const { currentTableData } = props;

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="customized table">
        <TableHead classes={{ root: classes.table_head }}>
          <TableRow classes={{ root: classes.table__head_row }}>
            <TableCell>Date</TableCell>
            <TableCell align="right">Transferred From</TableCell>
            <TableCell align="right">Transferred To</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody classes={{ root: classes.table__body }}>
          {TableArray.map((row) => {
            return (
              <TableRow key={1} classes={{ root: classes.table_body_row }}>
                <TableCell component="th" scope="row">{row.date}</TableCell>
                <TableCell align="right">
                  <div className={classes.renter_column}>
                    <div className={classes.renter_avarter}>
                      <img src={Image} alt="" />
                    </div>
                    <div className={classes.renter_address}>{row.addrss}</div>
                  </div>
                </TableCell>
                <TableCell align="right">
                  <div className={classes.renter_column}>
                    <div className={classes.renter_avarter}>
                      <img src={Image} alt="" />
                    </div>
                    <div className={classes.renter_address}>{row.addrss}</div>
                  </div>
                </TableCell>
                <TableCell align="right">{row.amount}{" "}ICE</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TransactionTable;
