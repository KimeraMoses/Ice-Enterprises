import React from "react";
import Image from "../../../../../assets/renterAvartar.png";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import classes from "./UsersTable.module.css";
import { useSelector } from "react-redux";
import { withStyles } from "@material-ui/styles";
import { Switch } from "@material-ui/core";
import { useTranslation } from "react-i18next";
const TableArray = [
  {
    address: "Mpzi....yMv",
    email: "Paul.Elliott@fakemail.com",
    item: 24,
    rentals: 48,
    total_spent: "10,000",
    total_earned: "20,000",
    userType: "owner",
    status: true,
  },
  {
    address: "Mpzi....yMv",
    email: "Paul.Elliott@fakemail.com",
    item: 24,
    rentals: 48,
    total_spent: "10,000",
    total_earned: "20,000",
    userType: "player",
    status: false,
  },
  {
    address: "Mpzi....yMv",
    email: "Paul.Elliott@fakemail.com",
    item: 24,
    rentals: 48,
    total_spent: "10,000",
    total_earned: "20,000",
    userType: "owner",
    status: true,
  },
  {
    address: "Mpzi....yMv",
    email: "Paul.Elliott@fakemail.com",
    item: 24,
    rentals: 48,
    total_spent: "10,000",
    total_earned: "20,000",
    userType: "Player",
    status: false,
  },
  {
    address: "Mpzi....yMv",
    email: "Paul.Elliott@fakemail.com",
    item: 24,
    rentals: 48,
    total_spent: "10,000",
    total_earned: "20,000",
    userType: "owner",
    status: true,
  },
];
const UsersTable = (props) => {
  const isLoading = true;
  const { currentTableData } = props;
  const { t } = useTranslation();

  const CustomSwitch = withStyles((theme) => ({
    root: {
      width: 36,
      height: 19,
      padding: 0,
      margin: 1,
    },
    switchBase: {
      padding: 1,
      color: "#262626",
      "&$checked": {
        transform: "translateX(16px)",
        color: "#40A9FF",

        "& + $track": {
          backgroundColor: "#595959",
          opacity: 1,
          border: "none",
        },
      },
      "&$focusVisible $thumb": {
        color: "#595959",
        border: "6px solid #8C8C8C",
      },
    },
    thumb: {
      width: 16,
      height: 16,
    },
    track: {
      borderRadius: 20 / 2,
      backgroundColor: "#595959",
      opacity: 1,
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="customized table">
        <TableHead classes={{ root: classes.table_head }}>
          <TableRow classes={{ root: classes.table__head_row }}>
            <TableCell>{t("dashboard.users.usersTable.userAddress")}</TableCell>
            <TableCell align="right">{t("dashboard.users.usersTable.emailAddress")}</TableCell>
            <TableCell align="right">{t("dashboard.users.usersTable.items")}</TableCell>
            <TableCell align="right">{t("dashboard.users.usersTable.rentals")}</TableCell>
            <TableCell align="right">{t("dashboard.users.usersTable.totalSpent")}</TableCell>
            <TableCell align="right">{t("dashboard.users.usersTable.totalEarned")}</TableCell>
            <TableCell align="right">{t("dashboard.users.usersTable.userType")}</TableCell>
            <TableCell align="right">{t("dashboard.users.usersTable.status")}</TableCell>
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
                    <div className={classes.renter_address}>{row.address}</div>
                  </div>
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">
                  {row.item}
                  {" Items"}
                </TableCell>
                <TableCell align="right">{row.rentals} Rentals</TableCell>
                <TableCell align="right">{row.total_spent} ICE</TableCell>
                <TableCell align="right">{row.total_earned} ICE</TableCell>
                <TableCell align="right">
                  <div
                    className={`${classes.user_type_btn} ${
                      row.userType === "owner"
                        ? classes.btn_primary
                        : classes.btn_secondary
                    }`}
                  >
                    {row.userType}
                  </div>
                </TableCell>
                <TableCell align="right">
                  <CustomSwitch checked={row.status} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default UsersTable;
