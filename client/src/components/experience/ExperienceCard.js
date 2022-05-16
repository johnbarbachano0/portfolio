import React, { useState } from "react";
import CustomCard from "./CustomCard";
import Label from "../Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import WebIcon from "@mui/icons-material/Web";
import useCommon from "../useCommon";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Link,
  Typography,
} from "@mui/material";
import { getMonthYear } from "../misc";
import { styles } from "./Styles";
//icons
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LabelIcon from "../LabelIcon";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HourglassTopRoundedIcon from "@mui/icons-material/HourglassTopRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import BusinessIcon from "@mui/icons-material/Business";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import SummarizeRoundedIcon from "@mui/icons-material/SummarizeRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
//animation
import animate from "../Animate";

const ExperienceCard = ({ data }) => {
  const { projects } = data;
  const { stakeholders, responsibilities } = data?.jobDesc;
  const { isDark } = useCommon();
  const [expand, setExpand] = useState(false);

  const handleExpand = () => setExpand((prev) => !prev);

  return (
    <Card
      sx={{
        backgroundColor: isDark ? "#525E75" : "#DDDDDD",
        m: 0.5,
      }}
    >
      <CardContent
        sx={{
          ...styles.content,
          background: isDark ? "#006E7F" : "#7FB5FF",
          animation: `${animate} 1.5s ease-in both`,
        }}
      >
        <img
          src={data.logo}
          alt="Company Logo"
          style={{ height: 20, paddingRight: 5 }}
        />
        <Typography
          color="white"
          variant="body2"
          align="center"
          components="span"
        >
          <Link href={data.website} target="_blank" rel="noreferrer">
            {data?.company}
          </Link>
        </Typography>
      </CardContent>
      <CardContent sx={{ py: 0.5 }}>
        <LabelIcon
          icon={<CalendarMonthIcon />}
          data={`${getMonthYear(data?.startDate)} - ${getMonthYear(
            data?.endDate
          )}`}
        />
        <LabelIcon
          icon={<HourglassTopRoundedIcon />}
          data={`${data?.duration} years`}
        />
        <LabelIcon icon={<LocationOnRoundedIcon />} data={data?.location} />
        <Label
          icon={<BusinessIcon />}
          label="Company Description"
          data={data?.companyDesc}
        />
        <Label
          icon={<PersonRoundedIcon />}
          label="Role"
          data={data?.jobDesc?.jobTitle}
        />
        <Label
          icon={<SummarizeRoundedIcon />}
          label="Job Summary"
          data={data?.jobDesc?.summary}
        />
        {expand && (
          <>
            <Label icon={<GroupsRoundedIcon />} label="Stakeholders" />
            <Box sx={styles.container}>
              {stakeholders.map((holder, i) => (
                <CustomCard
                  key={i}
                  label={holder?.role}
                  icon={
                    <PersonIcon
                      sx={{
                        width: 20,
                        m: 0,
                        color: isDark ? "#004e92" : "#00aeff",
                      }}
                    />
                  }
                >
                  {holder?.task?.map((item, i) => (
                    <Typography
                      key={i}
                      sx={{ fontSize: 12, py: 0.25 }}
                      align="justify"
                    >
                      {<ArrowForwardIosIcon sx={{ fontSize: 8 }} />}
                      {item}
                    </Typography>
                  ))}
                </CustomCard>
              ))}
            </Box>
            <Label
              icon={<FormatListBulletedRoundedIcon />}
              label="Responsibilities"
            />
            <Box sx={styles.container}>
              {responsibilities.map((item, i) => (
                <CustomCard
                  key={i}
                  label={item?.state}
                  icon={
                    <SettingsIcon
                      sx={{
                        width: 20,
                        m: 0,
                        color: isDark ? "#004e92" : "#00aeff",
                      }}
                    />
                  }
                >
                  {item?.value?.map((item, i) => (
                    <Typography
                      key={i}
                      sx={{ fontSize: 12, py: 0.25 }}
                      align="justify"
                    >
                      {<ArrowForwardIosIcon sx={{ fontSize: 8 }} />}
                      {item}
                    </Typography>
                  ))}
                </CustomCard>
              ))}
            </Box>
            <Label icon={<AssignmentRoundedIcon />} label="Projects" />
            <Box sx={styles.container}>
              {projects.map((item, i) => (
                <CustomCard
                  key={i}
                  label={item?.name}
                  icon={
                    <WebIcon
                      sx={{
                        width: 20,
                        m: 0,
                        color: isDark ? "#004e92" : "#00aeff",
                      }}
                    />
                  }
                >
                  <Typography sx={{ fontSize: 12, py: 0.25 }} align="justify">
                    <LocationOnIcon
                      sx={{ fontSize: 12, position: "relative", top: 1 }}
                    />

                    {item?.location}
                  </Typography>
                  <Typography sx={{ fontSize: 12, py: 0.25 }} align="justify">
                    <BusinessIcon
                      sx={{ fontSize: 12, position: "relative", top: 1 }}
                    />
                    {item?.industry}
                  </Typography>
                </CustomCard>
              ))}
            </Box>
          </>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleExpand}>
          {expand ? "See Less" : "Expand"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ExperienceCard;
