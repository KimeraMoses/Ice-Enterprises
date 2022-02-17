import React from 'react';
import { Link } from 'react-router-dom';
import Image from "../../../../../assets/popular-rental.png";
import classes from "./PopularRental.module.css";

const PopularRental = () => {
  return (
    <div className={classes.pupular_rental_wrapper}>
        <div className={classes.rental_info_wrapper}>
            <div className={classes.image_wrapper}>
                <img src={Image} alt=""/>
            </div>
            <div className={classes.rental_info}>
                <div className={classes.rental_name}><h3>Bomber Pants</h3></div>
                <div className={classes.rental_meta}><h5>2 Levels . 25% Multiplier</h5></div>
            </div>
        </div>
        <div className={classes.rental_statistics_wrapper}>
            <div className={classes.rental_link}><Link to="/dashboard/user">View In Dashboard</Link></div>
            <div className={classes.rental_statistics}><h5>Rented 400 Times . Generated 100,000 ICE</h5></div>
        </div>
    </div>
  )
}

export default PopularRental