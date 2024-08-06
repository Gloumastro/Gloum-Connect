import React, { useState } from 'react';
import { Box, List, ListItem, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NavLink } from 'react-router-dom';

const SecondNav = () => {

  const [open, setOpen] = useState(false);
  return (
    <>

      <Box sx={{}}>
        <Box sx={{ width: "90%", display: "flex", justifyContent: "space-between", marginLeft: "3rem" }}>
          {/* Container Box with Hover Effect */}

          <Box
            sx={{
              position: 'relative',
              bgcolor: 'background.paper',
              padding: 2,
              borderRadius: 1,
              cursor: 'pointer',
              '&:hover .content': {
                opacity: 1,
                visibility: 'visible',
              },
              '&:hover .icon': {
                transform: 'rotate(180deg)',
                transition: 'transform 0.3s ease',
              },

            }}
          >
            <img src='https://cdn.astroved.com/images/images-av/monthly-specials.jpg' alt="Monthly Specials" />
            <Typography variant="h8" component="div" sx={{
              mb: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: "400",
              cursor: 'pointer',
              color: 'text.primary',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: 'blue',
                '& .icon': {
                  color: 'blue',
                  transform: 'rotate(180deg)',
                },
              },


            }}>
              Monthly Specials
              <ExpandMoreIcon
                className="icon"
                sx={{
                  margin: "2px",
                  transition: 'transform 0.3s ease',
                  transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </Typography>

            {/* Content Box */}
            <Box
              className="content"
              sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '100%',
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                opacity: open ? 1 : 0,
                visibility: open ? 'visible' : 'hidden',
                transition: 'opacity 0.2s ease, visibility 0.2s ease',
                zIndex: 1,
              }}
            >
              <List sx={{ fontSize: "13px", fontWeight: "500" }}>

                {/* <NavLink to={'/gloumSpecial'} activeClassName="active"> */}
                  <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Gloum Specials</ListItem>
                {/* </NavLink> */}



                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Family Astrology</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Business Astrology</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Relationship Astrology</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>AstroVed Membership</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Birthday Special Ritual</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Monthly Powertimes</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>48-Day Remedy Programs</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>1- Year Remedy Programs</ListItem>
              </List>
            </Box>
          </Box>

          <Box
            sx={{
              position: 'relative',
              bgcolor: 'background.paper',
              padding: 2,
              borderRadius: 1,
              cursor: 'pointer',
              '&:hover .content': {
                opacity: 1,
                visibility: 'visible',
              },
              '&:hover .icon': {
                transform: 'rotate(180deg)',
                transition: 'transform 0.3s ease',
              },

            }}
          >
            <img src='https://cdn.astroved.com/images/images-av/astrospeaks.jpg' alt="AstroVed Speaks" />
            <Typography variant="h8" component="div" sx={{
              mb: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: "400",
              cursor: 'pointer',
              color: 'text.primary',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: 'blue',
                '& .icon': {
                  color: 'blue',
                  transform: 'rotate(180deg)',
                },
              },

              // Space between text and icon
            }}>
              AstroVed Speaks
              <ExpandMoreIcon
                className="icon"
                sx={{
                  margin: "2px",
                  transition: 'transform 0.3s ease',
                  transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </Typography>

            {/* Content Box */}
            <Box
              className="content"
              sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '100%',
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                opacity: open ? 1 : 0,
                visibility: open ? 'visible' : 'hidden',
                transition: 'opacity 0.2s ease, visibility 0.2s ease',
                zIndex: 1,
              }}
            >
              <List sx={{ fontSize: "13px", fontWeight: "500" }}>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Talk to Astrologer</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Chat With Astrologer</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Live Astrology Consultation</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Instant Insight</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Consult and Counsel with</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Nadi Astrology</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>DNA Astrology</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Astrology Written Reports</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Horoscope - Daily, Weekly & Monthly</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Transit Report</ListItem>
              </List>
            </Box>
          </Box>


          <Box
            sx={{
              position: 'relative',
              bgcolor: 'background.paper',
              padding: 2,
              borderRadius: 1,
              cursor: 'pointer',
              '&:hover .content': {
                opacity: 1,
                visibility: 'visible',
              },
              '&:hover .icon': {
                transform: 'rotate(180deg)',
                transition: 'transform 0.3s ease',
              },

            }}
          >
            <img src='https://cdn.astroved.com/images/images-av/instant-pooja-remedies.jpg' alt="Monthly Specials" />
            <Typography variant="h8" component="div" sx={{
              mb: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: "400",
              cursor: 'pointer',
              color: 'text.primary',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: 'blue',
                '& .icon': {
                  color: 'blue',
                  transform: 'rotate(180deg)',
                },
              },

            }}>
              Instant Poojas & Homas

            </Typography>

          </Box>

          <Box
            sx={{
              position: 'relative',
              bgcolor: 'background.paper',
              padding: 2,
              borderRadius: 1,
              cursor: 'pointer',
              '&:hover .content': {
                opacity: 1,
                visibility: 'visible',
              },
              '&:hover .icon': {
                transform: 'rotate(180deg)',
                transition: 'transform 0.3s ease',
              },

            }}
          >
            <img src='https://cdn.astroved.com/images/images-av/wealth-remedies.jpg' alt="Monthly Specials" />
            <Typography variant="h8" component="div" sx={{
              mb: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: "400",
              cursor: 'pointer',
              color: 'text.primary',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: 'blue',
                '& .icon': {
                  color: 'blue',
                  transform: 'rotate(180deg)',
                },
              },


            }}>
              Wealth Remedies
              <ExpandMoreIcon
                className="icon"
                sx={{
                  margin: "2px",
                  transition: 'transform 0.3s ease',
                  transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </Typography>

            {/* Content Box */}
            <Box
              className="content"
              sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '100%',
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                opacity: open ? 1 : 0,
                visibility: open ? 'visible' : 'hidden',
                transition: 'opacity 0.2s ease, visibility 0.2s ease',
                zIndex: 1,
              }}
            >
              <List sx={{ fontSize: "13px", fontWeight: "500" }}>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Planetary Remedies</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Dosha Remedies</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Kerala Remedies</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Narayan Nagbali Puja</ListItem>

              </List>
            </Box>
          </Box>

          <Box
            sx={{
              position: 'relative',
              bgcolor: 'background.paper',
              padding: 2,
              borderRadius: 1,
              cursor: 'pointer',
              '&:hover .content': {
                opacity: 1,
                visibility: 'visible',
              },
              '&:hover .icon': {
                transform: 'rotate(180deg)',
                transition: 'transform 0.3s ease',
              },

            }}
          >
            <img src='https://cdn.astroved.com/images/images-av/success-homa.jpg' alt="Success Homas" />
            <Typography variant="h8" component="div" sx={{
              mb: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: "400",
              cursor: 'pointer',
              color: 'text.primary',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: 'blue',
                '& .icon': {
                  color: 'blue',
                  transform: 'rotate(180deg)',
                },
              },

            }}>
              Success Homas
              <ExpandMoreIcon
                className="icon"
                sx={{
                  margin: "2px",
                  transition: 'transform 0.3s ease',
                  transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </Typography>

            {/* Content Box */}
            <Box
              className="content"
              sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '100%',
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                opacity: open ? 1 : 0,
                visibility: open ? 'visible' : 'hidden',
                transition: 'opacity 0.2s ease, visibility 0.2s ease',
                zIndex: 1,
              }}
            >
              <List sx={{ fontSize: "13px", fontWeight: "500" }}>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Homas</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Grand Homas</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Online Priest Services</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>AV Temples</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Poojas</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Abishekams</ListItem>

              </List>
            </Box>
          </Box>


          <Box
            sx={{
              position: 'relative',
              bgcolor: 'background.paper',
              padding: 2,
              borderRadius: 1,
              cursor: 'pointer',
              '&:hover .content': {
                opacity: 1,
                visibility: 'visible',
              },
              '&:hover .icon': {
                transform: 'rotate(180deg)',
                transition: 'transform 0.3s ease',
              },

            }}
          >
            <img src='https://cdn.astroved.com/images/images-av/free-astrology.jpg' alt="Free Astrology" />
            <Typography variant="h8" component="div" sx={{
              mb: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: "400",
              cursor: 'pointer',
              color: 'text.primary',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: 'blue',
                '& .icon': {
                  color: 'blue',
                  transform: 'rotate(180deg)'
                },
              },

              // Space between text and icon
            }}>
              Free Astrology
              <ExpandMoreIcon
                className="icon"
                sx={{
                  margin: "2px",
                  transition: 'transform 0.3s ease',
                  transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </Typography>

            {/* Content Box */}
            <Box
              className="content"
              sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '100%',
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                opacity: open ? 1 : 0,
                visibility: open ? 'visible' : 'hidden',
                transition: 'opacity 0.2s ease, visibility 0.2s ease',
                zIndex: 1,
              }}
            >
              <List sx={{ fontSize: "13px", fontWeight: "500", width: "100%" }}>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Free Horoscope Predictions</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Free Birth Chart Astrology Report</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Free Birth Star Astrology Report</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Free Moon Sign Report</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Free Numerology Report</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Free Planetary Influence Report</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Free Hora Astrology Report</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Check Zodiac Compatibility</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Panchang & Nakshatra</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>More....</ListItem>
              </List>
            </Box>
          </Box>


          <Box
            sx={{
              position: 'relative',
              bgcolor: 'background.paper',
              padding: 2,
              borderRadius: 1,
              cursor: 'pointer',
              '&:hover .content': {
                opacity: 1,
                visibility: 'visible',
              },
              '&:hover .icon': {
                transform: 'rotate(180deg)',
                transition: 'transform 0.3s ease',
              },

            }}
          >
            <img src='https://cdn.astroved.com/images/images-av/resources.jpg' alt="Resources" />
            <Typography variant="h8" component="div" sx={{
              mb: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: "400",
              cursor: 'pointer',
              color: 'text.primary',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: 'blue',
                '& .icon': {
                  color: 'blue',
                  transform: 'rotate(180deg)',
                },
              },


            }}>
              Resources
              <ExpandMoreIcon
                className="icon"
                sx={{
                  margin: "2px",
                  transition: 'transform 0.3s ease',
                  transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </Typography>

            {/* Content Box */}
            <Box
              className="content"
              sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '100%',
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                opacity: open ? 1 : 0,
                visibility: open ? 'visible' : 'hidden',
                transition: 'opacity 0.2s ease, visibility 0.2s ease',
                zIndex: 1,
              }}
            >
              <List sx={{ fontSize: "13px", fontWeight: "500" }}>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Contact Us </ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Free 2025 Calendar</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Blog</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Newsletter</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Gallary</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Store Reviews</ListItem>
                <ListItem sx={{ cursor: 'pointer', color: 'text.primary', '&:hover': { color: 'blue', '& .icon': { color: 'blue' }, } }}>Testimonials</ListItem>
              </List>
            </Box>
          </Box>

        </Box >
      </Box>

    </>


  )
}

export default SecondNav