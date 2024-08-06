import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { height } from '@mui/system'
const AstrovedMembership = () => {
    return (
        <>

            <Box sx={{ height: { lg: "23rem" }, width: "100%", backgroundColor: "#60c8dc " }}>
                {/* <div>AstrovedMembership</div> */}
                <Box sx={{ height: { lg: "23rem" }, width: "75%", border: "px solid red", margin: { lg: "auto" }, display: { lg: "flex" }, }}>

                    <Box sx={{ height: "23rem", width: { lg: "50%" }, border: "px solid blue" }}>
                        <Typography
                            sx={{
                                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }, // Responsive font size
                                fontWeight: 600,
                                color: '#005466',
                                marginTop: '1.5rem',
                            }}
                        >
                            ENHANCED ASTROVED LOYALTY PROGRAM
                        </Typography>
                        <Typography sx={{
                            fontSize: '1.4rem',
                            // fontWeight: 600,
                            color: '#005466',
                            marginTop: "0.5rem",
                            color: "#ffffff"
                        }}>New! Cashback Offers, Membership Discounts, Birthstar Poojas</Typography>

                        <Typography sx={{
                            fontSize: '1.1rem',
                            width: "35%",
                            color: '#005466',
                            marginTop: "0.8rem",
                        }}>You Care for AstroVed
                            We Care for You!</Typography>

                        <Button sx={{ height: "3rem", width: "95%", marginTop: "0.5rem", color: "#ffffff", backgroundColor: "#005466", fontWeight: "600" }}>VIEW ASTROVED LOYALTY PROGRAM</Button>

                    </Box>

                    <Box sx={{ height: "23rem", width: "50%", border: "px solid blue" }}>

                        <img src='https://www.astroved.com/us/wp-content/uploads/2023/06/av-membership-lp.jpg' />
                    </Box>

                </Box>

            </Box>
            {/* -------------------------------OVERVIEW-------------------- */}
            <Box sx={{ height: "18rem", width: "100%", border: "px solid  red" }}>

                <Typography sx={{
                    fontSize: "1.7rem", fontWeight: 600,
                    color: '#212529',
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1.5rem",
                    borderBottom: "1px solid grey",
                    paddingBottom: "1rem"
                }}>
                    OVERVIEW
                </Typography>

                <Typography sx={{
                    fontSize: "1.4rem", fontWeight: 600,
                    color: '#212529',
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1.5rem",
                }}>
                    Enhanced AstroVed Loyalty Program: More Benefits Than Cost
                </Typography>
                <Typography sx={{
                    fontSize: "1.1rem", fontWeight: 300,
                    color: '#005466',
                    display: "flex",
                    justifyContent: "center",
                    width: "75%",
                    margin: "auto",
                    marginTop: "1.5rem",
                }}>
                    We have enhanced our AstroVed Loyalty Program to provide more benefits for you- cashback offers, and complimentary services, as well as sharing the blessings of AstroVed Vedic technology services with your loved ones, discount coupon value equivalent to membership fees amount, and complimentary astrology readings.
                </Typography>
            </Box>

            <Box sx={{ height: "83vh", background: "#005466" }}>

                <Typography sx={{
                    fontSize: "1.4rem", fontWeight: 600,
                    color: '#FFCC00',
                    display: "flex",
                    justifyContent: "center",
                    padding: "2rem",
                    borderBottom: "1px solid white"
                }}>
                    New and Enhanced Loyalty Program Features
                </Typography>

                <Box sx={{ height: "60vh", width: "50%", margin: "auto", display: 'flex', justifyContent: "space-between", marginTop: "2rem" }}>

                    <Box sx={{ height: "60vh", width: "48%", borderRadius: "1rem", background: "white" }}>

                        <img src='https://www.astroved.com/us/wp-content/uploads/2023/06/Exclusive-Cashback-Offers.jpg' style={{ height: "full", width: "100%", borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem" }} />

                        <Box sx={{ width: "90%", height: "13rem", margin: "auto" }}>

                            <Typography sx={{ fontSize: "1.2rem", fontWeight: "550", marginTop: "1rem", opacity: "0.7" }}>
                                Exclusive Cashback Offers
                            </Typography>

                            <Typography sx={{ fontSize: "1rem", marginTop: "1rem", color: "#606060", opacity: "0.7" }}>
                                Based on your Membership level, except for products, for all orders, you will receive up to 12% cashback to your account
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ height: "60vh", width: "48%", borderRadius: "1rem", background: "white" }}>

                        <img src='https://www.astroved.com/us/wp-content/uploads/2023/06/Birth-Star-Pooja-New.jpg' style={{ height: "full", width: "100%", borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem" }} />
                        <Box sx={{ width: "90%", height: "13rem", margin: "auto" }}>

                            <Typography sx={{ fontSize: "1.2rem", fontWeight: "550", marginTop: "1rem", opacity: "0.7" }}>
                                Birth Star Pooja
                            </Typography>

                            <Typography sx={{ fontSize: "1rem", marginTop: "1rem", color: "#606060", opacity: "0.7" }}>
                                Based on your Membership level, you will have a special Pooja performed on the day of your birth star to help you harness your birth star’s positive energies to progress in life
                            </Typography>
                        </Box>
                    </Box>
                </Box>


            </Box>

            <Box sx={{ height: "145vh", width: "100%", background: "#62CCDF" }}>
                <Typography sx={{
                    fontSize: "1.8rem", fontWeight: 500,
                    color: '#005466',
                    display: "flex",
                    justifyContent: "center",
                    padding: "2rem",

                }}>
                    Benefits of AstroVed Loyalty Program
                </Typography>

                <Box sx={{ height: "60vh", width: "75%", margin: "auto", display: 'flex', justifyContent: "space-between", }}>

                    <Box sx={{ height: "60vh", width: "31%", borderRadius: "1rem", background: "white" }}>

                        <img src='https://www.astroved.com/us/wp-content/uploads/2023/06/One-time-Premier-Discount-Coupon-New.jpg' style={{ height: "full", width: "100%", borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem" }} />

                        <Box sx={{ width: "90%", height: "13rem", margin: "auto" }}>

                            <Typography sx={{ fontSize: "1.2rem", fontWeight: "550", marginTop: "1rem", opacity: "0.7" }}>
                                One-time Premier Discount Coupon
                            </Typography>

                            <Typography sx={{ fontSize: "1rem", marginTop: "1rem", color: "#606060", opacity: "0.7" }}>
                                Each Membership level includes a discount coupon in the amount of your membership fee that you can use on select services or readings
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ height: "60vh", width: "31%", borderRadius: "1rem", background: "white" }}>

                        <img src='https://www.astroved.com/us/wp-content/uploads/2023/06/Add-Your-Loved-Ones-to-Your-Services.jpg' style={{ height: "full", width: "100%", borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem" }} />

                        <Box sx={{ width: "90%", height: "13rem", margin: "auto" }}>

                            <Typography sx={{ fontSize: "1.2rem", fontWeight: "550", marginTop: "1rem", opacity: "0.7" }}>
                                Add Your Loved Ones to Your Services
                            </Typography>

                            <Typography sx={{ fontSize: "1rem", marginTop: "1rem", color: "#606060", opacity: "0.7" }}>
                                You can add up to 3 family members/friends to rituals you register for with AstroVed
                            </Typography>
                        </Box>
                    </Box>


                    <Box sx={{ height: "60vh", width: "31%", borderRadius: "1rem", background: "white" }}>

                        <img src='https://www.astroved.com/us/wp-content/uploads/2023/06/Free-Astrology-Services-New.jpg' style={{ height: "full", width: "100%", borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem" }} />

                        <Box sx={{ width: "90%", height: "13rem", margin: "auto" }}>

                            <Typography sx={{ fontSize: "1.2rem", fontWeight: "550", marginTop: "1rem", opacity: "0.7" }}>
                                Free Astrology Services
                            </Typography>

                            <Typography sx={{ fontSize: "1rem", marginTop: "1rem", color: "#606060", opacity: "0.7" }}>
                                Free Instant Insight (ask any question and receive an answer within 5 minutes) or Live Astrology Consultations from our astrologers based on the Membership level you choose
                            </Typography>
                        </Box>
                    </Box>



                </Box>


                <Box sx={{ height: "60vh", width: "50%", margin: "auto", display: 'flex', justifyContent: "space-between", marginTop: "2rem" }}>

                    <Box sx={{ height: "56vh", width: "48%", borderRadius: "1rem", background: "white" }}>

                        <img src='https://www.astroved.com/us/wp-content/uploads/2023/06/Access-to-Karma-Diffusing-Remedies.jpg' style={{ height: "full", width: "100%", borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem" }} />

                        <Box sx={{ width: "90%", height: "13rem", margin: "auto" }}>

                            <Typography sx={{ fontSize: "1.2rem", fontWeight: "550", marginTop: "1rem", opacity: "0.7" }}>
                                Access to Karma-Diffusing Remedies
                            </Typography>

                            <Typography sx={{ fontSize: "1rem", marginTop: "1rem", color: "#606060", opacity: "0.7" }}>
                                Receive karma-diffusing Poojas performed on the 13th Moon (Pradosham), a powertime optimal for clearing bad karma
                            </Typography>
                        </Box>


                    </Box>

                    <Box sx={{ height: "56vh", width: "48%", borderRadius: "1rem", background: "white" }}>

                        <img src='https://www.astroved.com/us/wp-content/uploads/2023/06/Daily-Updates-New.jpg' style={{ height: "full", width: "100%", borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem" }} />

                        <Box sx={{ width: "90%", height: "13rem", margin: "auto" }}>

                            <Typography sx={{ fontSize: "1.2rem", fontWeight: "550", marginTop: "1rem", opacity: "0.7" }}>
                                Daily Updates
                            </Typography>

                            <Typography sx={{ fontSize: "1rem", marginTop: "1rem", color: "#606060", opacity: "0.8" }}>
                                As our valued member, you can receive daily updates and special offers on our monthly special events
                            </Typography>
                        </Box>
                    </Box>


                </Box>







            </Box>

        </>
    )
}

export default AstrovedMembership